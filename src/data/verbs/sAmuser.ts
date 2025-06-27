import type { Verb } from '@/types/verb-types';

export const sAmuser: Verb = {
  infinitive: "s'amuser",
  translation: "sich amüsieren / Spaß haben",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["amuse", "amuses", "amuse", "amusons", "amusez", "amusent"],
    passé_composé: { aux: "être", participle: "amusé" },
    imparfait: ["amusais", "amusais", "amusait", "amusions", "amusiez", "amusaient"],
    plus_que_parfait: { aux: "être", participle: "amusé" },
    futur_simple: ["amuserai", "amuseras", "amusera", "amuserons", "amuserez", "amuseront"],
    futur_proche: { aux: "aller", participle: "s'amuser" }
  },
  subjonctif: { présent: ["amuse", "amuses", "amuse", "amusions", "amusiez", "amusent"] },
  conditionnel: {
    présent: ["amuserais", "amuserais", "amuserait", "amuserions", "amuseriez", "amuseraient"],
    passé: { aux: "être", participle: "amusé" }
  },
  imperatif: { present: ["amuse-toi", "amusons-nous", "amusez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich amüsiere mich gut.", fr: "Je m'amuse bien." },
      { de: "Die Kinder haben Spaß im Park.", fr: "Les enfants s'amusent dans le parc." },
      { de: "Wir amüsieren uns auf der Party.", fr: "Nous nous amusons à la fête." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich gestern Abend gut amüsiert.", fr: "Je me suis bien amusé(e) hier soir." },
      { de: "Hat sie sich auf der Reise amüsiert?", fr: "S'est-elle amusée pendant le voyage ?" },
      { de: "Wir haben uns im Kino amüsiert.", fr: "Nous nous sommes amusés au cinéma." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind hatte ich immer Spaß im Schnee.", fr: "Enfant, je m'amusais toujours dans la neige." },
        { de: "Er amüsierte sich damit, die Leute zu beobachten.", fr: "Il s'amusait à regarder les gens." },
        { de: "Wir amüsierten uns mit sehr wenig.", fr: "Nous nous amusions avec très peu de choses." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich am Vortag gut amüsiert.", fr: "Je m'étais bien amusé(e) la veille." },
        { de: "Sie hatte sich in ihrem Urlaub amüsiert.", fr: "Elle s'était amusée pendant ses vacances." },
        { de: "Wir hatten uns auf der Feier sehr amüsiert.", fr: "Nous nous étions beaucoup amusés à la fête." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich auf deiner Party amüsieren.", fr: "Je m'amuserai à ta fête." },
      { de: "Du wirst eine Menge Spaß haben.", fr: "Tu t'amuseras beaucoup." },
      { de: "Sie werden sich am Strand amüsieren.", fr: "Ils s'amuseront sur la plage." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich gleich amüsieren.", fr: "Je vais m'amuser tout de suite." },
      { de: "Sie wird Spaß haben.", fr: "Elle va s'amuser." },
      { de: "Wir werden uns sicher amüsieren.", fr: "Nous allons nous amuser, c'est sûr." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich mehr amüsieren, wenn du hier wärst.", fr: "Je m'amuserais plus si tu étais là." },
        { de: "Er würde sich auf der Party amüsieren.", fr: "Il s'amuserait à la fête." },
        { de: "Wir würden uns besser amüsieren, wenn die Musik besser wäre.", fr: "Nous nous amuserions plus si la musique était meilleure." }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich mehr amüsiert, wenn ich getanzt hätte.", fr: "Je me serais plus amusé(e) si j'avais dansé." },
      { de: "Sie hätte sich amüsiert, aber sie war müde.", fr: "Elle se serait amusée, mais elle était fatiguée." },
      { de: "Wir hätten uns amüsiert.", fr: "Nous nous serions amusés." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du Spaß hast.", fr: "Il est important que tu t'amuses." },
      { de: "Ich möchte, dass sie sich amüsieren.", fr: "Je veux qu'ils s'amusent." },
      { de: "Damit wir uns amüsieren können, brauchen wir Spiele.", fr: "Pour que nous nous amusions, il nous faut des jeux." }
    ]
  }
};
