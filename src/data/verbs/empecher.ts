import type { Verb } from '@/types/verb-types';

export const empecher: Verb = {
  infinitive: "empêcher",
  translation: "verhindern, abhalten",
  verbGroup: 1,
  indicatif: {
    présent: ["empêche", "empêches", "empêche", "empêchons", "empêchez", "empêchent"],
    passé_composé: { aux: "avoir", participle: "empêché" },
    imparfait: ["empêchais", "empêchais", "empêchait", "empêchions", "empêchiez", "empêchaient"],
    plus_que_parfait: { aux: "avoir", participle: "empêché" },
    futur_simple: ["empêcherai", "empêcheras", "empêchera", "empêcherons", "empêcherez", "empêcheront"],
    futur_proche: { aux: "aller", participle: "empêcher" }
  },
  subjonctif: {
    présent: ["empêche", "empêches", "empêche", "empêchions", "empêchiez", "empêchent"]
  },
  conditionnel: {
    présent: ["empêcherais", "empêcherais", "empêcherait", "empêcherions", "empêcheriez", "empêcheraient"],
    passé: { aux: "avoir", participle: "empêché" }
  },
  imperatif: {
    present: ["empêche", "empêchons", "empêchez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich hindere ihn daran, eine Dummheit zu machen.", fr: "Je l'empêche de faire une bêtise." },
      { de: "Der Regen hindert uns am Ausgehen.", fr: "La pluie nous empêche de sortir." },
      { de: "Was hindert dich daran, es zu tun?", fr: "Qu'est-ce qui t'empêche de le faire ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Der Verkehr hat mich daran gehindert, pünktlich zu sein.", fr: "Le trafic m'a empêché(e) d'être à l'heure." },
      { de: "Sie hat ihn daran gehindert zu gehen.", fr: "Elle l'a empêché de partir." },
      { de: "Wir haben eine Katastrophe verhindert.", fr: "Nous avons empêché une catastrophe." }
    ],
    "indicatif_imparfait": [
        { de: "Seine Schüchternheit hinderte ihn daran, zu sprechen.", fr: "Sa timidité l'empêchait de parler." },
        { de: "Wir verhinderte immer, dass die Kinder auf der Straße spielten.", fr: "Nous empêchions toujours les enfants de jouer dans la rue." },
        { de: "Die Angst hinderte sie daran, voranzukommen.", fr: "La peur les empêchait d'avancer." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ein unvorhergesehenes Ereignis hatte sie daran gehindert, zu kommen.", fr: "Un imprévu les avait empêchés de venir." },
        { de: "Ich hatte ihn daran gehindert, einen schweren Fehler zu begehen.", fr: "Je l'avais empêché de commettre une grave erreur." },
        { de: "Die Sicherheitsvorkehrungen hatten den Unfall verhindert.", fr: "Les mesures de sécurité avaient empêché l'accident." }
    ],
    "indicatif_futur_simple": [
      { de: "Nichts wird mich daran hindern, erfolgreich zu sein.", fr: "Rien ne m'empêchera de réussir." },
      { de: "Diese neue Regel wird viele Probleme verhindern.", fr: "Cette nouvelle règle empêchera beaucoup de problèmes." },
      { de: "Wir werden ihn daran hindern, Schaden anzurichten.", fr: "Nous l'empêcherons de nuire." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ihn daran hindern zu lügen.", fr: "Je vais l'empêcher de mentir." },
      { de: "Der Sicherheitsdienst wird den Zugang zum Gebäude verhindern.", fr: "Le service de sécurité va empêcher l'accès au bâtiment." },
      { de: "Wir werden das Leck mit allen Mitteln verhindern.", fr: "Nous allons empêcher la fuite par tous les moyens." }
    ],
    "conditionnel_présent": [
        { de: "Nur ein Wunder könnte ihn daran hindern zu gewinnen.", fr: "Seul un miracle pourrait l'empêcher de gagner." },
        { de: "Ich würde ihn daran hindern, wenn ich könnte.", fr: "Je l'empêcherais si je le pouvais." },
        { de: "Das würde viele Unfälle verhindern.", fr: "Cela empêcherait de nombreux accidents." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte es verhindern können.", fr: "J'aurais pu l'empêcher." },
        { de: "Eine schnellere Reaktion hätte die Ausbreitung des Feuers verhindert.", fr: "Une réaction plus rapide aurait empêché la propagation du feu." },
        { de: "Wir hätten ihn daran gehindert, wenn wir es gewusst hätten.", fr: "Nous l'aurions empêché si nous avions su." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass irgendetwas dich daran hindert glücklich zu sein.", fr: "Je ne veux pas que quoi que ce soit t'empêche d'être heureux." },
      { de: "Es ist wichtig, dass wir verhindern, dass sich die Situation verschlimmert.", fr: "Il est crucial que nous empêchions la situation de s'aggraver." },
      { de: "Obwohl ihn alles daran hindert, gibt er nicht auf.", fr: "Bien que tout l'empêche, il n'abandonne pas." }
    ]
  }
};
