// src/types/verb-types.ts
import type { Verb } from '@/types/verb-types';

export const tensesStructure = {
    "Indicatif": {
        "Présent": ["indicatif_présent"],
        "Passé": ["indicatif_passé_composé", "indicatif_imparfait", "indicatif_plus_que_parfait"],
        "Futur": ["indicatif_futur_proche", "indicatif_futur_simple"]
    },
    "Conditionnel": {
        "Présent": ["conditionnel_présent"],
        "Passé": ["conditionnel_passé"]
    },
    "Subjonctif": {
        "Présent": ["subjonctif_présent"]
    },
    "Impératif": {
        "Présent": ["imperatif_present"]
    }
};

export interface ExampleSentence {
  de: string;
  fr: string | string[];
}

export interface VerbTenses {
  [key: string]: string[] | { aux: 'avoir' | 'être' | 'aller'; participle: string };
}

export interface Verb {
  infinitive: string;
  translation: string;
  verbGroup: number;
  isReflexive?: boolean;
  indicatif: VerbTenses;
  subjonctif: VerbTenses;
  conditionnel: VerbTenses;
  imperatif: VerbTenses;
  participe?: {
    present: string;
    passe: string;
  };
  examples?: {
    [tenseKey: string]: ExampleSentence[];
  };
}
