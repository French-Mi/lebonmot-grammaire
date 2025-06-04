// verb_trainer.js
console.log("verb_trainer.js: Script start.");

window.VerbTrainer = (() => {
    console.log("verb_trainer.js: IIFE for VerbTrainer started.");

    // Globale Zustandsvariablen für den Verb-Trainer
    let selectedVerbsForTraining = [];
    let selectedTensesForTraining = [];
    let currentVerbDataToTrain = null;
    let currentTenseToTrain = null;
    let currentSentenceObject = null;
    let currentTrainingMode = '';
    let dndCorrectForms = [];

    // Queues für die Übungsrunden
    let originalTrainingQueue = [];
    let currentTrainingQueue = [];
    let mistakeQueue = [];
    let currentQueueIndex = -1;

    // ===================================================================
    // 1. ANSICHTEN RENDERN (Setup-Ansichten)
    // ===================================================================

    const renderVerbConfigView = () => {
        console.log("verb_trainer.js: renderVerbConfigView() called.");
        const container = document.getElementById('verb-config-view');
        if (!container) { console.error("verb_trainer.js: #verb-config-view container not found!"); return; }
        if (typeof window.tensesStructure !== 'object' || typeof window.getTenseDisplayName !== 'function') {
            console.error("verb_trainer.js: tensesStructure or getTenseDisplayName not found on window object!"); return;
        }
        let html = `<button class="btn-back vt-back-to-dashboard"><i class="fas fa-arrow-left"></i> Zurück zur Übersicht</button><h2>Schritt 1: Zeiten auswählen</h2><p>Wähle die Zeiten aus, die du üben möchtest.</p>`;
        for (const mood in window.tensesStructure) {
            html += `<div class="tense-mood-group"><h3>${mood}</h3>`;
            for (const groupName in window.tensesStructure[mood]) {
                const tenses = window.tensesStructure[mood][groupName];
                html += `<div class="tense-group">`;
                if (Array.isArray(tenses)) {
                    html += `<strong>${groupName}</strong><div class="tense-sub-group">`;
                    tenses.forEach(tenseKey => {
                        html += `<div class="tense-item"><input type="checkbox" id="tense-${tenseKey}" name="tenses" value="${tenseKey}"><label for="tense-${tenseKey}">${window.getTenseDisplayName(tenseKey)}</label></div>`;
                    });
                    html += `</div>`;
                } else {
                    const tenseKey = tenses;
                    html += `<div class="tense-item"><input type="checkbox" id="tense-${tenseKey}" name="tenses" value="${tenseKey}"><label for="tense-${tenseKey}">${window.getTenseDisplayName(tenseKey)}</label></div>`;
                }
                html += `</div>`;
            }
            html += `</div>`;
        }
        html += `<button id="vt-start-verb-training-btn" class="btn btn-primary">Weiter zur Verbauswahl</button>`;
        container.innerHTML = html;
        window.showView('verb-config-view');
    };

    const renderVerbSelectionView = () => {
        console.log("verb_trainer.js: renderVerbSelectionView() called.");
        const container = document.getElementById('verb-selection-view');
        if (!container) { console.error("verb_trainer.js: #verb-selection-view container not found!"); return; }
        if (typeof window.allVerbData !== 'object' || window.allVerbData === null) {
            console.error("verb_trainer.js: window.allVerbData not available!"); alert("Fehler: Verbdaten konnten nicht geladen werden."); return;
        }
        let verbGridHtml = '';
        Object.keys(window.allVerbData).sort().forEach(verbKey => {
            const verbInfo = window.allVerbData[verbKey];
            const isSelected = selectedVerbsForTraining.includes(verbKey);
            verbGridHtml += `<div class="verb-choice-item ${isSelected ? 'selected' : ''}" data-verb-key="${verbKey}" tabindex="0"><span class="verb-infinitive">${verbInfo.infinitive}</span><span class="verb-translation">(${verbInfo.translation})</span></div>`;
        });
        container.innerHTML = `<button class="btn-back vt-back-to-config"><i class="fas fa-arrow-left"></i> Zurück zur Zeitenauswahl</button><h2>Schritt 2: Verben auswählen</h2><div id="verb-selection-grid">${verbGridHtml}</div><button id="vt-select-verbs-btn" class="btn btn-primary">Weiter zur Modus-Auswahl</button>`;
        window.showView('verb-selection-view');
    };

    const renderVerbModeSelectionView = () => {
        console.log("verb_trainer.js: renderVerbModeSelectionView() called.");
        const container = document.getElementById('mode-buttons-container');
        if (!container) { console.error("verb_trainer.js: #mode-buttons-container not found!"); return; }
        container.innerHTML = `
            <button class="btn btn-primary vt-mode-btn" data-mode="standard">Standard (Alle Formen)</button>
            <button class="btn btn-primary vt-mode-btn" data-mode="shuffle">Shuffle (Einzelformen)</button> 
            <button class="btn btn-primary vt-mode-btn" data-mode="dnd">Drag & Drop (Zuordnen)</button>
            <button class="btn btn-primary vt-mode-btn" data-mode="fillgap">Lückentext</button> 
        `;
        window.showView('verb-mode-selection-view');
    };

    // ===================================================================
    // 2. LOGIK ZUR ERSTELLUNG DER ÜBUNGSRUNDE
    // ===================================================================

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function generateVerbTensePairs() {
        console.log("Generating pairs for verbs:", selectedVerbsForTraining, "and tenses:", selectedTensesForTraining);
        let pairs = [];
        selectedVerbsForTraining.forEach(verbKey => {
            selectedTensesForTraining.forEach(tenseKey => {
                const mood = tenseKey.substring(0, tenseKey.indexOf('_'));
                const tenseName = tenseKey.substring(tenseKey.indexOf('_') + 1);
                const verbData = window.allVerbData[verbKey];

                if (!verbData || !verbData[mood] || !verbData[mood][tenseName]) {
                    console.warn(`Data not found for path: ${verbKey} -> ${mood} -> ${tenseName}`);
                    return;
                }
                const tenseObject = verbData[mood][tenseName];
                if (tenseObject && tenseObject.forms && Array.isArray(tenseObject.forms) && tenseObject.forms.length > 0) {
                    pairs.push({ verb: verbKey, tense: tenseKey });
                } else {
                    console.warn(`Skipping pair: {${verbKey}, ${tenseKey}} because no valid forms were found.`, tenseObject);
                }
            });
        });
        console.log("Generated pairs:", pairs);
        return shuffleArray(pairs);
    }

    function getCorrectConjugations(verbData, tenseKey) {
        const mood = tenseKey.substring(0, tenseKey.indexOf('_'));
        const tenseName = tenseKey.substring(tenseKey.indexOf('_') + 1);
        if (!verbData || !verbData[mood] || !verbData[mood][tenseName]) {
            return null;
        }
        const tenseObject = verbData[mood][tenseName];
        return (tenseObject && tenseObject.forms) ? tenseObject.forms : null;
    }

    function setupStandardTraining() {
        console.log("verb_trainer.js: setupStandardTraining() called.");
        currentTrainingMode = 'standard';
        currentTrainingQueue = generateVerbTensePairs();
        if (currentTrainingQueue.length === 0) {
            alert("Für die aktuelle Auswahl konnten keine Übungen erstellt werden. Bitte überprüfen Sie die Daten in verb-data.js oder wählen Sie andere Optionen.");
            renderVerbModeSelectionView();
            return;
        }
        originalTrainingQueue = [...currentTrainingQueue];
        mistakeQueue = [];
        currentQueueIndex = -1;
        loadNextStandardConjugationChallenge();
    }

    function setupShuffleTraining() {
        console.log("verb_trainer.js: setupShuffleTraining() called.");
        currentTrainingMode = 'shuffle';
        const verbTensePairs = generateVerbTensePairs();
        if (verbTensePairs.length === 0) {
            alert("Für die aktuelle Auswahl konnten keine Übungen erstellt werden.");
            renderVerbModeSelectionView();
            return;
        }
        let allIndividualForms = [];
        verbTensePairs.forEach(pair => {
            for (let i = 0; i < 6; i++) {
                allIndividualForms.push({ verb: pair.verb, tense: pair.tense, pronounIndex: i });
            }
        });
        currentTrainingQueue = shuffleArray(allIndividualForms);
        originalTrainingQueue = [...currentTrainingQueue];
        mistakeQueue = [];
        currentQueueIndex = -1;
        loadNextShuffledFormChallenge();
    }

    function setupDragDropTraining() {
        console.log("verb_trainer.js: setupDragDropTraining() called.");
        currentTrainingMode = 'dnd';
        currentTrainingQueue = generateVerbTensePairs();
        if (currentTrainingQueue.length === 0) {
            alert("Für die aktuelle Auswahl konnten keine Drag & Drop-Übungen erstellt werden.");
            renderVerbModeSelectionView();
            return;
        }
        originalTrainingQueue = [...currentTrainingQueue];
        mistakeQueue = [];
        currentQueueIndex = -1;
        loadNextDragDropChallenge();
    }

    function setupFillgapTraining() {
        console.log("verb_trainer.js: setupFillgapTraining() called.");
        currentTrainingMode = 'fillgap';
        let allFillgapSentences = [];
        const verbTensePairs = generateVerbTensePairs();
        if (verbTensePairs.length === 0) {
            alert("Für die aktuelle Auswahl konnten keine Lückentext-Übungen erstellt werden.");
            renderVerbModeSelectionView();
            return;
        }

        verbTensePairs.forEach(pair => {
            const { verb: verbKey, tense: tenseKey } = pair;
            const mood = tenseKey.substring(0, tenseKey.indexOf('_'));
            const tenseName = tenseKey.substring(tenseKey.indexOf('_') + 1);
            const tenseObj = window.allVerbData[verbKey]?.[mood]?.[tenseName];

            if (tenseObj && tenseObj.examples && Array.isArray(tenseObj.examples) && tenseObj.examples.length > 0) {
                tenseObj.examples.forEach(example => {
                    allFillgapSentences.push({ verb: verbKey, tense: tenseKey, sentenceObj: example });
                });
            }
        });

        if (allFillgapSentences.length === 0) {
            alert("Für die ausgewählten Verben/Zeiten gibt es leider keine Lückentext-Beispiele. Bitte fügen Sie Beispiele in verb-data.js hinzu oder wählen Sie andere Verben/Zeiten.");
            renderVerbModeSelectionView();
            return;
        }

        currentTrainingQueue = shuffleArray(allFillgapSentences);
        originalTrainingQueue = [...currentTrainingQueue];
        mistakeQueue = [];
        currentQueueIndex = -1;
        loadNextFillgapChallenge();
    }
    
    // ===================================================================
    // 3. LOGIK ZUM LADEN DER NÄCHSTEN AUFGABE
    // ===================================================================

    const loadNextStandardConjugationChallenge = () => {
        currentQueueIndex++;
        if (currentQueueIndex >= currentTrainingQueue.length) {
            renderRoundSummaryView();
            return;
        }
        const challenge = currentTrainingQueue[currentQueueIndex];
        currentVerbDataToTrain = window.allVerbData[challenge.verb];
        currentTenseToTrain = challenge.tense;
        renderStandardTrainingView();
    };

    const loadNextShuffledFormChallenge = () => {
        currentQueueIndex++;
        if (currentQueueIndex >= currentTrainingQueue.length) {
            renderRoundSummaryView();
            return;
        }
        const challenge = currentTrainingQueue[currentQueueIndex];
        currentVerbDataToTrain = window.allVerbData[challenge.verb];
        currentTenseToTrain = challenge.tense;
        renderShuffleTrainingView(challenge.pronounIndex);
    };

    const loadNextDragDropChallenge = () => {
        currentQueueIndex++;
        if (currentQueueIndex >= currentTrainingQueue.length) {
            renderRoundSummaryView();
            return;
        }
        const challenge = currentTrainingQueue[currentQueueIndex];
        currentVerbDataToTrain = window.allVerbData[challenge.verb];
        currentTenseToTrain = challenge.tense;
        dndCorrectForms = getCorrectConjugations(currentVerbDataToTrain, currentTenseToTrain);
        if (!dndCorrectForms) {
            loadNextDragDropChallenge();
            return;
        }
        renderDragDropView();
    };

    const loadNextFillgapChallenge = () => {
        currentQueueIndex++;
        if (currentQueueIndex >= currentTrainingQueue.length) {
            renderRoundSummaryView();
            return;
        }
        const challenge = currentTrainingQueue[currentQueueIndex];
        currentVerbDataToTrain = window.allVerbData[challenge.verb];
        currentTenseToTrain = challenge.tense;
        currentSentenceObject = challenge.sentenceObj;
        renderFillgapView();
    };
    
    // ===================================================================
    // 4. ANSICHTEN RENDERN (Trainings-Ansichten)
    // ===================================================================
    
    const renderStandardTrainingView = () => {
        console.log("verb_trainer.js: renderStandardTrainingView() called.");
        if (!currentVerbDataToTrain || !currentTenseToTrain) return;
        document.getElementById('verb-infinitive-display').textContent = currentVerbDataToTrain.infinitive;
        document.getElementById('tense-display').textContent = window.getTenseDisplayName(currentTenseToTrain);
        const conjugationArea = document.getElementById('standard-conjugation-area');
        conjugationArea.innerHTML = '';
        document.getElementById('verb-training-feedback').innerHTML = '';
        document.getElementById('verb-training-feedback').className = 'feedback-message';
        document.getElementById('check-verb-conjugation-btn').style.display = 'inline-block';
        document.getElementById('next-verb-standard-btn').style.display = 'none';
        window.pronounsListSimple.forEach((pronoun, i) => {
            conjugationArea.innerHTML += `<div class="pronoun-display">${pronoun}</div><div class="verb-input-wrapper"><input type="text" class="verb-input" data-index="${i}" autocorrect="off" autocapitalize="none"></div>`;
        });
        createSpecialCharsBar(document.getElementById('verb-training-standard-view').querySelector('.special-chars-bar-container'));
        window.showView('verb-training-standard-view');
        conjugationArea.querySelector('.verb-input')?.focus();
    };
    
    const renderShuffleTrainingView = (pronounIndex) => {
        console.log("verb_trainer.js: renderShuffleTrainingView() called for pronoun index:", pronounIndex);
        if (!currentVerbDataToTrain || !currentTenseToTrain) { console.error("Shuffle: Daten für Ansicht fehlen!"); return; }
        
        document.getElementById('shuffle-verb-infinitive-display').textContent = currentVerbDataToTrain.infinitive;
        document.getElementById('shuffle-tense-display').textContent = window.getTenseDisplayName(currentTenseToTrain);
        
        const conjugationArea = document.getElementById('shuffle-conjugation-area');
        conjugationArea.innerHTML = '';

        conjugationArea.innerHTML = `
            <div class="pronoun-display">${window.pronounsListSimple[pronounIndex]}</div>
            <div class="verb-input-wrapper">
                <input type="text" class="verb-input" data-pronoun-index="${pronounIndex}" autocorrect="off" autocapitalize="none">
            </div>
        `;

        document.getElementById('shuffle-verb-training-feedback').innerHTML = '';
        document.getElementById('shuffle-verb-training-feedback').className = 'feedback-message';
        document.getElementById('check-shuffle-form-btn').style.display = 'inline-block';
        document.getElementById('next-shuffle-form-btn').style.display = 'none';

        createSpecialCharsBar(document.getElementById('verb-training-shuffle-view').querySelector('.special-chars-bar-container'));
        window.showView('verb-training-shuffle-view');
        conjugationArea.querySelector('.verb-input')?.focus();
    };

    const renderDragDropView = () => {
        console.log("verb_trainer.js: renderDragDropView() called.");
        if (!currentVerbDataToTrain || !currentTenseToTrain || !dndCorrectForms) { console.error("DnD: Daten für Ansicht fehlen!"); return; }
        
        document.getElementById('dnd-verb-infinitive-display').textContent = currentVerbDataToTrain.infinitive;
        document.getElementById('dnd-tense-display').textContent = window.getTenseDisplayName(currentTenseToTrain);

        const pronounTargetsContainer = document.getElementById('dnd-pronoun-targets');
        const verbFormsPoolContainer = document.getElementById('dnd-verb-forms-pool');
        pronounTargetsContainer.innerHTML = '';
        verbFormsPoolContainer.innerHTML = '';

        window.pronounsListSimple.forEach((pronoun, index) => {
            pronounTargetsContainer.innerHTML += `<div class="pronoun-drop-target" data-pronoun-index="${index}"><span class="pronoun-text">${pronoun}</span></div>`;
        });
        
        const shuffledForms = shuffleArray([...dndCorrectForms]);
        shuffledForms.forEach(formText => {
            const formElement = document.createElement('div');
            formElement.className = 'draggable-verb-form';
            formElement.textContent = formText.split('/')[0].trim();
            formElement.dataset.verbFormText = formText;
            formElement.draggable = true;
            verbFormsPoolContainer.appendChild(formElement);
        });

        document.getElementById('dnd-feedback').innerHTML = '';
        document.getElementById('dnd-feedback').className = 'feedback-message';
        document.getElementById('check-dnd-btn').style.display = 'inline-block';
        document.getElementById('next-dnd-challenge-btn').style.display = 'none';

        window.showView('verb-training-dnd-view');
    };

    const renderFillgapView = () => {
        console.log("verb_trainer.js: renderFillgapView() called.");
        if (!currentVerbDataToTrain || !currentTenseToTrain || !currentSentenceObject) { console.error("Fillgap: Daten für Ansicht fehlen!"); return; }

        document.getElementById('fillgap-verb-infinitive-display').textContent = currentVerbDataToTrain.infinitive;
        document.getElementById('fillgap-tense-display').textContent = window.getTenseDisplayName(currentTenseToTrain);

        const sentenceContainer = document.getElementById('fillgap-sentence-container');
        const sentenceParts = currentSentenceObject.sentence.split(currentSentenceObject.placeholder);
        
        let sentenceHTML = `<span class="sentence-part">${sentenceParts[0]}</span>`;
        if (currentSentenceObject.placeholder === '___ ___') {
             sentenceHTML += `<input type="text" class="verb-input fillgap-input aux-input" data-verb-part="aux" autocorrect="off" autocapitalize="none">`;
             sentenceHTML += `<input type="text" class="verb-input fillgap-input participle-input" data-verb-part="participle" autocorrect="off" autocapitalize="none">`;
        } else {
             sentenceHTML += `<input type="text" class="verb-input fillgap-input" data-verb="${currentVerbDataToTrain.infinitive}" autocorrect="off" autocapitalize="none">`;
        }
       
        if (sentenceParts.length > 1) { sentenceHTML += `<span class="sentence-part">${sentenceParts[1]}</span>`; }
        sentenceHTML += `<span class="sentence-speaker-icon-wrapper"><i class="fas fa-volume-up fillgap-sentence-speaker-icon"></i></span>`;
        sentenceContainer.innerHTML = sentenceHTML;

        document.getElementById('fillgap-feedback').innerHTML = '';
        document.getElementById('fillgap-feedback').className = 'feedback-message';
        document.getElementById('check-fillgap-btn').style.display = 'inline-block';
        document.getElementById('next-fillgap-challenge-btn').style.display = 'none';
        
        createSpecialCharsBar(document.getElementById('verb-training-fillgap-view').querySelector('.special-chars-bar-container'));
        window.showView('verb-training-fillgap-view');
        sentenceContainer.querySelector('.fillgap-input')?.focus();
    };

    // ===================================================================
    // 5. LOGIK ZUR ANTWORT-ÜBERPRÜFUNG
    // ===================================================================

    const checkStandardConjugation = () => {
        const inputs = document.querySelectorAll('#standard-conjugation-area .verb-input');
        const correctAnswers = getCorrectConjugations(currentVerbDataToTrain, currentTenseToTrain);
        if (!correctAnswers) { console.error("verb_trainer.js: Failed to get correct conjugations."); return; }
        
        let allCorrectOverall = true;
        let mistakesOverall = 0;
        
        inputs.forEach((input, index) => {
            const userAnswerOriginal = input.value.trim();
            const userAnswerLower = userAnswerOriginal.toLowerCase();
            const actualCorrectAnswer = correctAnswers[index];
            const possibleCorrectAnswers = actualCorrectAnswer.split('/').map(a => a.trim().toLowerCase());
            const isCorrect = possibleCorrectAnswers.includes(userAnswerLower);

            if (isCorrect) {
                input.classList.remove('incorrect');
                input.classList.add('correct');
            } else {
                input.classList.remove('correct');
                input.classList.add('incorrect');
                input.value = `${userAnswerOriginal === "" ? "" : userAnswerOriginal + " "}(Korrekt: ${actualCorrectAnswer.split('/')[0].trim()})`;
                allCorrectOverall = false;
                mistakesOverall++;
            }
            input.disabled = true;
        });

        if (!allCorrectOverall) {
            const challenge = currentTrainingQueue[currentQueueIndex];
            if (!mistakeQueue.some(item => item.verb === challenge.verb && item.tense === challenge.tense)) {
                mistakeQueue.push(challenge);
            }
        }

        const feedback = document.getElementById('verb-training-feedback');
        if (allCorrectOverall) {
            feedback.textContent = "Super! Alles richtig!";
            feedback.className = "feedback-message success";
            window.addXp(20);
        } else {
            feedback.textContent = `Du hast ${mistakesOverall} Fehler. Schau dir die Korrekturen an.`;
            feedback.className = "feedback-message error";
            window.addXp(Math.max(0, 10 - mistakesOverall * 2));
        }

        document.getElementById('check-verb-conjugation-btn').style.display = 'none';
        document.getElementById('next-verb-standard-btn').style.display = 'inline-block';
    };

    const checkShuffleForm = () => {
        const input = document.querySelector('#shuffle-conjugation-area .verb-input');
        if (!input) { console.error("Shuffle-Modus: Eingabefeld nicht gefunden."); return; }
        const pronounIndex = parseInt(input.dataset.pronounIndex, 10);
        const userAnswerOriginal = input.value.trim();
        const userAnswerLower = userAnswerOriginal.toLowerCase();
        const correctConjugationsList = getCorrectConjugations(currentVerbDataToTrain, currentTenseToTrain);
        
        if (!correctConjugationsList || !correctConjugationsList[pronounIndex]) {
            console.error("Shuffle-Modus: Korrekte Konjugation nicht gefunden.");
            return;
        }
        
        const actualCorrectAnswer = correctConjugationsList[pronounIndex];
        const possibleCorrectAnswers = actualCorrectAnswer.split('/').map(a => a.trim().toLowerCase());
        const isCorrect = possibleCorrectAnswers.includes(userAnswerLower);
        
        const feedback = document.getElementById('shuffle-verb-training-feedback');
        if (isCorrect) {
            input.classList.add('correct');
            feedback.textContent = "Richtig!";
            feedback.className = "feedback-message success";
            window.addXp(5);
        } else {
            input.classList.add('incorrect');
            input.value = `${userAnswerOriginal === "" ? "" : userAnswerOriginal + " "}(Korrekt: ${actualCorrectAnswer.split('/')[0].trim()})`;
            feedback.textContent = "Leider falsch.";
            feedback.className = "feedback-message error";
            const challengeForMistake = currentTrainingQueue[currentQueueIndex];
            if (!mistakeQueue.some(item => JSON.stringify(item) === JSON.stringify(challengeForMistake))) {
                mistakeQueue.push(challengeForMistake);
            }
        }
        input.disabled = true;
        document.getElementById('check-shuffle-form-btn').style.display = 'none';
        document.getElementById('next-shuffle-form-btn').style.display = 'inline-block';
    };

    const checkDragDropAnswers = () => {
        const pronounTargets = document.querySelectorAll('#dnd-pronoun-targets .pronoun-drop-target');
        let allCorrect = true;
        let mistakesMadeThisCheck = 0;
        
        pronounTargets.forEach(target => {
            target.classList.remove('correct-drop', 'incorrect-drop');
            const oldCorrection = target.querySelector('.dnd-correction-text');
            if(oldCorrection) oldCorrection.remove();

            const droppedFormElement = target.querySelector('.draggable-verb-form');
            const pronounIndex = parseInt(target.dataset.pronounIndex, 10);
            const correctFormForPronoun = dndCorrectForms[pronounIndex];
            
            if (droppedFormElement) {
                const droppedFormText = droppedFormElement.dataset.verbFormText;
                const isMatch = correctFormForPronoun.split('/').map(f => f.trim().toLowerCase()).includes(droppedFormText.split('/')[0].trim().toLowerCase());
                if (isMatch) {
                    target.classList.add('correct-drop');
                } else {
                    target.classList.add('incorrect-drop');
                    allCorrect = false;
                    mistakesMadeThisCheck++;
                    const correctionText = document.createElement('span');
                    correctionText.className = 'dnd-correction-text';
                    correctionText.textContent = `(Korrekt: ${correctFormForPronoun.split('/')[0].trim()})`;
                    target.appendChild(correctionText);
                }
            } else {
                allCorrect = false;
                mistakesMadeThisCheck++;
                target.classList.add('incorrect-drop');
                const correctionText = document.createElement('span');
                correctionText.className = 'dnd-correction-text';
                correctionText.textContent = `(Korrekt: ${correctFormForPronoun.split('/')[0].trim()})`;
                target.appendChild(correctionText);
            }
        });

        const feedback = document.getElementById('dnd-feedback');
        if (allCorrect) {
            feedback.textContent = "Super! Alles richtig zugeordnet!";
            feedback.className = "feedback-message success";
            window.addXp(15);
        } else {
            feedback.textContent = `Du hast ${mistakesMadeThisCheck} Fehler.`;
            feedback.className = "feedback-message error";
            const challenge = currentTrainingQueue[currentQueueIndex];
            if (!mistakeQueue.some(item => item.verb === challenge.verb && item.tense === challenge.tense)) {
                mistakeQueue.push(challenge);
            }
        }
        document.getElementById('check-dnd-btn').style.display = 'none';
        document.getElementById('next-dnd-challenge-btn').style.display = 'inline-block';
    };
    
    const checkFillgapAnswer = () => {
        const inputs = document.querySelectorAll('#fillgap-sentence-container .fillgap-input');
        if (inputs.length === 0) { console.error("Fillgap: Eingabefeld nicht gefunden."); return; }

        const pronounForConjugation = currentSentenceObject.pronounMap;
        const pronounIndex = getPronounIndex(pronounForConjugation);
        if (pronounIndex === undefined) { return; }

        const correctFormsArray = getCorrectConjugations(currentVerbDataToTrain, currentTenseToTrain);
        if (!correctFormsArray || !correctFormsArray[pronounIndex]) { return; }

        const actualCorrectAnswer = correctFormsArray[pronounIndex];
        let isCorrect = false;

        if (inputs.length > 1) { // Zusammengesetzte Zeit
            const userAnswerAux = inputs[0].value.trim().toLowerCase();
            const userAnswerParticiple = inputs[1].value.trim().toLowerCase();
            const [correctAux, correctParticiple] = actualCorrectAnswer.split(' ');
            const isAuxCorrect = userAnswerAux === correctAux.toLowerCase();
            const isParticipleCorrect = userAnswerParticiple === correctParticiple.toLowerCase();
            isCorrect = isAuxCorrect && isParticipleCorrect;
            inputs[0].classList.toggle('correct', isAuxCorrect);
            inputs[0].classList.toggle('incorrect', !isAuxCorrect);
            inputs[1].classList.toggle('correct', isParticipleCorrect);
            inputs[1].classList.toggle('incorrect', !isParticipleCorrect);
        } else { // Einfache Zeit
            const userAnswerLower = inputs[0].value.trim().toLowerCase();
            const possibleCorrectAnswers = actualCorrectAnswer.split('/').map(a => a.trim().toLowerCase());
            isCorrect = possibleCorrectAnswers.includes(userAnswerLower);
            inputs[0].classList.toggle('correct', isCorrect);
            inputs[0].classList.toggle('incorrect', !isCorrect);
        }

        const feedback = document.getElementById('fillgap-feedback');
        if (isCorrect) {
            feedback.textContent = "Richtig!";
            feedback.className = "feedback-message success";
            window.addXp(10);
        } else {
            feedback.textContent = `Leider falsch. Richtig ist: ${actualCorrectAnswer}`;
            feedback.className = "feedback-message error";
            const challengeForMistake = currentTrainingQueue[currentQueueIndex];
            if (!mistakeQueue.some(item => JSON.stringify(item) === JSON.stringify(challengeForMistake))) {
                mistakeQueue.push(challengeForMistake);
            }
        }
        
        inputs.forEach(input => input.disabled = true);
        document.getElementById('check-fillgap-btn').style.display = 'none';
        document.getElementById('next-fillgap-challenge-btn').style.display = 'inline-block';
    };

    function getPronounIndex(pronounMapValue) {
        const map = { "je": 0, "j'": 0, "tu": 1, "il": 2, "elle": 2, "on": 2, "nous": 3, "vous": 4, "ils": 5, "elles": 5 };
        return map[pronounMapValue.toLowerCase()];
    }

    // ===================================================================
    // 6. HILFSFUNKTIONEN & RUNDENABSCHLUSS
    // ===================================================================

    const renderRoundSummaryView = () => {
        console.log("verb_trainer.js: renderRoundSummaryView() called.");
        const container = document.getElementById('round-summary-view');
        if (!container) { console.error("verb_trainer.js: #round-summary-view container not found!"); return; }
        
        const mistakesCount = mistakeQueue.length;
        let title, message, animationHtml = '';
        
        if (mistakesCount === 0) {
            title = "Perfekt!";
            message = "Glückwunsch! Du hast diese Runde fehlerfrei abgeschlossen.";
            animationHtml = createCelebrationAnimation();
        } else {
            title = "Runde beendet";
            const exerciseWord = mistakesCount === 1 ? 'Übung' : 'Übungen';
            message = `Du hattest bei ${mistakesCount} ${exerciseWord} Fehler.`;
        }
        
        container.innerHTML = `
            <div id="summary-animation-container">${animationHtml}</div>
            <h2>${title}</h2>
            <p>${message}</p>
            <div class="summary-actions">
                <button id="vt-repeat-mistakes-btn" class="btn btn-primary" ${mistakesCount === 0 ? 'disabled' : ''}>Fehler wiederholen</button>
                <button id="vt-repeat-all-btn" class="btn btn-secondary">Ganze Runde wiederholen</button>
                <button id="vt-return-to-dashboard-btn" class="btn btn-secondary">Zurück zur Übersicht</button>
            </div>
        `;
        window.showView('round-summary-view');
    };

    const createCelebrationAnimation = () => {
        let confettiHtml = ''; const colors = ['#ffc107', '#4A90E2', '#EF4135', '#FFFFFF'];
        for (let i = 0; i < 40; i++) {
            const color = colors[i % colors.length]; const left = Math.random() * 100;
            const animDuration = 1.2 + Math.random() * 0.5; const delay = Math.random() * 0.5;
            confettiHtml += `<div class="confetti" style="left: ${left}%; background-color: ${color}; animation-duration: ${animDuration}s; animation-delay: ${delay}s;"></div>`;
        }
        const logoHtml = `<div class="celebrating-logo"><div class="speech-bubble-body"></div><div class="speech-bubble-tail"></div><div class="flag-icon"><div class="flag-blue"></div><div class="flag-white"></div><div class="flag-red"></div></div></div>`;
        return logoHtml + confettiHtml;
    };

    const insertCharacterIntoInput = (char) => {
        const activeInput = document.querySelector('input:focus');
        if (activeInput && (activeInput.matches('.verb-input') || activeInput.matches('.fillgap-input'))) {
            const start = activeInput.selectionStart; const end = activeInput.selectionEnd;
            activeInput.value = activeInput.value.substring(0, start) + char + activeInput.value.substring(end);
            activeInput.focus(); activeInput.setSelectionRange(start + 1, start + 1);
        }
    };

    const createSpecialCharsBar = (containerElement) => {
        if (!containerElement) return;
        let bar = containerElement.querySelector('.special-chars-bar');
        if(bar) bar.remove();
        bar = document.createElement('div');
        bar.className = 'special-chars-bar';
        window.frenchSpecialChars.forEach(char => {
            const btn = document.createElement('button');
            btn.className = 'char-btn';
            btn.textContent = char;
            btn.type = 'button';
            btn.addEventListener('click', () => insertCharacterIntoInput(char));
            bar.appendChild(btn);
        });
        containerElement.appendChild(bar);
    };

    // ===================================================================
    // 7. EVENT LISTENERS & INITIALISIERUNG
    // ===================================================================

    function initializeVerbTrainerEventListeners() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) { console.error("verb_trainer.js: #main-content nicht gefunden!"); return; }

        let draggedItem = null;

        mainContent.addEventListener('click', e => {
            const target = e.target;
            if (target.closest('.vt-back-to-dashboard')) { window.renderDashboard(); window.showView('dashboard-view'); return; }
            if (target.closest('.vt-back-to-config')) { renderVerbConfigView(); return; }
            if (target.closest('#vt-start-verb-training-btn')) {
                selectedTensesForTraining = Array.from(document.querySelectorAll('#verb-config-view input[name="tenses"]:checked')).map(cb => cb.value);
                if (selectedTensesForTraining.length === 0) { alert("Bitte wähle mindestens eine Zeitform aus."); } else { renderVerbSelectionView(); }
                return;
            }
            if (target.closest('#vt-select-verbs-btn')) {
                if (selectedVerbsForTraining.length === 0) { alert("Bitte wähle mindestens ein Verb aus."); } else { renderVerbModeSelectionView(); }
                return;
            }
            const verbChoiceItem = target.closest('.verb-choice-item');
            if (verbChoiceItem) {
                const verbKey = verbChoiceItem.dataset.verbKey;
                verbChoiceItem.classList.toggle('selected');
                if (verbChoiceItem.classList.contains('selected')) {
                    if (!selectedVerbsForTraining.includes(verbKey)) selectedVerbsForTraining.push(verbKey);
                } else {
                    selectedVerbsForTraining = selectedVerbsForTraining.filter(v => v !== verbKey);
                }
                return;
            }
            const modeButton = target.closest('.vt-mode-btn[data-mode]');
            if (modeButton) {
                const mode = modeButton.dataset.mode;
                if (mode === 'standard') setupStandardTraining();
                else if (mode === 'shuffle') setupShuffleTraining();
                else if (mode === 'dnd') setupDragDropTraining();
                else if (mode === 'fillgap') setupFillgapTraining();
                return;
            }
            if (target.closest('#check-verb-conjugation-btn')) { checkStandardConjugation(); return; }
            if (target.closest('#next-verb-standard-btn')) { loadNextStandardConjugationChallenge(); return; }
            if (target.closest('#check-shuffle-form-btn')) { checkShuffleForm(); return; }
            if (target.closest('#next-shuffle-form-btn')) { loadNextShuffledFormChallenge(); return; }
            if (target.closest('#check-dnd-btn')) { checkDragDropAnswers(); return; }
            if (target.closest('#next-dnd-challenge-btn')) { loadNextDragDropChallenge(); return; }
            if (target.closest('#check-fillgap-btn')) { checkFillgapAnswer(); return; }
            if (target.closest('#next-fillgap-challenge-btn')) { loadNextFillgapChallenge(); return; }
            if (target.closest('#vt-repeat-mistakes-btn')) {
                currentTrainingQueue = [...mistakeQueue];
                mistakeQueue = [];
                currentQueueIndex = -1;
                if (currentTrainingQueue.length > 0) {
                    if (currentTrainingMode === 'standard') loadNextStandardConjugationChallenge();
                    else if (currentTrainingMode === 'shuffle') loadNextShuffledFormChallenge();
                    else if (currentTrainingMode === 'dnd') loadNextDragDropChallenge();
                    else if (currentTrainingMode === 'fillgap') loadNextFillgapChallenge();
                }
                return;
            }
            if (target.closest('#vt-repeat-all-btn')) {
                currentTrainingQueue = [...originalTrainingQueue];
                mistakeQueue = [];
                currentQueueIndex = -1;
                if (currentTrainingQueue.length > 0) {
                    if (currentTrainingMode === 'standard') loadNextStandardConjugationChallenge();
                    else if (currentTrainingMode === 'shuffle') loadNextShuffledFormChallenge();
                    else if (currentTrainingMode === 'dnd') loadNextDragDropChallenge();
                    else if (currentTrainingMode === 'fillgap') loadNextFillgapChallenge();
                }
                return;
            }
            if (target.closest('#vt-return-to-dashboard-btn')) {
                window.renderDashboard();
                window.showView('dashboard-view');
                return;
            }
            const mainSpeakerIcon = target.closest('#verb-speaker-icon, #shuffle-verb-speaker-icon, #dnd-verb-speaker-icon, #fillgap-verb-speaker-icon');
            if (mainSpeakerIcon) {
                const infinitive = mainSpeakerIcon.closest('.verb-training-header').querySelector('span[id$="-infinitive-display"]').textContent;
                if (infinitive) window.speakText(infinitive, 'fr-FR');
                return;
            }
        });

        mainContent.addEventListener('dragstart', e => { if (e.target.classList.contains('draggable-verb-form')) { draggedItem = e.target; setTimeout(() => e.target.style.opacity = '0.5', 0); } });
        mainContent.addEventListener('dragend', e => { if (draggedItem) { setTimeout(() => { draggedItem.style.opacity = '1'; draggedItem = null; }, 0); } });
        mainContent.addEventListener('dragover', e => { e.preventDefault(); const target = e.target.closest('.pronoun-drop-target'); if (target) { target.classList.add('drag-over'); } });
        mainContent.addEventListener('dragleave', e => { const target = e.target.closest('.pronoun-drop-target'); if (target) { target.classList.remove('drag-over'); } });
        mainContent.addEventListener('drop', e => {
            e.preventDefault();
            const dropTarget = e.target.closest('.pronoun-drop-target');
            if (dropTarget && draggedItem) {
                dropTarget.classList.remove('drag-over');
                const existingItem = dropTarget.querySelector('.draggable-verb-form');
                if (existingItem) {
                    document.getElementById('dnd-verb-forms-pool').appendChild(existingItem);
                }
                dropTarget.appendChild(draggedItem);
            }
        });
        
        document.addEventListener('keydown', e => {
             if (e.key !== 'Enter') return;
             const activeViewId = document.querySelector('.view.active')?.id;
             if (!activeViewId) return;

             let checkBtnId, nextBtnId;
             if (activeViewId === 'verb-training-standard-view') {
                 checkBtnId = 'check-verb-conjugation-btn'; nextBtnId = 'next-verb-standard-btn';
             } else if (activeViewId === 'verb-training-shuffle-view') {
                 checkBtnId = 'check-shuffle-form-btn'; nextBtnId = 'next-shuffle-form-btn';
             } else if (activeViewId === 'verb-training-fillgap-view') {
                checkBtnId = 'check-fillgap-btn'; nextBtnId = 'next-fillgap-challenge-btn';
             } else if (activeViewId === 'verb-training-dnd-view') {
                checkBtnId = 'check-dnd-btn'; nextBtnId = 'next-dnd-challenge-btn';
             } else {
                 return;
             }
             e.preventDefault();
             const checkBtn = document.getElementById(checkBtnId);
             const nextBtn = document.getElementById(nextBtnId);
             if (checkBtn && checkBtn.style.display !== 'none') checkBtn.click();
             else if (nextBtn && nextBtn.style.display !== 'none') nextBtn.click();
        });
    }

    function initVerbTrainerModule() {
        console.log("verb_trainer.js: VerbTrainer.init() called.");
        selectedVerbsForTraining = [];
        selectedTensesForTraining = [];
        currentTrainingMode = '';
        renderVerbConfigView();
    }

    initializeVerbTrainerEventListeners();

    return {
        init: initVerbTrainerModule
    };
})();

console.log("verb_trainer.js: Script end. window.VerbTrainer:", window.VerbTrainer);