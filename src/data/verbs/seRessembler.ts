import type { Verb } from '@/types/verb-types';

export const seRessembler: Verb = {
  infinitive: "se ressembler",
  translation: "sich ähneln, sich gleichen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["ressemble", "ressembles", "ressemble", "ressemblons", "ressemblez", "ressemblent"],
    passé_composé: { aux: 'avoir', participle: 'ressemblé' },
    imparfait: ["ressemblais", "ressemblais", "ressemblait", "ressemblions", "ressembliez", "ressemblaient"],
    plus_que_parfait: { aux: 'avoir', participle: 'ressemblé' },
    futur_simple: ["ressemblerai", "ressembleras", "ressemblera", "ressemblerons", "ressemblerez", "ressembleront"],
    futur_proche: { aux: "aller", participle: "se ressembler" }
  },
  subjonctif: {
    présent: ["ressemble", "ressembles", "ressemble", "ressemblions", "ressembliez", "ressemblent"]
  },
  conditionnel: {
    présent: ["ressemblerais", "ressemblerais", "ressemblerait", "ressemblerions", "ressembleriez", "ressembleraient"],
    passé: { aux: 'avoir', participle: 'ressemblé' }
  },
  imperatif: {
    present: ["ressemble-toi", "ressemblons-nous", "ressemblez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Du ähnelst deinem Vater.", fr: "Tu ressembles à ton père." },
      { de: "Alle Katzen ähneln sich im Dunkeln.", fr: "Tous les chats se ressemblent dans le noir." },
      { de: "Wir ähneln uns sehr.", fr: "Nous nous ressemblons beaucoup." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat seinem Bruder immer geähnelt.", fr: "Il a toujours ressemblé à son frère." },
      { de: "Diese beiden Fälle haben sich sehr geähnelt.", fr: "Ces deux cas se sont beaucoup ressemblé." },
      { de: "Als sie jung waren, haben sie sich wie Zwillinge geähnelt.", fr: "Quand ils étaient jeunes, ils se sont ressemblé comme des jumeaux." }
    ],
    "indicatif_imparfait": [
        { de: "Sie ähnelte ihrer Mutter sehr.", fr: "Elle ressemblait beaucoup à sa mère." },
        { de: "Unsere Kindheiten ähnelten sich in vielerlei Hinsicht.", fr: "Nos enfances se ressemblaient sur de nombreux points." },
        { de: "Ihr habt euch schon immer geähnelt.", fr: "Vous vous ressembliez depuis toujours." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seinem Großvater geähnelt.", fr: "Il avait ressemblé à son grand-père." },
        { de: "Ihre Lebenswege hatten sich nie geähnelt.", fr: "Leurs parcours de vie ne s'étaient jamais ressemblé." },
        { de: "Ich hatte mir vorgestellt, dass wir uns mehr ähneln.", fr: "Je m'étais imaginé que nous nous ressemblions plus." }
    ],
    "indicatif_futur_simple": [
      { de: "Er wird immer mehr seinem Vater ähneln.", fr: "Il ressemblera de plus en plus à son père." },
      { de: "Unsere Zukunftspläne werden sich ähneln.", fr: "Nos projets d'avenir se ressembleront." },
      { de: "Ihr werdet euch nie ähneln.", fr: "Vous ne vous ressemblerez jamais." }
    ],
    "indicatif_futur_proche": [
      { de: "Dieses Haus wird unserem Traumhaus ähneln.", fr: "Cette maison va ressembler à la maison de nos rêves." },
      { de: "Ihre Karrieren werden sich ähneln.", fr: "Leurs carrières vont se ressembler." },
      { de: "Wir werden uns am Ende alle ähneln.", fr: "Nous allons tous finir par nous ressembler." }
    ],
    "conditionnel_présent": [
        { de: "Das würde einem Paradies ähneln.", fr: "Cela ressemblerait à un paradis." },
        { de: "Er würde einem Filmstar ähneln, wenn er einen Bart hätte.", fr: "Il ressemblerait à une star de cinéma s'il avait une barbe." },
        { de: "Wir würden uns mehr ähneln, wenn wir zusammen aufgewachsen wären.", fr: "Nous nous ressemblerions plus si nous avions grandi ensemble." }
    ],
     "conditionnel_passé": [
        { de: "Das hätte einem Albtraum geähnelt.", fr: "Cela aurait ressemblé à un cauchemar." },
        { de: "Sie hätten sich mehr geähnelt, wenn sie dieselbe Erziehung gehabt hätten.", fr: "Ils se seraient plus ressemblé s'ils avaient eu la même éducation." },
        { de: "Du hättest deinem Idol geähnelt.", fr: "Tu aurais ressemblé à ton idole." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte nicht, dass wir uns zu sehr ähneln.", fr: "Je ne veux pas que nous nous ressemblions trop." },
      { de: "Es ist erstaunlich, dass sie sich so sehr ähneln.", fr: "Il est étonnant qu'ils se ressemblent autant." },
      { de: "Damit sich die Projekte ähneln, müssen wir die Richtlinien befolgen.", fr: "Pour que les projets se ressemblent, nous devons suivre les directives." }
    ]
  }
};
