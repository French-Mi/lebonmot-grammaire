import type { Verb } from '@/types/verb-types';

export const seSeparer: Verb = {
  infinitive: "se séparer",
  translation: "sich trennen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["sépare", "sépares", "sépare", "séparons", "séparez", "séparent"],
    passé_composé: { aux: 'être', participle: 'séparé' },
    imparfait: ["séparais", "séparais", "séparait", "séparions", "sépariez", "séparaient"],
    plus_que_parfait: { aux: 'être', participle: 'séparé' },
    futur_simple: ["séparerai", "sépareras", "séparera", "séparerons", "séparerez", "sépareront"],
    futur_proche: { aux: "aller", participle: "se séparer" }
  },
  subjonctif: {
    présent: ["sépare", "sépares", "sépare", "séparions", "sépariez", "séparent"]
  },
  conditionnel: {
    présent: ["séparerais", "séparerais", "séparerait", "séparerions", "sépareriez", "sépareraient"],
    passé: { aux: 'être', participle: 'séparé' }
  },
  imperatif: {
    present: ["sépare-toi", "séparons-nous", "séparez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich trenne mich von meinen alten Kleidern.", fr: "Je me sépare de mes vieux vêtements." },
      { de: "Sie trennen sich nach zehn Jahren Ehe.", fr: "Ils se séparent après dix ans de mariage." },
      { de: "Hier trennen sich unsere Wege.", fr: "Nos chemins se séparent ici." }
    ],
    "indicatif_passé_composé": [
      { de: "Sie haben sich letzten Monat getrennt.", fr: "Ils se sont séparés le mois dernier." },
      { de: "Sie hat sich von ihrem Freund getrennt.", fr: "Elle s'est séparée de son petit ami." },
      { de: "Wir haben uns im Guten getrennt.", fr: "Nous nous sommes séparés en bons termes." }
    ],
    "indicatif_imparfait": [
        { de: "Sie trennten sich immer am Bahnhof.", fr: "Ils se séparaient toujours à la gare." },
        { de: "Wir trennten uns nie für lange Zeit.", fr: "Nous ne nous séparions jamais pour longtemps." },
        { de: "Der Fluss teilte (trennte) sich an dieser Stelle in zwei Arme.", fr: "La rivière se séparait en deux bras à cet endroit." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatten sich getrennt, lange bevor die Scheidung offiziell war.", fr: "Ils s'étaient séparés bien avant que le divorce ne soit officiel." },
        { de: "Sie hatte sich von allen ihren Illusionen getrennt.", fr: "Elle s'était séparée de toutes ses illusions." },
        { de: "Nachdem wir uns getrennt hatten, haben wir uns nie wiedergesehen.", fr: "Après que nous nous étions séparés, nous ne nous sommes jamais revus." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich nie von dir trennen.", fr: "Je ne me séparerai jamais de toi." },
      { de: "Sie werden sich trennen, wenn sie so weitermachen.", fr: "Ils se sépareront s'ils continuent comme ça." },
      { de: "Wir werden uns am Ende der Reise trennen.", fr: "Nous nous séparerons à la fin du voyage." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich glaube, sie werden sich trennen.", fr: "Je crois qu'ils vont se séparer." },
      { de: "Er wird sich von seinem Auto trennen müssen.", fr: "Il va devoir se séparer de sa voiture." },
      { de: "Wir werden uns für ein paar Stunden trennen.", fr: "Nous allons nous séparer pour quelques heures." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich nicht von diesem Haus trennen können.", fr: "Je ne pourrais pas me séparer de cette maison." },
        { de: "Würdest du dich von ihm trennen, wenn er dich betrügen würde?", fr: "Te séparerais-tu de lui s'il te trompait ?" },
        { de: "Sie würden sich nicht trennen, wenn sie Kinder hätten.", fr: "Ils ne se sépareraient pas s'ils avaient des enfants." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich nie von dir getrennt.", fr: "Je ne me serais jamais séparé(e) de toi." },
        { de: "Sie hätten sich schon vor langer Zeit trennen sollen.", fr: "Ils se seraient séparés il y a bien longtemps." },
        { de: "Wir hätten uns nicht im Streit trennen sollen.", fr: "Nous n'aurions pas dû nous séparer fâchés." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass wir uns trennen.", fr: "Je ne veux pas que nous nous séparions." },
      { de: "Es ist traurig, dass sie sich trennen.", fr: "Il est triste qu'ils se séparent." },
      { de: "Bevor ihr euch trennt, solltet ihr miteinander reden.", fr: "Avant que vous vous sépariez, vous devriez vous parler." }
    ]
  }
};
