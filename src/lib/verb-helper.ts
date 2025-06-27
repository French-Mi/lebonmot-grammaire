import { allVerbData } from '@/data/verbs';
import type { Verb } from '@/types/verb-types';
import type { VerbTenses } from '@/types/verb-types';

// Detaillierte Pronomen für être-Verben im Quiz
const detailedPronouns = [
  { display: "je (m)", gender: "m", number: "s", base: "je/j'", reflexive: "me" },
  { display: "je (f)", gender: "f", number: "s", base: "je/j'", reflexive: "me" },
  { display: "tu (m)", gender: "m", number: "s", base: "tu", reflexive: "te" },
  { display: "tu (f)", gender: "f", number: "s", base: "tu", reflexive: "te" },
  { display: "il", gender: "m", number: "s", base: "il/elle/on", reflexive: "se" },
  { display: "elle", gender: "f", number: "s", base: "il/elle/on", reflexive: "se" },
  { display: "on", gender: "m", number: "s", base: "il/elle/on", reflexive: "se" }, // 'on' wird als maskulin singular behandelt
  { display: "nous (m/pl)", gender: "m", number: "pl", base: "nous", reflexive: "nous" },
  { display: "nous (f/pl)", gender: "f", number: "pl", base: "nous", reflexive: "nous" },
  { display: "vous (m/pl)", gender: "m", number: "pl", base: "vous", reflexive: "vous" },
  { display: "vous (f/pl)", gender: "f", number: "pl", base: "vous", reflexive: "vous" },
  { display: "ils", gender: "m", number: "pl", base: "ils/elles", reflexive: "se" },
  { display: "elles", gender: "f", number: "pl", base: "ils/elles", reflexive: "se" }
];

