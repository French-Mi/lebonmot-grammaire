import type { Verb } from '@/types/verb-types';

export const decoder: Verb = {
  infinitive: "décoder",
  translation: "entschlüsseln, decodieren",
  verbGroup: 1,
  indicatif: {
    présent: ["décode", "décodes", "décode", "décodons", "décodez", "décodent"],
    passé_composé: { aux: "avoir", participle: "décodé" },
    imparfait: ["décodais", "décodais", "décodait", "décodions", "décodiez", "décodaient"],
    plus_que_parfait: { aux: "avoir", participle: "décodé" },
    futur_simple: ["décoderai", "décoderas", "décodera", "décoderons", "décoderez", "décoderont"],
    futur_proche: { aux: "aller", participle: "décoder" }
  },
  subjonctif: {
    présent: ["décode", "décodes", "décode", "décodions", "décodiez", "décodent"]
  },
  conditionnel: {
    présent: ["décoderais", "décoderais", "décoderait", "décoderions", "décoderiez", "décoderaient"],
    passé: { aux: "avoir", participle: "décodé" }
  },
  imperatif: {
    present: ["décode", "décodons", "décodez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich entschlüssele die geheime Nachricht.", fr: "Je décode le message secret." },
      { de: "Der Computer decodiert die Daten.", fr: "L'ordinateur décode les données." },
      { de: "Wir versuchen, seine Körpersprache zu entschlüsseln.", fr: "Nous essayons de décoder son langage corporel." }
    ],
    "indicatif_passé_composé": [
      { de: "Der Spion hat den Code entschlüsselt.", fr: "L'espion a décodé le code." },
      { de: "Hast du die Anweisungen entschlüsselt?", fr: "As-tu décodé les instructions ?" },
      { de: "Wir haben das Signal erfolgreich decodiert.", fr: "Nous avons décodé le signal avec succès." }
    ],
    "indicatif_imparfait": [
        { de: "Er entschlüsselte alte Manuskripte.", fr: "Il démanageait les anciens manuscrits." },
        { de: "Als Linguisten entschlüsselten wir Hieroglyphen.", fr: "En tant que linguistes, nous démanageions les hiéroglyphes." },
        { de: "Sie entschlüsselten die Funksprüche des Feindes.", fr: "Ils démanageaient les messages radio de l'ennemi." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte die Nachricht entschlüsselt, bevor sie zerstört wurde.", fr: "Elle avait décodé le message avant qu'il ne soit détruit." },
        { de: "Wir hatten das Rätsel entschlüsselt, nachdem wir alle Hinweise gesammelt hatten.", fr: "Nous avions décodé l'énigme après avoir rassemblé tous les indices." },
        { de: "Ich hatte die Symbolik des Traums entschlüsselt.", fr: "J'avais décodé le symbolisme du rêve." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diese Datei für dich entschlüsseln.", fr: "Je décoderai ce fichier pour toi." },
      { de: "Ein Experte wird die DNA entschlüsseln.", fr: "Un expert décodera l'ADN." },
      { de: "Wir werden die Absichten unserer Konkurrenten entschlüsseln.", fr: "Nous décoderons les intentions de nos concurrents." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde versuchen, dieses Lächeln zu entschlüsseln.", fr: "Je vais essayer de décoder ce sourire." },
      { de: "Das Programm wird das Bild decodieren.", fr: "Le logiciel va décoder l'image." },
      { de: "Sie werden das Geheimnis bald entschlüsseln.", fr: "Ils vont bientôt décoder le mystère." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde den Code entschlüsseln, wenn ich den Schlüssel hätte.", fr: "Je décoderais le code si j'avais la clé." },
        { de: "Ein Psychologe könnte sein Verhalten entschlüsseln.", fr: "Un psychologue pourrait décoder son comportement." },
        { de: "Wir würden die Zeichen entschlüsseln, wenn wir mehr Zeit hätten.", fr: "Nous décoderions les signes si nous avions plus de temps." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte die Nachricht schneller entschlüsselt, wenn du mir geholfen hättest.", fr: "J'aurais décodé le message plus vite si tu m'avais aidé." },
        { de: "Sie hätten seine wahren Absichten entschlüsseln können.", fr: "Ils auraient pu décoder ses véritables intentions." },
        { de: "Er hätte das Signal nicht ohne das richtige Gerät entschlüsselt.", fr: "Il n'aurait pas décodé le signal sans le bon équipement." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du diese Informationen entschlüsselst.", fr: "Il faut que tu décodes cette information." },
      { de: "Ich bezweifle, dass er ihre Reaktion entschlüsseln kann.", fr: "Je doute qu'il puisse décoder sa réaction." },
      { de: "Damit wir das Rätsel entschlüsseln, müssen wir zusammenarbeiten.", fr: "Pour que nous démanageions l'énigme, nous devons travailler ensemble." }
    ]
  }
};
