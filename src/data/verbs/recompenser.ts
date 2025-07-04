import type { Verb } from '@/types/verb-types';

export const recompenser: Verb = {
  infinitive: "récompenser",
  translation: "belohnen",
  verbGroup: 1,
  indicatif: {
    présent: ["récompense", "récompenses", "récompense", "récompensons", "récompensez", "récompensent"],
    passé_composé: { aux: "avoir", participle: "récompensé" },
    imparfait: ["récompensais", "récompensais", "récompensait", "récompensions", "récompensez", "récompensaient"],
    plus_que_parfait: { aux: "avoir", participle: "récompensé" },
    futur_simple: ["récompenserai", "récompenserons", "récompensera", "récompenserons", "récompenserez", "récompenseront"],
    futur_proche: { aux: "aller", participle: "récompenser" }
  },
  subjonctif: {
    présent: ["récompense", "récompenses", "récompense", "récompensions", "récompensez", "récompensent"]
  },
  conditionnel: {
    présent: ["récompenserais", "récompenserais", "récompenserait", "récompenserions", "récompensez", "récompenseraient"],
    passé: { aux: "avoir", participle: "récompensé" }
  },
  imperatif: {
    present: ["récompense", "récompensons", "récompensez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich belohne meine Tochter für ihre guten Noten.", fr: "Je récompense ma fille pour ses bonnes notes." },
      { de: "Die Firma belohnt ihre besten Mitarbeiter.", fr: "L'entreprise récompense ses meilleurs employés." },
      { de: "Wir belohnen die Anstrengung, nicht nur das Ergebnis.", fr: "Nous récompensons l'effort, pas seulement le résultat." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihn für seine Hilfe belohnt.", fr: "Je l'ai récompensé pour son aide." },
      { de: "Sie hat den Hund mit einem Leckerli belohnt.", fr: "Elle a récompensé le chien avec une friandise." },
      { de: "Habt ihr die Kinder für ihr gutes Verhalten belohnt?", fr: "Avez-vous récompensé les enfants pour leur bon comportement ?" }
    ],
    "indicatif_imparfait": [
        { de: "Der König belohnte seine treuen Ritter.", fr: "Le roi récompensait ses fidèles chevaliers." },
        { de: "Wir belohnten uns nach einer harten Arbeitswoche.", fr: "Nous nous récompensons après une dure semaine de travail." },
        { de: "Damals belohnte man die Schüler mit Bildern.", fr: "À l'époque, on récompensait les élèves avec des images." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seine Mannschaft nach dem Sieg belohnt.", fr: "Il avait récompensé son équipe après la victoire." },
        { de: "Ich hatte mich mit einem guten Essen belohnt.", fr: "Je m'étais récompensé(e) avec un bon repas." },
        { de: "Sie hatte den Finder der Brieftasche großzügig belohnt.", fr: "Elle avait généreusement récompensé la personne qui avait trouvé le portefeuille." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich für deine Mühe belohnen.", fr: "Je te récompenserai pour tes efforts." },
      { de: "Die Schule wird die besten Projekte belohnen.", fr: "L'école récompensera les meilleurs projets." },
      { de: "Wir werden diejenigen belohnen, die teilnehmen.", fr: "Nous récompenserons ceux qui participeront." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dich mit einem Eis belohnen.", fr: "Je vais te récompenser avec une glace." },
      { de: "Der Trainer wird die Spieler belohnen.", fr: "L'entraîneur va récompenser les joueurs." },
      { de: "Sie werden uns für unsere Geduld belohnen.", fr: "Ils vont nous récompenser pour notre patience." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich belohnen, wenn ich könnte.", fr: "Je te récompenserais si je le pouvais." },
        { de: "Er würde seine Mitarbeiter besser belohnen, wenn das Unternehmen mehr Gewinn machen würde.", fr: "Il récompenserait mieux ses employés si l'entreprise faisait plus de bénéfices." },
        { de: "Wir würden jeden belohnen, der die Lösung findet.", fr: "Nous récompenserions quiconque trouverait la solution." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich anders belohnt.", fr: "Je t'aurais récompensé(e) différemment." },
        { de: "Sie hätten ihn für seine Ehrlichkeit belohnen sollen.", fr: "Vous auriez dû le récompenser pour son honnêteté." },
        { de: "Man hätte sie für ihren Mut belohnen sollen.", fr: "On aurait dû la récompenser pour son courage." }
    ],
    "subjonctif_présent": [
      { de: "Es ist gerecht, dass man die Anstrengung belohnt.", fr: "Il est juste que l'on récompense l'effort." },
      { de: "Ich möchte, dass du den Gewinner belohnst.", fr: "Je veux que tu récompenses le gagnant." },
      { de: "Es ist wichtig, dass wir die loyalsten Kunden belohnen.", fr: "Il est important que nous récompensons les clients les plus fidèles." }
    ]
  }
};
