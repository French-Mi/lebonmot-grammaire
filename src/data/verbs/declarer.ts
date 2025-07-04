import type { Verb } from '@/types/verb-types';

export const declarer: Verb = {
  infinitive: "déclarer",
  translation: "erklären, angeben, deklarieren",
  verbGroup: 1,
  indicatif: {
    présent: ["déclare", "déclares", "déclare", "déclarons", "déclarez", "déclarent"],
    passé_composé: { aux: "avoir", participle: "déclaré" },
    imparfait: ["déclarais", "déclarais", "déclarait", "déclarions", "déclariez", "déclaraient"],
    plus_que_parfait: { aux: "avoir", participle: "déclaré" },
    futur_simple: ["déclarerai", "déclareras", "déclarera", "déclarerons", "déclarerez", "déclareront"],
    futur_proche: { aux: "aller", participle: "déclarer" }
  },
  subjonctif: {
    présent: ["déclare", "déclares", "déclare", "déclarions", "déclariez", "déclarent"]
  },
  conditionnel: {
    présent: ["déclarerais", "déclarerais", "déclarerait", "déclarerions", "déclareriez", "déclareraient"],
    passé: { aux: "avoir", participle: "déclaré" }
  },
  imperatif: {
    present: ["déclare", "déclarons", "déclarez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich erkläre die Sitzung für eröffnet.", fr: "Je déclare la séance ouverte." },
      { de: "Er deklariert seine Einkünfte beim Finanzamt.", fr: "Il déclare ses revenus aux impôts." },
      { de: "Sie erklären, dass sie unschuldig sind.", fr: "Ils déclarent qu'ils sont innocents." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat seine Liebe zu ihr erklärt.", fr: "Il lui a déclaré son amour." },
      { de: "Haben Sie etwas zu verzollen?", fr: "Avez-vous quelque chose à déclarer ?" },
      { de: "Die Regierung hat den Notstand ausgerufen.", fr: "Le gouvernement a déclaré l'état d'urgence." }
    ],
    "indicatif_imparfait": [
        { de: "Der Zeuge erklärte, was er gesehen hatte.", fr: "Le témoin déclarait ce qu'il avait vu." },
        { de: "Jedes Jahr deklarierten wir unsere Waren beim Zoll.", fr: "Chaque année, nous déclarions nos marchandises à la douane." },
        { de: "Sie erklärten immer ihre Unterstützung für das Projekt.", fr: "Ils déclaraient toujours leur soutien au projet." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte erklärt, dass er zurücktreten werde.", fr: "Il avait déclaré qu'il démissionnerait." },
        { de: "Ich hatte alle meine Einkäufe deklariert.", fr: "J'avais déclaré tous mes achats." },
        { de: "Sie hatten dem Land den Krieg erklärt.", fr: "Ils avaient déclaré la guerre au pays." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde meine Kandidatur morgen bekannt geben (erklären).", fr: "Je déclarerai ma candidature demain." },
      { de: "Der Richter wird sein Urteil verkünden (erklären).", fr: "Le juge déclarera son verdict." },
      { de: "Wir werden unsere Absichten klar darlegen (erklären).", fr: "Nous déclarerons nos intentions clairement." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dem Zoll nichts angeben.", fr: "Je ne vais rien déclarer à la douane." },
      { de: "Sie wird ihre Gefühle erklären.", fr: "Elle va déclarer ses sentiments." },
      { de: "Sie werden bald den Sieger bekannt geben.", fr: "Ils vont bientôt déclarer le vainqueur." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde meine Unterstützung erklären, wenn ich mehr Informationen hätte.", fr: "Je déclarerais mon soutien si j'avais plus d'informations." },
        { de: "Was würden Sie in einer solchen Situation erklären?", fr: "Que déclareriez-vous dans une telle situation ?" },
        { de: "Er würde Konkurs anmelden, wenn er keine andere Wahl hätte.", fr: "Il déclarerait faillite s'il n'avait pas d'autre choix." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dasselbe erklärt.", fr: "J'aurais déclaré la même chose." },
        { de: "Sie hätten den Diebstahl sofort melden (erklären) sollen.", fr: "Vous auriez dû déclarer le vol immédiatement." },
        { de: "Er hätte seine Niederlage zugegeben (erklärt), wenn die Ergebnisse klar gewesen wären.", fr: "Il aurait déclaré sa défaite si les résultats avaient été clairs." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dein Einkommen genau angibst.", fr: "Il est important que tu déclares tes revenus avec précision." },
      { de: "Ich möchte, dass er öffentlich seine Position erklärt.", fr: "Je veux qu'il déclare sa position publiquement." },
      { de: "Bevor sie den Krieg erklären, müssen sie nachdenken.", fr: "Avant qu'ils déclarent la guerre, ils doivent réfléchir." }
    ]
  }
};
