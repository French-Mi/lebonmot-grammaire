const synth = window.speechSynthesis;
let frenchVoices: SpeechSynthesisVoice[] = [];

// Funktion zum Laden der Stimmen.
export function loadVoices() {
    if (!synth) {
        console.warn("Sprachsynthese wird auf diesem Browser nicht unterstützt.");
        return;
    }
    // Funktion, um die Stimmen zu filtern und zuzuweisen
    const setVoices = () => {
        frenchVoices = synth.getVoices().filter(v => v.lang.startsWith('fr'));
    };

    // Stimmen laden. Es kann einen Moment dauern, bis sie verfügbar sind.
    const voices = synth.getVoices();
    if (voices.length > 0) {
        setVoices();
    } else if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = setVoices;
    }
}

// Funktion zum Sprechen von Text.
export function speakFrench(textToSpeak: string, event?: MouseEvent) {
    if (event) event.stopPropagation(); // Verhindert, dass Klicks auf andere Elemente durchschlagen
    if (!synth || !textToSpeak) return;

    // Bricht die aktuelle Wiedergabe ab, falls eine läuft
    if (synth.speaking) {
        synth.cancel();
    }

    // Bereinigt den Text von Klammern etc.
    const cleanedText = String(textToSpeak).replace(/\(.*\)/gi, '').replace(/\b(qc|qn)\b\.?/gi, '').trim();
    if (!cleanedText) return;

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    // Wählt eine bevorzugte französische Stimme, falls verfügbar
    if (frenchVoices.length > 0) {
        const voice = frenchVoices.find(v => v.name.toLowerCase().includes('amelie')) ||
                      frenchVoices.find(v => v.name.toLowerCase().includes('thomas')) ||
                      frenchVoices[0];
        if (voice) utterance.voice = voice;
    }

    utterance.onerror = (e) => console.error("Fehler bei der Sprachsynthese:", e);

    synth.speak(utterance);
}
