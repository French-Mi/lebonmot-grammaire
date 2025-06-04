// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js: DOMContentLoaded event fired.");

    // ===================================================================
    // 1. DATEN & GLOBALE VARIABLEN
    // ===================================================================
    console.log("script.js: Initializing global data...");
    const grammarData = {
        articles: {
            title: "Les Articles (Artikel)",
            theory: "Artikel stehen vor Substantiven. 'Un/une' sind unbestimmt (ein/eine), 'le/la/les' sind bestimmt (der/die/das). Teilungsartikel wie 'du/de la' werden für unzählbare Mengen verwendet. 'à' und 'de' verschmelzen mit 'le' und 'les' zu 'au, aux, du, des'.",
            exercises: [
                { id: "art01", title: "Bestimmt vs. Unbestimmt", xp: 10, questions: [
                    { q: "J'ai ___ (ein) chien.", a: "un" }, { q: "C'est ___ (die) maison de Paul.", a: "la" },
                    { q: "Elle a ___ (eine) idée.", a: "une" }, { q: "Ce sont ___ (die) clés.", a: "les" }
                ]},
                { id: "art02", title: "Teilungsartikel", xp: 15, questions: [
                    { q: "Je bois ___ (etwas) café.", a: "du" }, { q: "Tu manges ___ (etwas) salade.", a: "de la" },
                    { q: "Il achète ___ (etwas) eau.", a: "de l'" }
                ]},
                { id: "art03", title: "Kontraktionen (au, aux, du, des)", xp: 15, questions: [
                    { q: "Je vais ___ (à + le) cinéma.", a: "au" }, { q: "Il parle ___ (à + les) enfants.", a: "aux" },
                    { q: "Le livre ___ (de + le) professeur.", a: "du" }, { q: "La voiture ___ (de + les) voisins.", a: "des" }
                ]}
            ]
        },
        noms: {
            title: "Les Noms (Substantive)",
            theory: "Substantive haben im Französischen ein Geschlecht (maskulin oder feminin). Der Plural wird meist durch Anhängen von '-s' gebildet. Es gibt jedoch viele Ausnahmen, z.B. enden Wörter auf '-eau' im Plural auf '-eaux' und Wörter auf '-al' auf '-aux'.",
            exercises: [
                { id: "nom01", title: "Pluralbildung: Standard", xp: 10, questions: [
                    { q: "un livre -> des ___", a: "livres" }, { q: "la table -> les ___", a: "tables" }
                ]},
                { id: "nom02", title: "Pluralbildung: Ausnahmen", xp: 15, questions: [
                    { q: "un journal -> des ___", a: "journaux" }, { q: "le bateau -> les ___", a: "bateaux" },
                    { q: "un animal -> des ___", a: "animaux" }
                ]}
            ]
        },
        adjectifs: {
            title: "Les Adjectifs (Adjektive)",
            theory: "Adjektive passen sich in Geschlecht und Zahl an das Substantiv an, das sie beschreiben (Angleichung). Die meisten Adjektive stehen hinter dem Substantiv, einige kurze und häufige (z.B. für Schönheit, Alter, Größe) stehen davor.",
            exercises: [
                { id: "adj01", title: "Angleichung: Maskulin / Feminin", xp: 10, questions: [
                    { q: "Le sac est ___ (vert).", a: "vert" }, { q: "La voiture ist ___ (vert).", a: "verte" },
                    { q: "Il ist ___ (créatif).", a: "créatif" }, { q: "Elle ist ___ (créatif).", a: "créative" }
                ]},
                { id: "adj02", title: "Angleichung: Plural", xp: 10, questions: [
                    { q: "Les livres sont ___ (intéressant).", a: "intéressants" },
                    { q: "Les histoires sont ___ (intéressant).", a: "intéressantes" }
                ]},
                { id: "adj03", title: "Position der Adjektive", xp: 15, questions: [
                     { q: "Stelle das Adjektiv an die richtige Stelle: une (belle) voiture ->", a: "une belle voiture" },
                     { q: "Stelle das Adjektiv an die richtige Stelle: une voiture (bleu) ->", a: "une voiture bleue" }
                ]}
            ]
        },
        verbes: {
            title: "Les Verbes (Verben)",
            theory: "Verben sind das Herzstück eines Satzes. Ihre Konjugation ändert sich je nach Person, Zahl und Zeit...",
            isVerbTopic: true
        },
        pronoms: {
            title: "Les Pronoms (Pronomen)",
            theory: "Pronomen ersetzen Substantive, um Wiederholungen zu vermeiden. Objektpronomen (direkt: le, la, les; indirekt: lui, leur) stehen meist vor dem konjugierten Verb. Die Adverbialpronomen 'y' (ersetzt Orte) und 'en' (ersetzt de + Nomen) sind sehr gebräuchlich.",
            exercises: [
                { id: "pro01", title: "Direkte Objektpronomen", xp: 15, questions: [
                    { q: "Tu regardes le film? - Oui, je ___ regarde.", a: "le" },
                    { q: "Elle achète la robe? - Oui, elle ___ achète.", a: "l'" }
                ]},
                { id: "pro02", title: "Indirekte Objektpronomen", xp: 15, questions: [
                    { q: "Tu parles à ton frère? - Oui, je ___ parle.", a: "lui" },
                    { q: "Il téléphone à ses parents? - Oui, il ___ téléphone.", a: "leur" }
                ]},
                { id: "pro03", title: "Pronomen 'y' und 'en'", xp: 20, questions: [
                    { q: "Tu vas en France? - Oui, j'___ vais.", a: "y" },
                    { q: "Vous voulez du pain? - Oui, nous ___ voulons.", a: "en" }
                ]}
            ]
        },
        phrase: {
            title: "La Phrase (Der Satzbau)",
            theory: "Der grundlegende Satzbau ist Subjekt-Verb-Objekt. Die Verneinung umschließt das Verb mit 'ne ... pas'. Fragen werden oft mit 'Est-ce que ...' am Satzanfang oder durch Inversion (Vertauschen von Verb und Subjekt) gebildet.",
            exercises: [
                { id: "phr01", title: "Die Verneinung", xp: 10, questions: [
                    { q: "Verneine den Satz: J'aime le sport.", a: "Je n'aime pas le sport." },
                    { q: "Verneine den Satz: Il ist à la maison.", a: "Il n'ist pas à la maison." }
                ]},
                { id: "phr02", title: "Die Fragebildung", xp: 15, questions: [
                    { q: "Bilde eine Frage mit 'Est-ce que': Tu as un chien.", a: "Est-ce que tu as un chien?" },
                    { q: "Bilde eine Frage durch Inversion: Vous parlez français.", a: "Parlez-vous français?" }
                ]}
            ]
        }
    };

    const originalGrammarDataExercises = {
        articles: grammarData.articles.exercises,
        noms: grammarData.noms.exercises,
        adjectifs: grammarData.adjectifs.exercises,
        pronoms: grammarData.pronoms.exercises,
        phrase: grammarData.phrase.exercises
    };

    const badgesData = {
        welcome: { title: "Willkommen!", desc: "Erste Übung gestartet.", icon: "fa-hands-clapping" },
        first_win: { title: "Erster Sieg", desc: "Erste Übung richtig gelöst.", icon: "fa-trophy" },
        adj_pro: { title: "Adjektiv-Profi", desc: "Alle Adjektiv-Übungen gemeistert.", icon: "fa-star" },
        streak3: { title: "Am Ball geblieben", desc: "3 Tage am Stück geübt.", icon: "fa-fire" },
        level5: { title: "Niveau 5", desc: "Erreiche Level 5.", icon: "fa-jet-fighter" }
    };

    let userProgress = {
        xp: 0,
        level: 1,
        lastVisit: null,
        streak: 0,
        completedExercises: [],
        unlockedBadges: []
    };

    window.pronounsListSimple = ["je/j'", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
    
    // ================== KORRIGIERTE STRUKTUR ==================
    window.tensesStructure = {
        "Indicatif": {
            "Présent": "indicatif_présent",
            "Futur Gruppe": ["indicatif_futur_proche", "indicatif_futur_simple"],
            "Passé Gruppe 1": ["indicatif_imparfait", "indicatif_passé_composé", "indicatif_plus_que_parfait", "indicatif_passé_simple"]
        },
        "Subjonctif": {
            "Présent": "subjonctif_présent"
        },
        "Conditionnel": {
            "Présent & Passé": ["conditionnel_présent", "conditionnel_passé"]
        }
    };
    // =======================================================
    
    window.frenchSpecialChars = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ô', 'û', 'ç', 'î', 'ï', 'œ', 'ù'];

    let availableVoices = [];
    const populateVoices = () => {
        if ('speechSynthesis' in window) {
            availableVoices = speechSynthesis.getVoices();
            console.log("script.js: Voices populated, count:", availableVoices.length);
        }
    };

    if ('speechSynthesis' in window) {
        populateVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoices;
        }
    }
    console.log("script.js: Global data initialized.");

    // ===================================================================
    // 2. STATE MANAGEMENT
    // ===================================================================
    const saveProgress = () => { localStorage.setItem('leBonMotProgress', JSON.stringify(userProgress)); };
    const loadProgress = () => {
        const savedData = localStorage.getItem('leBonMotProgress');
        if (savedData) {
            try {
                const loadedProgress = JSON.parse(savedData);
                userProgress = {
                    xp: 0, level: 1, lastVisit: null, streak: 0, completedExercises: [], unlockedBadges: [],
                    ...loadedProgress
                };
                if (!Array.isArray(userProgress.completedExercises)) userProgress.completedExercises = [];
                if (!Array.isArray(userProgress.unlockedBadges)) userProgress.unlockedBadges = [];
            } catch (error) { console.error("script.js: Fehler beim Parsen der gespeicherten Daten:", error); }
        }
    };
    const checkStreak = () => {
        if (userProgress.lastVisit === null || typeof userProgress.lastVisit === 'undefined') {
            userProgress.streak = 1;
        } else {
            const last = new Date(userProgress.lastVisit);
            const today = new Date();
            last.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const diffTime = today - last;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays === 1) userProgress.streak = (userProgress.streak || 0) + 1;
            else if (diffDays > 1) userProgress.streak = 1;
        }
        userProgress.lastVisit = new Date().toISOString();
        saveProgress();
    };

    const init = () => {
        console.log("script.js: init() called.");
        loadProgress();
        checkStreak();
        renderDashboard();
        setupEventListeners();
        if (typeof window.allVerbData === 'undefined') {
            console.error("ACHTUNG (script.js init): window.allVerbData aus verb-data.js wurde nicht geladen!");
        } else {
            console.log("script.js init: window.allVerbData ist verfügbar.");
        }
        if (typeof VerbTrainer === 'undefined' || typeof VerbTrainer.init !== 'function') {
            console.error("ACHTUNG (script.js init): VerbTrainer aus verb_trainer.js wurde nicht korrekt geladen oder VerbTrainer.init ist keine Funktion!");
        } else {
            console.log("script.js init: VerbTrainer.init ist verfügbar.");
        }
        console.log("script.js: init() completed.");
    };

    // ===================================================================
    // 3. GLOBALE HILFSFUNKTIONEN
    // ===================================================================
    window.showView = (viewId) => {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const viewToShow = document.getElementById(viewId);
        if (viewToShow) {
            viewToShow.classList.add('active');
        } else {
            console.error("script.js showView: Ansicht mit ID '" + viewId + "' nicht gefunden!");
        }
    };

    window.speakText = (text, lang = 'fr-FR') => {
        if (!('speechSynthesis' in window)) {
            console.error("script.js speakText: TTS nicht unterstützt.");
            alert("Die Sprachausgabe wird von Ihrem Browser leider nicht unterstützt.");
            return;
        }
        if (availableVoices.length === 0) {
            populateVoices();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        const selectedVoice = availableVoices.find(voice => voice.lang === lang || voice.lang.startsWith(lang.split('-')[0]));
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.warn(`script.js speakText: Keine spezifische Stimme für ${lang} gefunden.`);
        }
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    };

    window.addXp = (amount) => {
        if (!amount || amount <= 0) return;
        userProgress.xp += amount;
        while (userProgress.xp >= (100 * userProgress.level)) {
            userProgress.xp -= (100 * userProgress.level);
            userProgress.level++;
        }
        saveProgress();
    };

    window.getTenseDisplayName = (tenseKeyWithMood) => {
        // Remove mood prefix for display lookup
        const tenseKey = tenseKeyWithMood.substring(tenseKeyWithMood.indexOf('_') + 1);
        const names = {
            "présent": "Présent",
            "futur_proche": "Futur Composé (Proche)",
            "futur_simple": "Futur Simple",
            "imparfait": "Imparfait",
            "passé_composé": "Passé Composé",
            "plus_que_parfait": "Plus-que-parfait",
            "passé_simple": "Passé Simple",
            "présent": "Présent (Subjonctif)", // Key needs to be unique for Subjonctif
            "présent": "Présent (Conditionnel)", // Key needs to be unique for Conditionnel
            "passé": "Passé (Conditionnel)"
        };

        // More robust display name logic
        if (tenseKeyWithMood === "subjonctif_présent") return "Présent (Subjonctif)";
        if (tenseKeyWithMood === "conditionnel_présent") return "Présent (Conditionnel)";
        if (tenseKeyWithMood === "conditionnel_passé") return "Passé (Conditionnel)";

        return names[tenseKey] || tenseKey.replace(/_/g, ' ');
    };


    // ===================================================================
    // 4. RENDERING FÜR NICHT-VERB-BEREICHE
    // ===================================================================
    window.renderDashboard = () => { // Made global to be callable from verb_trainer
        console.log("script.js: renderDashboard() called.");
        document.getElementById('level-display').textContent = userProgress.level || 1;
        document.getElementById('streak-display').textContent = `🔥 ${userProgress.streak || 0}`;
        const currentLevel = userProgress.level || 1;
        const currentXp = userProgress.xp || 0;
        const xpForNextLevel = 100 * currentLevel;
        document.getElementById('xp-display').textContent = `${currentXp} / ${xpForNextLevel} XP`;
        const xpPercentage = xpForNextLevel > 0 ? (currentXp / xpForNextLevel) * 100 : 0;
        document.getElementById('xp-bar-fill').style.width = `${xpPercentage}%`;

        const topicList = document.getElementById('topic-list');
        if (!topicList) {
            console.error("script.js renderDashboard: #topic-list nicht gefunden!");
            return;
        }
        topicList.innerHTML = '';

        for (const key in grammarData) {
            const topic = grammarData[key];
            if (!topic || !topic.title) { continue; }
            let completedCount = 0;
            let totalCount = 0;
            if (topic.isVerbTopic) {
                completedCount = 0;
                totalCount = (typeof window.allVerbData !== 'undefined' && window.allVerbData) ? Object.keys(window.allVerbData).length : 0;
            } else if (originalGrammarDataExercises[key] && Array.isArray(originalGrammarDataExercises[key])) {
                completedCount = (userProgress.completedExercises && Array.isArray(userProgress.completedExercises)) ?
                    originalGrammarDataExercises[key].filter(ex => userProgress.completedExercises.includes(ex.id)).length : 0;
                totalCount = originalGrammarDataExercises[key].length;
            }
            const topicCard = document.createElement('div');
            topicCard.className = 'topic-card';
            topicCard.dataset.topic = key;
            topicCard.innerHTML = `
                ${topic.title.replace(' (', '<br>(')}
                <span class="topic-progress">${completedCount} / ${totalCount}</span>
            `;
            topicList.appendChild(topicCard);
        }
    };

    const renderTopicView = (topicKey) => {
        console.log(`script.js: renderTopicView(${topicKey}) called.`);
        const topic = grammarData[topicKey];
        if (!topic || topic.isVerbTopic) {
            console.warn(`script.js renderTopicView: Thema ${topicKey} nicht gefunden oder ist ein Verb-Thema.`);
            return;
        }
        document.getElementById('topic-title').textContent = topic.title;
        document.getElementById('topic-theory').innerHTML = topic.theory;
        const exerciseList = document.getElementById('exercise-list');
        exerciseList.innerHTML = '';
        exerciseList.dataset.topicKey = topicKey;

        if (topic.exercises && topic.exercises.length > 0) {
            topic.exercises.forEach(ex => {
                const li = document.createElement('li');
                li.textContent = `${ex.title} (+${ex.xp} XP)`;
                li.dataset.exerciseId = ex.id;
                if (userProgress.completedExercises.includes(ex.id)) {
                    li.classList.add('completed');
                }
                exerciseList.appendChild(li);
            });
        } else {
            exerciseList.innerHTML = '<li>Für dieses Thema sind aktuell keine Übungen verfügbar.</li>';
        }

        document.querySelector('#topic-view .tab-link[data-tab="theory"]').classList.add('active');
        document.querySelector('#topic-view .tab-link[data-tab="exercises"]').classList.remove('active');
        document.querySelector('#topic-view #theory').classList.add('active');
        document.querySelector('#topic-view #exercises').classList.remove('active');
        window.showView('topic-view');
    };

    const renderBadges = () => { /* ... (kommt später) ... */ };

    // ===================================================================
    // 5. EVENT LISTENERS
    // ===================================================================
    const setupEventListeners = () => {
        console.log("script.js: setupEventListeners() called.");
        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            console.error("script.js setupEventListeners: #main-content nicht gefunden!");
            return;
        }

        mainContent.addEventListener('click', e => {
            const target = e.target;

            const topicCard = target.closest('.topic-card[data-topic]');
            if (topicCard) {
                const topicKey = topicCard.dataset.topic;
                console.log(`script.js: Topic card clicked - ${topicKey}`);
                if (grammarData[topicKey] && grammarData[topicKey].isVerbTopic) {
                    console.log("script.js: 'Verben' topic identified. Checking VerbTrainer...");
                    if (typeof VerbTrainer !== 'undefined' && typeof VerbTrainer.init === 'function') {
                        console.log("script.js: VerbTrainer.init is valid. Calling VerbTrainer.init().");
                        VerbTrainer.init();
                    } else {
                        console.error("script.js: VerbTrainer.init is NOT valid or VerbTrainer is undefined.", VerbTrainer);
                        alert("Fehler beim Initialisieren des Verb-Trainers. Bitte Konsole prüfen.");
                    }
                } else {
                    renderTopicView(topicKey);
                }
                return;
            }

            const backBtn = target.closest('.btn-back[data-target]');
            if (backBtn) {
                const targetView = backBtn.dataset.target;
                if (targetView === 'dashboard-view') {
                    renderDashboard();
                }
                window.showView(targetView);
                return;
            }

            const tabLink = target.closest('#topic-view .tab-link');
            if (tabLink && !tabLink.classList.contains('active')) {
                const tabContainer = tabLink.closest('.tabs');
                const contentContainer = tabLink.closest('#topic-content-area');
                if (tabContainer && contentContainer) {
                    tabContainer.querySelector('.active').classList.remove('active');
                    contentContainer.querySelector('.tab-content.active').classList.remove('active');
                    tabLink.classList.add('active');
                    document.getElementById(tabLink.dataset.tab).classList.add('active');
                }
                return;
            }

            const exerciseLi = target.closest('#exercise-list li[data-exercise-id]');
            if (exerciseLi) {
                alert(`Funktionalität zum Starten von Grammatik-Übungen ist noch nicht implementiert.`);
                return;
            }
        });
        console.log("script.js: Main click listener on #main-content set up.");
    };

    init();
});

window.addEventListener('load', () => {
    console.log("script.js: window.load event fired.");
    const splash = document.getElementById('splashScreen');
    const mainContent = document.getElementById('main-content');
    if (splash && mainContent) {
        setTimeout(() => {
            splash.classList.add('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 500);
        }, 1500); // leicht verkürzt
    }
});
console.log("script.js: Script loaded and executed.");