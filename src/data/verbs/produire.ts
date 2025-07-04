import type { Verb } from '@/types/verb-types';

export const produire: Verb = {
  infinitive: "produire",
  translation: "produzieren, herstellen, erzeugen",
  verbGroup: 3,
  indicatif: {
    présent: ["produis", "produis", "produit", "produisons", "produisez", "produisent"],
    passé_composé: { aux: "avoir", participle: "produit" },
    imparfait: ["produisais", "produisais", "produisait", "produisions", "produisiez", "produisaient"],
    plus_que_parfait: { aux: "avoir", participle: "produit" },
    futur_simple: ["produirai", "produiras", "produira", "produirons", "produirez", "produiront"],
    futur_proche: { aux: "aller", participle: "produire" }
  },
  subjonctif: {
    présent: ["produise", "produises", "produise", "produisions", "produisiez", "produisent"]
  },
  conditionnel: {
    présent: ["produirais", "produirais", "produirait", "produirions", "produiriez", "produiraient"],
    passé: { aux: "avoir", participle: "produit" }
  },
  imperatif: {
    present: ["produis", "produisons", "produisez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Diese Fabrik stellt Autos her.", fr: "Cette usine produit des voitures." },
      { de: "Der Baum produziert viele Früchte.", fr: "L'arbre produit beaucoup de fruits." },
      { de: "Wir produzieren unsere eigene Energie.", fr: "Nous produisons notre propre énergie." }
    ],
    "indicatif_passé_composé": [
      { de: "Wir haben letztes Jahr eine Million Einheiten produziert.", fr: "Nous avons produit un million d'unités l'année dernière." },
      { de: "Der Film hat eine starke emotionale Wirkung erzeugt.", fr: "Le film a produit un fort effet émotionnel." },
      { de: "Haben Sie die erforderlichen Dokumente vorgelegt (produziert)?", fr: "Avez-vous produit les documents nécessaires ?" }
    ],
    "indicatif_imparfait": [
        { de: "Die Region produzierte den besten Wein.", fr: "La région produisait le meilleur vin." },
        { de: "Diese Maschine produzierte hundert Stück pro Stunde.", fr: "Cette machine produisait cent pièces par heure." },
        { de: "Sie produzierten ihre eigene Kleidung.", fr: "Ils produisaient leurs propres vêtements." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Das Unternehmen hatte vor der Krise mehr produziert.", fr: "L'entreprise avait produit davantage avant la crise." },
        { de: "Ich hatte als Beweis eine Bescheinigung vorgelegt.", fr: "J'avais produit un certificat comme preuve." },
        { de: "Der Künstler hatte nur wenige Werke in seinem Leben geschaffen.", fr: "L'artiste n'avait produit que peu d'œuvres dans sa vie." }
    ],
    "indicatif_futur_simple": [
      { de: "Wir werden mehr produzieren, um die Nachfrage zu befriedigen.", fr: "Nous produirons plus pour satisfaire la demande." },
      { de: "Die neue Anlage wird nächstes Jahr Strom erzeugen.", fr: "La nouvelle centrale produira de l'électricité l'an prochain." },
      { de: "Sie werden bei der Verhandlung Beweise vorlegen.", fr: "Ils produiront des preuves lors du procès." }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden einen Dokumentarfilm produzieren.", fr: "Nous allons produire un film documentaire." },
      { de: "Die Sonnenkollektoren werden genug Energie produzieren.", fr: "Les panneaux solaires vont produire assez d'énergie." },
      { de: "Er wird ein ärztliches Attest vorlegen.", fr: "Il va produire un certificat médical." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen Effekt nicht absichtlich erzeugen.", fr: "Je ne produirais pas cet effet intentionnellement." },
        { de: "Die Fabrik könnte mehr produzieren, wenn sie modernisiert würde.", fr: "L'usine produirait plus si elle était modernisée." },
        { de: "Sie würden bessere Ergebnisse erzielen, wenn sie zusammenarbeiten würden.", fr: "Ils produiraient de meilleurs résultats s'ils travaillaient ensemble." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte die gleichen Ergebnisse erzielt.", fr: "J'aurais produit les mêmes résultats." },
        { de: "Wir hätten mehr produzieren können, wenn wir mehr Zeit gehabt hätten.", fr: "Nous aurions pu produire davantage si nous avions eu plus de temps." },
        { de: "Die Band hätte eine bessere Platte produziert, wenn sie einen anderen Produzenten gehabt hätte.", fr: "Le groupe aurait produit un meilleur album avec un autre producteur." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass das Land genug Nahrungsmittel produziert.", fr: "Il est essentiel que le pays produise assez de nourriture." },
      { de: "Ich will nicht, dass diese Chemikalie eine allergische Reaktion hervorruft.", fr: "Je ne veux pas que ce produit chimique produise une réaction allergique." },
      { de: "Damit wir qualitativ hochwertige Waren produzieren, müssen wir investieren.", fr: "Pour que nous produisions des biens de qualité, nous devons investir." }
    ]
  }
};
