import type { Verb } from '@/types/verb-types';

export const seMarier: Verb = {
  infinitive: "se marier",
  translation: "heiraten",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["marie", "maries", "marie", "marions", "mariez", "marient"],
    passé_composé: { aux: 'être', participle: 'marié' },
    imparfait: ["mariais", "mariais", "mariait", "marions", "mariez", "mariaient"],
    plus_que_parfait: { aux: 'être', participle: 'marié' },
    futur_simple: ["marierai", "marieras", "mariera", "marierons", "marierez", "marieront"],
    futur_proche: { aux: "aller", participle: "se marier" }
  },
  subjonctif: {
    présent: ["marie", "maries", "marie", "marions", "mariez", "marient"]
  },
  conditionnel: {
    présent: ["marierais", "marierais", "marierait", "marierions", "marieriez", "marieraient"],
    passé: { aux: 'être', participle: 'marié' }
  },
  imperatif: {
    present: ["marie-toi", "marions-nous", "mariez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich heirate meine Jugendliebe.", fr: "Je me marie avec mon amour de jeunesse." },
      { de: "Sie heiraten nächsten Sommer.", fr: "Ils se marient l'été prochain." },
      { de: "Wann heiratet ihr?", fr: "Quand est-ce que vous vous mariez ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe letztes Jahr geheiratet.", fr: "Je me suis marié(e) l'année dernière." },
      { de: "Sie hat einen Engländer geheiratet.", fr: "Elle s'est mariée avec un Anglais." },
      { de: "Sie haben sehr jung geheiratet.", fr: "Ils se sont mariés très jeunes." }
    ],
    "indicatif_imparfait": [
        { de: "Damals heiratete man oft aus Vernunft.", fr: "À cette époque, on se mariait souvent par raison." },
        { de: "Wir träumten davon zu heiraten.", fr: "Nous rêvions de nous marier." },
        { de: "Sie heirateten immer im Juni.", fr: "Ils se mariaient toujours au mois de juin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte geheiratet, ohne es ihren Eltern zu sagen.", fr: "Elle s'était mariée sans le dire à ses parents." },
        { de: "Sie hatten nur wenige Monate nach ihrem Kennenlernen geheiratet.", fr: "Ils s'étaient mariés quelques mois seulement après leur rencontre." },
        { de: "Ich hatte geheiratet, bevor ich mein Studium beendete.", fr: "Je m'étais marié(e) avant de finir mes études." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich eines Tages heiraten.", fr: "Je me marierai avec toi un jour." },
      { de: "Sie wird niemals heiraten.", fr: "Elle ne se mariera jamais." },
      { de: "Wir werden in einer kleinen Kirche heiraten.", fr: "Nous nous marierons dans une petite église." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde bald heiraten.", fr: "Je vais bientôt me marier." },
      { de: "Sie werden in Las Vegas heiraten.", fr: "Ils vont se marier à Las Vegas." },
      { de: "Wirst du ihn heiraten?", fr: "Vas-tu te marier avec lui ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich sofort heiraten, wenn du einverstanden wärst.", fr: "Je me marierais avec toi tout de suite si tu étais d'accord." },
        { de: "Er würde sie heiraten, aber er hat Angst vor der Verpflichtung.", fr: "Il se marierait avec elle, mais il a peur de l'engagement." },
        { de: "Wir würden am Strand heiraten, wenn es möglich wäre.", fr: "Nous nous marierions sur la plage si c'était possible." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich geheiratet, wenn du mich gefragt hättest.", fr: "Je me serais marié(e) avec toi si tu me l'avais demandé." },
        { de: "Sie hätten geheiratet, wenn ihre Familien einverstanden gewesen wären.", fr: "Ils se seraient mariés si leurs familles avaient été d'accord." },
        { de: "Sie hätte ihn nicht geheiratet, wenn sie seine Vergangenheit gekannt hätte.", fr: "Elle ne se serait pas mariée avec lui si elle avait connu son passé." }
    ],
    "subjonctif_présent": [
      { de: "Ihre Eltern wollen, dass sie heiratet.", fr: "Ses parents veulent qu'elle se marie." },
      { de: "Es ist selten, dass Menschen so jung heiraten.", fr: "Il est rare que les gens se marient si jeunes." },
      { de: "Bevor wir heiraten, müssen wir sparen.", fr: "Avant que nous nous marions, nous devons économiser." }
    ]
  }
};
