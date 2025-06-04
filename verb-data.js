// verb-data.js
window.allVerbData = {
    "parler": {
        infinitive: "parler",
        translation: "sprechen",
        verbGroup: 1,
        indicatif: {
            présent: {
                forms: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
                examples: [
                    { sentence: "Je ___ français avec mon ami.", placeholder: "___", pronounMap: "je" },
                    { sentence: "Tu ___ très bien anglais.", placeholder: "___", pronounMap: "tu" },
                    { sentence: "Le guide ___ aux touristes.", placeholder: "___", pronounMap: "il" },
                    { sentence: "Nous ___ au téléphone.", placeholder: "___", pronounMap: "nous" },
                    { sentence: "Vous ___ des langues étrangères ?", placeholder: "___", pronounMap: "vous" },
                    { sentence: "Mes parents ___ souvent de politique.", placeholder: "___", pronounMap: "ils" }
                ]
            },
            futur_proche: {
                forms: ["vais parler", "vas parler", "va parler", "allons parler", "allez parler", "vont parler"],
                examples: [
                    { sentence: "Ce soir, je ___ à mes parents.", placeholder: "___", pronounMap: "je"},
                    { sentence: "Elle ___ au professeur tout à l'heure.", placeholder: "___", pronounMap: "elle"}
                ]
            },
            futur_simple: {
                forms: ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
                examples: [
                    { sentence: "Demain, je ___ avec le directeur.", placeholder: "___", pronounMap: "je"},
                    { sentence: "La semaine prochaine, tu ___ en public.", placeholder: "___", pronounMap: "tu"},
                    { sentence: "Elle ___ plus tard.", placeholder: "___", pronounMap: "elle"}
                ]
            },
            imparfait: {
                forms: ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
                examples: [
                    { sentence: "Avant, je ___ souvent à ma grand-mère.", placeholder: "___", pronounMap: "je" },
                    { sentence: "À cette époque, on ___ moins au téléphone.", placeholder: "___", pronounMap: "on" }
                ]
            },
            passé_composé: {
                aux: "avoir", participle: "parlé",
                forms: ["ai parlé", "as parlé", "a parlé", "avons parlé", "avez parlé", "ont parlé"],
                examples: [
                     { sentence: "Hier, j'___ à Marie.", placeholder: "___", pronounMap: "je"},
                     { sentence: "La semaine dernière, nous ___ de ce projet.", placeholder: "___", pronounMap: "nous"}
                ]
            },
            plus_que_parfait: {
                aux: "avoir", participle: "parlé",
                forms: ["avais parlé", "avais parlé", "avait parlé", "avions parlé", "aviez parlé", "avaient parlé"],
                examples: [
                    { sentence: "J'___ déjà ___ quand il est arrivé.", placeholder: "___", pronounMap: "je"}
                ]
            },
            passé_simple: {
                forms: ["parlai", "parlas", "parla", "parlâmes", "parlâtes", "parlèrent"],
                examples: [
                    { sentence: "En 1990, il ___ pour la première fois de son plan.", placeholder: "___", pronounMap: "il"}
                ]
            },
        },
        subjonctif: {
            présent: {
                forms: ["parle", "parles", "parle", "parlions", "parliez", "parlent"],
                examples: [
                    { sentence: "Il faut que je ___ au médecin.", placeholder: "___", pronounMap: "je"},
                    { sentence: "Je voudrais que tu me ___ de tes vacances.", placeholder: "___", pronounMap: "tu"}
                ]
            },
        },
        conditionnel: {
            présent: {
                forms: ["parlerais", "parlerais", "parlerait", "parlerions", "parleriez", "parleraient"],
                examples: [
                    { sentence: "Si j'avais le temps, je te ___ plus longuement.", placeholder: "___", pronounMap: "je"}
                ]
            },
            passé: {
                aux: "avoir", participle: "parlé",
                forms: ["aurais parlé", "aurais parlé", "aurait parlé", "aurions parlé", "auriez parlé", "auraient parlé"],
                examples: [
                    { sentence: "Si j'avais su, j'___ ___ différemment.", placeholder: "___", pronounMap: "je"}
                ]
            },
        }
    },
    "être": {
        infinitive: "être",
        translation: "sein",
        verbGroup: 0,
        indicatif: {
            présent: {
                forms: ["suis", "es", "est", "sommes", "êtes", "sont"],
                examples: [
                    { sentence: "Je ___ fatigué.", placeholder: "___", pronounMap: "je" },
                    { sentence: "Tu ___ en retard.", placeholder: "___", pronounMap: "tu" },
                    { sentence: "Le chat ___ sur la table.", placeholder: "___", pronounMap: "il" },
                    { sentence: "Nous ___ contents de te voir.", placeholder: "___", pronounMap: "nous"},
                    { sentence: "Vous ___ prêts ?", placeholder: "___", pronounMap: "vous"},
                    { sentence: "Les clés ___ sur la commode.", placeholder: "___", pronounMap: "elles"}
                ]
            },
            futur_proche: {
                forms: ["vais être", "vas être", "va être", "allons être", "allez être", "vont être"],
                examples: [
                    { sentence: "Je ___ bientôt en vacances.", placeholder: "___", pronounMap: "je"},
                    { sentence: "Attention, tu ___ en retard !", placeholder: "___", pronounMap: "tu"}
                ]
            },
            futur_simple: {
                forms: ["serai", "seras", "sera", "serons", "serez", "seront"],
                examples: [
                    { sentence: "Demain, je ___ à la maison.", placeholder: "___", pronounMap: "je" },
                    { sentence: "L'année prochaine, elle ___ médecin.", placeholder: "___", pronounMap: "elle" }
                ]
            },
            imparfait: {
                forms: ["étais", "étais", "était", "étions", "étiez", "étaient"],
                examples: [
                    { sentence: "Quand j'étais petit, j'___ très sage.", placeholder: "___", pronounMap: "je" },
                    { sentence: "En 1900, la vie ___ très différente.", placeholder: "___", pronounMap: "elle" }
                ]
            },
            passé_composé: {
                aux: "avoir", participle: "été",
                forms: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
                examples: [
                    { sentence: "Hier, j'___ ___ malade.", placeholder: "___", pronounMap: "je" },
                    { sentence: "Nous ___ ___ surpris par la nouvelle.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            plus_que_parfait: {
                aux: "avoir", participle: "été",
                forms: ["avais été", "avais été", "avait été", "avions été", "aviez été", "avaient été"],
                examples: [
                    { sentence: "Il ___ déjà ___ là avant mon arrivée.", placeholder: "___", pronounMap: "il"}
                ]
            },
            passé_simple: {
                forms: ["fus", "fus", "fut", "fûmes", "fûtes", "furent"],
                examples: [
                    { sentence: "Ce ___ une soirée mémorable.", placeholder: "___", pronounMap: "il" }
                ]
            },
        },
        subjonctif: {
            présent: {
                forms: ["sois", "sois", "soit", "soyons", "soyez", "soient"],
                examples: [
                    { sentence: "Il est nécessaire que tu ___ à l'heure.", placeholder: "___", pronounMap: "tu" },
                    { sentence: "Je veux que vous ___ prudents.", placeholder: "___", pronounMap: "vous" }
                ]
            },
        },
        conditionnel: {
            présent: {
                forms: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
                examples: [
                    { sentence: "Si j'étais riche, je ___ heureux.", placeholder: "___", pronounMap: "je" }
                ]
            },
            passé: {
                aux: "avoir", participle: "été",
                forms: ["aurais été", "aurais été", "aurait été", "aurions été", "auriez été", "auraient été"],
                examples: [
                    { sentence: "J'___ ___ plus rapide si j'avais pris le train.", placeholder: "___", pronounMap: "je" }
                ]
            },
        }
    },
    "avoir": {
        infinitive: "avoir",
        translation: "haben",
        verbGroup: 0,
        indicatif: {
            présent: {
                forms: ["ai", "as", "a", "avons", "avez", "ont"],
                examples: [
                    { sentence: "J'___ faim.", placeholder: "___", pronounMap: "je" },
                    { sentence: "Elle ___ une belle voiture.", placeholder: "___", pronounMap: "elle" }
                ]
            },
            futur_proche: {
                forms: ["vais avoir", "vas avoir", "va avoir", "allons avoir", "allez avoir", "vont avoir"],
                examples: [
                    { sentence: "Nous ___ bientôt une surprise.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            futur_simple: {
                forms: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
                examples: [
                    { sentence: "Après-demain, j'___ un examen.", placeholder: "___", pronounMap: "je" }
                ]
            },
            imparfait: {
                forms: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
                examples: [
                    { sentence: "Quand tu étais jeune, tu ___ les cheveux longs.", placeholder: "___", pronounMap: "tu" }
                ]
            },
            passé_composé: {
                aux: "avoir", participle: "eu",
                forms: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
                examples: [
                    { sentence: "La semaine dernière, vous ___ ___ de la chance.", placeholder: "___", pronounMap: "vous" }
                ]
            },
            plus_que_parfait: {
                aux: "avoir", participle: "eu",
                forms: ["avais eu", "avais eu", "avait eu", "avions eu", "aviez eu", "avaient eu"],
                examples: [
                    { sentence: "Elles ___ déjà ___ la réponse.", placeholder: "___", pronounMap: "elles" }
                ]
            },
            passé_simple: {
                forms: ["eus", "eus", "eut", "eûmes", "eûtes", "eurent"],
                examples: [
                    { sentence: "Soudain, il ___ une idée géniale.", placeholder: "___", pronounMap: "il" }
                ]
            },
        },
        subjonctif: {
            présent: {
                forms: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
                examples: [
                    { sentence: "Il faut que j'___ le courage de le faire.", placeholder: "___", pronounMap: "je" }
                ]
            },
        },
        conditionnel: {
            présent: {
                forms: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
                examples: [
                    { sentence: "Si nous avions plus d'argent, nous ___ une grande maison.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            passé: {
                aux: "avoir", participle: "eu",
                forms: ["aurais eu", "aurais eu", "aurait eu", "aurions eu", "auriez eu", "auraient eu"],
                examples: [
                    { sentence: "Tu ___ ___ une meilleure note si tu avais étudié.", placeholder: "___", pronounMap: "tu" }
                ]
            },
        }
    },
    "aller": {
        infinitive: "aller",
        translation: "gehen",
        verbGroup: 0,
        indicatif: {
            présent: {
                forms: ["vais", "vas", "va", "allons", "allez", "vont"],
                examples: [
                    { sentence: "Je ___ au marché.", placeholder: "___", pronounMap: "je" },
                    { sentence: "Où ___-tu ?", placeholder: "___", pronounMap: "tu" }
                ]
            },
            futur_proche: {
                forms: ["vais aller", "vas aller", "va aller", "allons aller", "allez aller", "vont aller"],
                examples: [
                    { sentence: "Tout à l'heure, je ___ ___ faire les courses.", placeholder: "___", pronounMap: "je" }
                ]
            },
            futur_simple: {
                forms: ["irai", "iras", "ira", "irons", "irez", "iront"],
                examples: [
                    { sentence: "L'année prochaine, nous ___ en Italie.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            imparfait: {
                forms: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
                examples: [
                    { sentence: "Chaque été, j'___ à la plage.", placeholder: "___", pronounMap: "je" }
                ]
            },
            passé_composé: {
                aux: "être", participle: "allé",
                forms: ["suis allé", "es allé", "est allé", "sommes allés", "êtes allé", "sont allés"],
                examples: [
                    { sentence: "Hier, je ___ ___ au cinéma.", placeholder: "___", pronounMap: "je" }
                ]
            },
            plus_que_parfait: {
                aux: "être", participle: "allé",
                forms: ["étais allé", "étais allé", "était allé", "étions allés", "étiez allé", "étaient allés"],
                examples: [
                    { sentence: "Il ___ déjà ___ quand je suis arrivé.", placeholder: "___", pronounMap: "il" }
                ]
            },
            passé_simple: {
                forms: ["allai", "allas", "alla", "allâmes", "allâtes", "allèrent"],
                examples: [
                    { sentence: "Il ___ directement au but.", placeholder: "___", pronounMap: "il" }
                ]
            },
        },
        subjonctif: {
            présent: {
                forms: ["aille", "ailles", "aille", "allions", "alliez", "aillent"],
                examples: [
                    { sentence: "Il faut que nous ___ à la réunion.", placeholder: "___", pronounMap: "nous" }
                ]
            },
        },
        conditionnel: {
            présent: {
                forms: ["irais", "irais", "irait", "irions", "iriez", "iraient"],
                examples: [
                    { sentence: "Si je pouvais, j'___ avec toi.", placeholder: "___", pronounMap: "je" }
                ]
            },
            passé: {
                aux: "être", participle: "allé",
                forms: ["serais allé", "serais allé", "serait allé", "serions allés", "seriez allé", "seraient allés"],
                examples: [
                    { sentence: "Je ___ ___ te voir si j'avais su que tu étais là.", placeholder: "___", pronounMap: "je" }
                ]
            },
        }
    },
    "finir": {
        infinitive: "finir",
        translation: "beenden",
        verbGroup: 2,
        indicatif: {
            présent: {
                forms: ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
                examples: [
                    { sentence: "Je ___ mon travail.", placeholder: "___", pronounMap: "je" },
                    { sentence: "À quelle heure ___-vous ?", placeholder: "___", pronounMap: "vous" }
                ]
            },
            futur_proche: {
                forms: ["vais finir", "vas finir", "va finir", "allons finir", "allez finir", "vont finir"],
                examples: [
                    { sentence: "Je ___ ___ ce livre ce soir.", placeholder: "___", pronounMap: "je" }
                ]
            },
            futur_simple: {
                forms: ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
                examples: [
                    { sentence: "Tu ___ tes devoirs après-demain.", placeholder: "___", pronounMap: "tu" }
                ]
            },
            imparfait: {
                forms: ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
                examples: [
                    { sentence: "Il ___ toujours son assiette.", placeholder: "___", pronounMap: "il" }
                ]
            },
            passé_composé: {
                aux: "avoir", participle: "fini",
                forms: ["ai fini", "as fini", "a fini", "avons fini", "avez fini", "ont fini"],
                examples: [
                    { sentence: "J'___ ___ mon projet hier.", placeholder: "___", pronounMap: "je" }
                ]
            },
            plus_que_parfait: {
                aux: "avoir", participle: "fini",
                forms: ["avais fini", "avais fini", "avait fini", "avions fini", "aviez fini", "avaient fini"],
                examples: [
                    { sentence: "Nous ___ déjà ___ quand le film a commencé.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            passé_simple: {
                forms: ["finis", "finis", "finit", "finîmes", "finîtes", "finirent"],
                examples: [
                    { sentence: "Le héros ___ par vaincre son ennemi.", placeholder: "___", pronounMap: "il" }
                ]
            },
        },
        subjonctif: {
            présent: {
                forms: ["finisse", "finisses", "finisse", "finissions", "finissiez", "finissent"],
                examples: [
                    { sentence: "Il est important que vous ___ votre travail à temps.", placeholder: "___", pronounMap: "vous" }
                ]
            },
        },
        conditionnel: {
            présent: {
                forms: ["finirais", "finirais", "finirait", "finirions", "finiriez", "finiraient"],
                examples: [
                    { sentence: "Nous ___ plus vite si tu nous aidais.", placeholder: "___", pronounMap: "nous" }
                ]
            },
            passé: {
                aux: "avoir", participle: "fini",
                forms: ["aurais fini", "aurais fini", "aurait fini", "aurions fini", "auriez fini", "auraient fini"],
                examples: [
                    { sentence: "Elle ___ ___ son rapport si elle avait eu plus de temps.", placeholder: "___", pronounMap: "elle" }
                ]
            },
        }
    }
};
console.log("verb-data.js: allVerbData assigned to window object.", window.allVerbData);