// Einfache Pronomen für Tabellen und die meisten Quiz-Zeiten
const simplePronouns = ["je/j'", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
const simpleImperatifPronouns = ["(tu)", "(nous)", "(vous)"];
const vowels = ['a', 'e', 'i', 'o', 'u', 'h', 'é', 'à', 'ê', 'y'];

// Hilfsfunktion zum Abrufen der Rohdaten einer Zeitform
function getTenseData(verb: Verb, tenseKey: string) {
    const parts = tenseKey.split(/_(.*)/s);
    if (parts.length < 2) return null;
    const moodKey = parts[0] as keyof Verb;
    const tenseName = parts[1];

    const moodObject = (verb as any)[moodKey] as VerbTenses;
    if (!moodObject || !(tenseName in moodObject)) return null;

    return moodObject[tenseName];
}

// Hilfsfunktion zum Anwenden des korrekten Reflexivpronomens
function applyReflexive(pronounInfo: { reflexive: string }, conjugation: string): string {
    if (!conjugation) return '';
    let reflexive = pronounInfo.reflexive;
    const firstLetter = conjugation.trim().toLowerCase().charAt(0);

    if (vowels.includes(firstLetter) && (reflexive === 'me' || reflexive === 'te' || reflexive === 'se')) {
        return `${reflexive.slice(0, 1)}'${conjugation}`;
    }
    return `${reflexive} ${conjugation}`;
}


// Kernfunktion zur Generierung ALLER Konjugationen für eine Zeit
export function getConjugations(verb: Verb, tenseKey: string): string[] | null {
    if (tenseKey.includes('futur_proche')) {
        const allerPresent = getConjugations(allVerbData.aller, 'indicatif_présent');
        if (!allerPresent) return null;

        const baseInfinitive = verb.isReflexive
            ? verb.infinitive.startsWith("s'") ? verb.infinitive.substring(2) : verb.infinitive.replace(/^se\s+/, '')
            : verb.infinitive;

        // Futur Proche wird immer mit einfachen Pronomen gebildet
        return simplePronouns.map((pronoun, index) => {
            const allerForm = allerPresent[index];
            if (verb.isReflexive) {
                const pInfo = { reflexive: ["me", "te", "se", "nous", "vous", "se"][index] };
                return `${allerForm} ${applyReflexive(pInfo as any, baseInfinitive)}`;
            }
            return `${allerForm} ${baseInfinitive}`;
        });
    }

    const tenseData = getTenseData(verb, tenseKey);
    if (!tenseData) return null;

    // --- A. Einfache Zeiten ---
    if (Array.isArray(tenseData)) {
        if (tenseKey.includes('imperatif')) {
            return tenseData;
        }
        if (verb.isReflexive) {
            // Erzeugt 6 Formen für reflexive Verben in einfachen Zeiten
            return simplePronouns.map((_, index) => {
                const pInfo = { reflexive: ["me", "te", "se", "nous", "vous", "se"][index] };
                const baseConj = tenseData[index];
                if (!baseConj) return '';
                return applyReflexive(pInfo as any, baseConj);
            });
        }
        return tenseData; // 6 Formen für nicht-reflexive Verben
    }

    // --- B. Zusammengesetzte Zeiten ---
    if (typeof tenseData === 'object' && 'participle' in tenseData) {
        const auxVerbKey = verb.isReflexive ? 'être' : (tenseData as {aux: 'avoir' | 'être'}).aux;
        const auxVerb = allVerbData[auxVerbKey as keyof typeof allVerbData];
        if (!auxVerb) return null;

        let auxTenseKey: string | null = null;
        if (tenseKey.includes('passé_composé')) auxTenseKey = 'indicatif_présent';
        else if (tenseKey.includes('plus_que_parfait')) auxTenseKey = 'indicatif_imparfait';
        else if (tenseKey.includes('conditionnel_passé')) auxTenseKey = 'conditionnel_présent';

        if (!auxTenseKey) return null;

        const auxConjugations = getConjugations(auxVerb, auxTenseKey);
        if (!auxConjugations) return null;

        // Fall B1: Zusammengesetzte Zeit mit 'être'
        if (auxVerbKey === 'être') {
            // Erzeugt 12+ Formen für die detaillierte Abfrage (m/f, s/pl)
            return detailedPronouns.map(pronounInfo => {
                const auxIndex = simplePronouns.indexOf(pronounInfo.base);
                const aux = auxConjugations[auxIndex];
                let participle = (tenseData as {participle: string}).participle;

                if (pronounInfo.gender === 'f') participle += 'e';
                if (pronounInfo.number === 'pl') participle += 's';

                const fullConjugation = `${aux} ${participle}`;
                if (verb.isReflexive) {
                    return applyReflexive(pronounInfo, fullConjugation);
                }
                return fullConjugation;
            });
        }
        // Fall B2: Zusammengesetzte Zeit mit 'avoir'
        else {
            // Erzeugt 6 Formen
            return simplePronouns.map((_, index) => {
                const aux = auxConjugations[index];
                const participle = (tenseData as {participle: string}).participle;
                return `${aux} ${participle}`;
            });
        }
    }
    return null;
}

// Liefert die korrekten Pronomen für das QUIZ
export function getPronounsForTense(verb: Verb, tenseKey: string): string[] {
    if (tenseKey.includes('imperatif')) {
        return simpleImperatifPronouns;
    }

    const tenseData = getTenseData(verb, tenseKey);
    const isCompound = tenseData && typeof tenseData === 'object' && 'participle' in tenseData;

    // Detaillierte Pronomen (m/w) nur für zusammengesetzte Zeiten mit "être"
    if (isCompound) {
        const usesEtre = verb.isReflexive || (tenseData as { aux: 'avoir' | 'être' }).aux === 'être';
        if (usesEtre) {
            return detailedPronouns.map(p => p.display);
        }
    }

    // Ansonsten immer die einfachen Pronomen
    return simplePronouns;
}

// Liefert die korrekten Antworten für das QUIZ (gleiche Länge wie getPronounsForTense)
export function getConjugationsForQuiz(verb: Verb, tenseKey: string): string[] {
    const conjugations = getConjugations(verb, tenseKey);
    return conjugations || [];
}

// Liefert die Pronomen für die TABELLENANZEIGE (immer 6)
export function getTablePronouns(tenseKey: string): string[] {
    if (tenseKey.includes('imperatif')) { return simpleImperatifPronouns; }
    return simplePronouns;
}

// Liefert die Konjugationen für die TABELLENANZEIGE (immer 6)
export function getFormattedTableConjugations(verb: Verb, tenseKey: string): string[] {
    const allConjugations = getConjugations(verb, tenseKey);
    if (!allConjugations) return [];

    const pronouns = getPronounsForTense(verb, tenseKey);
    // Wenn das Quiz 12+ Pronomen hat, müssen die Konjugationen für die Tabelle auf 6 reduziert werden
    if (pronouns.length > 6) {
        return [
            allConjugations[0] + '(e)', // je (m/f)
            allConjugations[2] + '(e)', // tu (m/f)
            allConjugations[4],         // il
            allConjugations[7] + '(s)', // nous (m/pl) -> nous (m/f) + s
            allConjugations[9] + '(s)', // vous (m/pl) -> vous (m/f) + s
            allConjugations[11] + '(s)' // ils -> ils/elles + s
        ];
    }

    // Wenn es bereits 6 Konjugationen gibt, diese direkt verwenden
    return allConjugations;
}


// --- Weitere Hilfsfunktionen (unverändert) ---
export const getTenseDisplayName = (tenseKey: string): string => {
    const names: { [key: string]: string } = {
        "indicatif_présent": "Présent",
        "indicatif_passé_composé": "Passé Composé",
        "indicatif_imparfait": "Imparfait",
        "indicatif_plus_que_parfait": "Plus-que-parfait",
        "indicatif_futur_proche": "Futur Proche",
        "indicatif_futur_simple": "Futur Simple",
        "conditionnel_présent": "Conditionnel Présent",
        "conditionnel_passé": "Conditionnel Passé",
        "subjonctif_présent": "Subjonctif Présent",
        "imperatif_present": "Impératif Présent"
    };
    return names[tenseKey] || tenseKey.replace(/_/g, ' ');
};

export const formatPronounForDisplay = (pronoun: string, nextWord: string): string => {
  if (pronoun.startsWith('je (')) {
    if (!nextWord) return 'je';
    const firstLetter = nextWord.trim().toLowerCase().charAt(0);
    return vowels.includes(firstLetter) ? "j'" : "je";
  }
  if (pronoun === "je/j'") {
    if (!nextWord) return 'je';
    const firstLetter = nextWord.trim().toLowerCase().charAt(0);
    return vowels.includes(firstLetter) ? "j'" : "je";
  }
  return pronoun;
};
