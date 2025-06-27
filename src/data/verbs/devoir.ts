import type { Verb } from '@/types/verb-types';

export const devoir: Verb = {
  infinitive: "devoir",
  translation: "müssen / sollen / schulden",
  verbGroup: 3,
  indicatif: {
    présent: ["dois", "dois", "doit", "devons", "devez", "doivent"],
    passé_composé: { aux: "avoir", participle: "dû" },
    imparfait: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
    plus_que_parfait: { aux: "avoir", participle: "dû" },
    futur_simple: ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
    futur_proche: { aux: "aller", participle: "devoir" }
  },
  subjonctif: { présent: ["doive", "doives", "doive", "devions", "deviez", "doivent"] },
  conditionnel: { présent: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"], passé: { aux: "avoir", participle: "dû" } },
  imperatif: { present: [] },
  examples: {
    "indicatif_présent": [
      { de: "Ich muss gehen.", fr: "Je dois partir." },
      { de: "Du musst deine Hausaufgaben machen.", fr: "Tu dois faire tes devoirs." },
      { de: "Wir müssen vorsichtig sein.", fr: "Nous devons être prudents." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich musste früher gehen.", fr: "J'ai dû partir plus tôt." },
      { de: "Sie musste arbeiten.", fr: "Elle a dû travailler." },
      { de: "Wir mussten warten.", fr: "Nous avons dû attendre." }
    ],
    "indicatif_imparfait": [
        { de: "Ich musste jeden Tag früh aufstehen.", fr: "Je devais me lever tôt tous les jours." },
        { de: "Er schuldete mir Geld.", fr: "Il me devait de l'argent." },
        { de: "Wir sollten eigentlich ankommen.", fr: "Nous devions arriver." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte arbeiten müssen.", fr: "J'avais dû travailler." },
        { de: "Sie hatte ihm die Wahrheit sagen müssen.", fr: "Elle avait dû lui dire la vérité." },
        { de: "Wir hatten die Reise absagen müssen.", fr: "Nous avions dû annuler le voyage." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es tun müssen.", fr: "Je devrai le faire." },
      { de: "Du wirst geduldig sein müssen.", fr: "Tu devras être patient." },
      { de: "Wir werden eine Entscheidung treffen müssen.", fr: "Nous devrons prendre une décision." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gehen müssen.", fr: "Je vais devoir partir." },
      { de: "Sie wird wählen müssen.", fr: "Elle va devoir choisir." },
      { de: "Wir werden es ihm sagen müssen.", fr: "Nous allons devoir le lui dire." }
    ],
    "conditionnel_présent": [
        { de: "Ich sollte mehr Sport treiben.", fr: "Je devrais faire plus de sport." },
        { de: "Du solltest dich entschuldigen.", fr: "Tu devrais t'excuser." },
        { de: "Wir sollten jetzt gehen.", fr: "Nous devrions partir maintenant." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass ich es tue.", fr: "Il faut que je le doive." },
      { de: "Ich bezweifle, dass er kommen muss.", fr: "Je doute qu'il doive venir." },
      { de: "Damit wir es tun können, müssen wir es wollen.", fr: "Pour que nous puissions le faire, il faut que nous le devions." }
    ]
  }
};
