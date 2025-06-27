import type { Verb } from '@/types/verb-types';

export const hesiter: Verb = {
  infinitive: "hésiter",
  translation: "zögern",
  verbGroup: 1,
  indicatif: {
    présent: ["hésite", "hésites", "hésite", "hésitons", "hésitez", "hésitent"],
    passé_composé: { aux: "avoir", participle: "hésité" },
    imparfait: ["hésitais", "hésitais", "hésitait", "hésitions", "hésitiez", "hésitaient"],
    plus_que_parfait: { aux: "avoir", participle: "hésité" },
    futur_simple: ["hésiterai", "hésiteras", "hésitera", "hésiterons", "hésiterez", "hésiteront"],
    futur_proche: { aux: "aller", participle: "hésiter" }
  },
  subjonctif: { présent: ["hésite", "hésites", "hésite", "hésitions", "hésitiez", "hésitent"] },
  conditionnel: { présent: ["hésiterais", "hésiterais", "hésiterait", "hésiterions", "hésiteriez", "hésiteraient"], passé: { aux: "avoir", participle: "hésité" } },
  imperatif: { present: ["hésite", "hésitons", "hésitez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich zögere zwischen zwei Optionen.", fr: "J'hésite entre deux options." },
      { de: "Zögere nicht, mich zu fragen.", fr: "N'hésite pas à me demander." },
      { de: "Warum zögern Sie?", fr: "Pourquoi hésitez-vous ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe einen Moment gezögert.", fr: "J'ai hésité un instant." },
      { de: "Sie hat nicht gezögert zu antworten.", fr: "Elle n'a pas hésité à répondre." },
      { de: "Wir haben vor der Entscheidung gezögert.", fr: "Nous avons hésité avant de prendre la décision." }
    ],
    "indicatif_imparfait": [
        { de: "Er zögerte immer, bevor er sprach.", fr: "Il hésitait toujours avant de parler." },
        { de: "Ich zögerte, ihn zu stören.", fr: "J'hésitais à le déranger." },
        { de: "Sie zögerten oft, ihre Meinung zu sagen.", fr: "Ils hésitaient souvent à donner leur avis." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte einen Moment gezögert.", fr: "J'avais hésité un instant." },
        { de: "Wenn du nicht gezögert hättest, hätten wir es geschafft.", fr: "Si tu n'avais pas hésité, nous aurions réussi." },
        { de: "Sie hatte gezögert, aber es schließlich getan.", fr: "Elle avait hésité, mais l'a finalement fait." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde nicht zögern, es zu tun.", fr: "Je n'hésiterai pas à le faire." },
      { de: "Er wird vielleicht ein wenig zögern.", fr: "Il hésitera peut-être un peu." },
      { de: "Sie werden nicht zögern, die Gelegenheit zu ergreifen.", fr: "Ils n'hésiteront pas à saisir l'opportunité." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde nicht zögern.", fr: "Je ne vais pas hésiter." },
      { de: "Wirst du zögern zu antworten?", fr: "Tu vas hésiter à répondre ?" },
      { de: "Sie wird einen Moment zögern.", fr: "Elle va hésiter un moment." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde an deiner Stelle nicht zögern.", fr: "Je n'hésiterais pas à ta place." },
        { de: "Er würde zögern, eine solche Entscheidung zu treffen.", fr: "Il hésiterait à prendre une telle décision." },
        { de: "Wir würden nicht einen Moment zögern.", fr: "Nous n'hésiterions pas un seul instant." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte nicht, dass du zögerst.", fr: "Je ne veux pas que tu hésites." },
      { de: "Es ist wichtig, dass wir nicht zögern.", fr: "Il est important que nous n'hésitions pas." },
      { de: "Obwohl sie zögert, muss sie es tun.", fr: "Bien qu'elle hésite, elle doit le faire." }
    ]
  }
};
