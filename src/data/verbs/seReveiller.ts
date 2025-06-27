import type { Verb } from '@/types/verb-types';

export const seReveiller: Verb = {
  infinitive: 'se réveiller',
  translation: 'aufwachen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["réveille", "réveilles", "réveille", "réveillons", "réveillez", "réveillent"],
    passé_composé: { aux: 'être', participle: 'réveillé' },
    imparfait: ["réveillais", "réveillais", "réveillait", "réveillions", "réveilliez", "réveillaient"],
    plus_que_parfait: { aux: 'être', participle: 'réveillé' },
    futur_simple: ["réveillerai", "réveilleras", "réveillera", "réveillerons", "réveillerez", "réveilleront"],
    futur_proche: { aux: "aller", participle: "se réveiller" }
  },
  subjonctif: { présent: ["réveille", "réveilles", "réveille", "réveillions", "réveilliez", "réveillent"] },
  conditionnel: {
    présent: ["réveillerais", "réveillerais", "réveillerait", "réveillerions", "réveilleriez", "réveilleraient"],
    passé: { aux: 'être', participle: 'réveillé' }
  },
  imperatif: { present: ["réveille-toi", "réveillons-nous", "réveillez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich wache jeden Morgen um 6 Uhr auf.", fr: "Je me réveille à 6 heures tous les matins." },
      { de: "Wann wachst du normalerweise auf?", fr: "Tu te réveilles à quelle heure d'habitude ?" },
      { de: "Wir wachen mit dem Gesang der Vögel auf.", fr: "Nous nous réveillons avec le chant des oiseaux." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin heute Nacht aufgewacht, weil ich einen Albtraum hatte.", fr: "Je me suis réveillé(e) cette nuit à cause d'un cauchemar." },
      { de: "Sie ist zu spät aufgewacht.", fr: "Elle s'est réveillée trop tard." },
      { de: "Wir sind sehr früh aufgewacht, um den Sonnenaufgang zu sehen.", fr: "Nous nous sommes réveillés très tôt pour voir le lever du soleil." }
    ],
    "indicatif_imparfait": [
        { de: "Als ich ein Baby war, wachte ich oft nachts auf.", fr: "Quand j'étais bébé, je me réveillais souvent la nuit." },
        { de: "Wir wachten immer auf, wenn das Telefon klingelte.", fr: "Nous nous réveillions toujours quand le téléphone sonnait." },
        { de: "Er wachte jeden Morgen gut gelaunt auf.", fr: "Il se réveillait de bonne humeur chaque matin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war schon aufgewacht, als der Wecker klingelte.", fr: "Je m'étais déjà réveillé(e) quand le réveil a sonné." },
        { de: "Sie waren aufgewacht, bevor der Tag anbrach.", fr: "Ils s'étaient réveillés avant le jour." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich ohne Wecker aufwachen.", fr: "Demain, je me réveillerai sans réveil." },
      { de: "Du wirst früh aufwachen, um deinen Flug zu erwischen.", fr: "Tu te réveilleras tôt pour prendre ton vol." },
      { de: "Sie werden in einem neuen Land aufwachen.", fr: "Ils se réveilleront dans un nouveau pays." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde in einer Stunde aufwachen.", fr: "Je vais me réveiller dans une heure." },
      { de: "Wir werden aufwachen, sobald die Sonne aufgeht.", fr: "Nous allons nous réveiller dès que le soleil se lèvera." },
      { de: "Sie wird vom Lärm aufwachen.", fr: "Elle va se réveiller à cause du bruit." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich im Urlaub wäre, würde ich später aufwachen.", fr: "Si j'étais en vacances, je me réveillerais plus tard." },
        { de: "Würdest du aufwachen, wenn ich dich anrufen würde?", fr: "Te réveillerais-tu si je t'appelais ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich wäre nicht aufgewacht, wenn du nicht so viel Lärm gemacht hättest.", fr: "Je ne me serais pas réveillé(e) si tu n'avais pas fait autant de bruit." }
    ],
    "subjonctif_présent": [
      { de: "Ich muss früh aufstehen, damit ich nicht zu spät komme.", fr: "Il faut que je me réveille tôt pour ne pas être en retard." },
      { de: "Der Chef verlangt, dass wir aufwachen und produktiv sind.", fr: "Le patron exige que nous nous réveillions et soyons productifs." }
    ]
  }
};
