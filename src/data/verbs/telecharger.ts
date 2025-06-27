import type { Verb } from '@/types/verb-types';

export const telecharger: Verb = {
  infinitive: "télécharger",
  translation: "herunterladen",
  verbGroup: 1,
  indicatif: {
    présent: ["télécharge", "télécharges", "télécharge", "téléchargeons", "téléchargez", "téléchargent"],
    passé_composé: { aux: "avoir", participle: "téléchargé" },
    imparfait: ["téléchargeais", "téléchargeais", "téléchargeait", "téléchargions", "téléchargiez", "téléchargeaient"],
    plus_que_parfait: { aux: "avoir", participle: "téléchargé" },
    futur_simple: ["téléchargerai", "téléchargeras", "téléchargera", "téléchargerons", "téléchargerez", "téléchargeront"],
    futur_proche: { aux: "aller", participle: "télécharger" }
  },
  subjonctif: { présent: ["télécharge", "télécharges", "télécharge", "téléchargions", "téléchargiez", "téléchargent"] },
  conditionnel: { présent: ["téléchargerais", "téléchargerais", "téléchargerait", "téléchargerions", "téléchargeriez", "téléchargeraient"], passé: { aux: "avoir", participle: "téléchargé" } },
  imperatif: { present: ["télécharge", "téléchargeons", "téléchargez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lade eine Datei herunter.", fr: "Je télécharge un fichier." },
      { de: "Lädst du die App herunter?", fr: "Tu télécharges l'application ?" },
      { de: "Wir laden Musik herunter.", fr: "Nous téléchargeons de la musique." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Film heruntergeladen.", fr: "J'ai téléchargé le film." },
      { de: "Sie hat alle Fotos heruntergeladen.", fr: "Elle a téléchargé toutes les photos." },
      { de: "Habt ihr das Update heruntergeladen?", fr: "Avez-vous téléchargé la mise à jour ?" }
    ],
    "indicatif_imparfait": [
        { de: "Früher habe ich viele Spiele heruntergeladen.", fr: "Avant, je téléchargeais beaucoup de jeux." },
        { de: "Er lud ständig Dateien herunter.", fr: "Il téléchargeait constamment des fichiers." },
        { de: "Wir luden die Bilder von der Kamera herunter.", fr: "Nous téléchargions les photos de l'appareil." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die Datei bereits heruntergeladen.", fr: "J'avais déjà téléchargé le fichier." },
        { de: "Sie hatte die falsche Version heruntergeladen.", fr: "Elle avait téléchargé la mauvaise version." },
        { de: "Wir hatten die Software heruntergeladen, bevor sie entfernt wurde.", fr: "Nous avions téléchargé le logiciel avant qu'il ne soit retiré." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Dokumente später herunterladen.", fr: "Je téléchargerai les documents plus tard." },
      { de: "Du wirst das Spiel herunterladen.", fr: "Tu téléchargeras le jeu." },
      { de: "Sie werden die neue Version herunterladen.", fr: "Ils téléchargeront la nouvelle version." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde diese Musik herunterladen.", fr: "Je vais télécharger cette musique." },
      { de: "Wirst du das Dokument herunterladen?", fr: "Vas-tu télécharger le document ?" },
      { de: "Wir werden die App herunterladen.", fr: "Nous allons télécharger l'application." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diese Datei nicht herunterladen, sie scheint verdächtig.", fr: "Je ne téléchargerais pas ce fichier, il semble suspect." },
        { de: "Er würde es herunterladen, wenn er eine bessere Verbindung hätte.", fr: "Il téléchargerait s'il avait une meilleure connexion." },
        { de: "Wir würden alle Bilder herunterladen.", fr: "Nous téléchargerions toutes les images." }
    ],
    "subjonctif_présent": [
      { de: "Du musst die Datei herunterladen.", fr: "Il faut que tu télécharges le fichier." },
      { de: "Ich möchte, dass er die neueste Version herunterlädt.", fr: "Je veux qu'il télécharge la dernière version." },
      { de: "Warte, bis wir die Anhänge heruntergeladen haben.", fr: "Attends que nous téléchargions les pièces jointes." }
    ]
  }
};
