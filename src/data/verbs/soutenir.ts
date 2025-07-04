import type { Verb } from '@/types/verb-types';

export const soutenir: Verb = {
  infinitive: "soutenir",
  translation: "unterstützen, stützen",
  verbGroup: 3,
  indicatif: {
    présent: ["soutiens", "soutiens", "soutient", "soutenons", "soutenez", "soutiennent"],
    passé_composé: { aux: "avoir", participle: "soutenu" },
    imparfait: ["soutenais", "soutenais", "soutenait", "soutenions", "souteniez", "soutenaient"],
    plus_que_parfait: { aux: "avoir", participle: "soutenu" },
    futur_simple: ["soutiendrai", "soutiendras", "soutiendra", "soutiendrons", "soutiendrez", "soutiendront"],
    futur_proche: { aux: "aller", participle: "soutenir" }
  },
  subjonctif: {
    présent: ["soutienne", "soutiennes", "soutienne", "soutenions", "souteniez", "soutiennent"]
  },
  conditionnel: {
    présent: ["soutiendrais", "soutiendrais", "soutiendrait", "soutiendrions", "soutiendriez", "soutiendraient"],
    passé: { aux: "avoir", participle: "soutenu" }
  },
  imperatif: {
    present: ["soutiens", "soutenons", "soutenez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich unterstütze deinen Vorschlag.", fr: "Je soutiens ta proposition." },
      { de: "Er stützt seinen Kopf mit den Händen.", fr: "Il soutient sa tête avec ses mains." },
      { de: "Wir unterstützen eine lokale Wohltätigkeitsorganisation.", fr: "Nous soutenons une œuvre de charité locale." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe dich immer unterstützt.", fr: "Je t'ai toujours soutenu(e)." },
      { de: "Sie hat ihre These brillant verteidigt (unterstützt).", fr: "Elle a soutenu sa thèse brillamment." },
      { de: "Sie haben unsere Sache von Anfang an unterstützt.", fr: "Ils ont soutenu notre cause depuis le début." }
    ],
    "indicatif_imparfait": [
        { de: "Seine Familie unterstützte ihn immer bei seinen Projekten.", fr: "Sa famille le soutenait toujours dans ses projets." },
        { de: "Wir unterstützten diese Idee, obwohl sie riskant war.", fr: "Nous soutenions cette idée même si elle était risquée." },
        { de: "Ihr Blick unterstützte meine Überzeugung.", fr: "Son regard soutenait ma conviction." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seine Freunde in schwierigen Zeiten unterstützt.", fr: "Il avait soutenu ses amis dans les moments difficiles." },
        { de: "Sie hatte behauptet, dass sie unschuldig sei, und hatte es immer aufrechterhalten.", fr: "Elle avait affirmé qu'elle était innocente et l'avait toujours soutenu." },
        { de: "Wir hatten sie unterstützt, so gut wir konnten.", fr: "Nous les avions soutenus du mieux que nous pouvions." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde deine Entscheidung unterstützen, egal welche es ist.", fr: "Je soutiendrai ta décision, quelle qu'elle soit." },
      { de: "Sie wird ihn bedingungslos unterstützen.", fr: "Elle le soutiendra sans condition." },
      { de: "Wir werden Ihren Kandidaten bei den Wahlen unterstützen.", fr: "Nous soutiendrons votre candidat aux élections." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dich bei diesem Treffen unterstützen.", fr: "Je vais te soutenir pendant cette réunion." },
      { de: "Seine Fans werden ihn während des Spiels unterstützen.", fr: "Ses fans vont le soutenir pendant le match." },
      { de: "Wir werden diesen Gesetzesentwurf unterstützen.", fr: "Nous allons soutenir ce projet de loi." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich unterstützen, wenn du mich darum bitten würdest.", fr: "Je te soutiendrais si tu me le demandais." },
        { de: "Er würde diese Theorie nicht unterstützen, ohne Beweise zu haben.", fr: "Il ne soutiendrait pas cette théorie sans avoir de preuves." },
        { de: "Sie würden ein solches Projekt unter anderen Umständen unterstützen.", fr: "Ils soutiendraient un tel projet dans d'autres circonstances." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich unterstützt, wenn ich von deinen Schwierigkeiten gewusst hätte.", fr: "Je t'aurais soutenu(e) si j'avais su tes difficultés." },
        { de: "Wir hätten ihn unterstützt, aber er hat uns nicht um Hilfe gebeten.", fr: "Nous l'aurions soutenu, mais il ne nous a pas demandé d'aide." },
        { de: "Sie hätten eine andere Meinung vertreten, wenn sie alle Fakten gekannt hätten.", fr: "Elles auraient soutenu un avis différent si elles avaient connu tous les faits." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Freunde unterstützt.", fr: "Il est important que tu soutiennes tes amis." },
      { de: "Ich bezweifle, dass er diesen Standpunkt unterstützt.", fr: "Je doute qu'il soutienne ce point de vue." },
      { de: "Damit wir dich unterstützen, musst du ehrlich zu uns sein.", fr: "Pour que nous te soutenions, tu dois être honnête avec nous." }
    ]
  }
};
