import type { Verb } from '@/types/verb-types';

// Alle Verben importieren
import { accueillir } from './accueillir';
import { adopter } from './adopter';
import { agir } from './agir';
import { aider } from './aider';
import { aimer } from './aimer';
import { aller } from './aller';
import { appeler } from './appeler';
import { applaudir } from './applaudir';
import { apporter } from './apporter';
import { apprendre } from './apprendre';
import { associer } from './associer';
import { attendre } from './attendre';
import { attribuer } from './attribuer';
import { avoir } from './avoir';
import { battre } from './battre';
import { boire } from './boire';
import { chanter } from './chanter';
import { chercher } from './chercher';
import { choisir } from './choisir';
import { commencer } from './commencer';
import { connaitre } from './connaitre';
import { continuer } from './continuer';
import { controler } from './controler';
import { corriger } from './corriger';
import { courir } from './courir';
import { croire } from './croire';
import { danser } from './danser';
import { declarer } from './declarer';
import { decoder } from './decoder';
import { decouvrir } from './decouvrir';
import { demander } from './demander';
import { denoncer } from './denoncer';
import { depenser } from './depenser';
import { deranger } from './deranger';
import { descendre } from './descendre';
import { dessiner } from './dessiner';
import { developper } from './developper';
import { devenir } from './devenir';
import { devoir } from './devoir';
import { dire } from './dire';
import { disparaitre } from './disparaitre';
import { dormir } from './dormir';
import { echanger } from './echanger';
import { ecrire } from './ecrire';
import { empecher } from './empecher';
import { entendre } from './entendre';
import { entrer } from './entrer';
import { envoyer } from './envoyer';
import { esperer } from './esperer';
import { essayer } from './essayer';
import { etre } from './être';
import { expliquer } from './expliquer';
import { faire } from './faire';
import { falloir } from './falloir';
import { feter } from './feter';
import { finir } from './finir';
import { gagner } from './gagner';
import { garder } from './garder';
import { gouter } from './gouter';
import { hesiter } from './hesiter';
import { insister } from './insister';
import { installer } from './installer';
import { interroger } from './interroger';
import { jouer } from './jouer';
import { limiter } from './limiter';
import { lire } from './lire';
import { lutter } from './lutter';
import { marchander } from './marchander';
import { melanger } from './melanger';
import { mentir } from './mentir';
import { mettre } from './mettre';
import { moderniser } from './moderniser';
import { mourir } from './mourir';
import { nager } from './nager';
import { naitre } from './naitre';
import { nettoyer } from './nettoyer';
import { occuper } from './occuper';
import { offrir } from './offrir';
import { oser } from './oser';
import { ouvrir } from './ouvrir';
import { parler } from './parler';
import { partir } from './partir';
import { perdre } from './perdre';
import { permettre } from './permettre';
import { pleurer } from './pleurer';
import { pleuvoir } from './pleuvoir';
import { porter } from './porter';
import { pousser } from './pousser';
import { pouvoir } from './pouvoir';
import { prendre } from './prendre';
import { prevenir } from './prevenir';
import { produire } from './produire';
import { proposer } from './proposer';
import { prouver } from './prouver';
import { publier } from './publier';
import { raconter } from './raconter';
import { ranger } from './ranger';
import { rappeler } from './rappeler';
import { rater } from './rater';
import { reagir } from './reagir';
import { recevoir } from './recevoir';
import { rechercher } from './rechercher';
import { recompenser } from './recompenser';
import { rencontrer } from './rencontrer';
import { rendre } from './rendre';
import { rentrer } from './rentrer';
import { repondre } from './repondre';
import { representer } from './representer';
import { respirer } from './respirer';
import { reussir } from './reussir';
import { rever } from './rever';
import { rimer } from './rimer';
import { rigoler } from './rigoler';
import { rire } from './rire';
import { sAdapter } from './sAdapter';
import { sAmuser } from './sAmuser';
import { sAppeler } from './sAppeler';
import { sEntrainer } from './sEntrainer';
import { sInstaller } from './sInstaller';
import { sOccuper } from './sOccuper';
import { sauver } from './sauver';
import { savourer } from './savourer';
import { savoir } from './savoir';
import { seBaigner } from './seBaigner';
import { seBattre } from './seBattre';
import { seCoucher } from './seCoucher';
import { seLever } from './seLever';
import { seMaquiller } from './seMaquiller';
import { seMarier } from './seMarier';
import { seMoquer } from './seMoquer';
import { sePasser } from './sePasser';
import { sePlaindre } from './sePlaindre';
import { sePreparer } from './sePreparer';
import { sePromener } from './sePromener';
import { seRappeler } from './seRappeler';
import { seRefermer } from './seRefermer';
import { seRenseigner } from './seRenseigner';
import { seReposer } from './seReposer';
import { seRessembler } from './seRessembler';
import { seRetrouver } from './seRetrouver';
import { seReveiller } from './seReveiller';
import { seSeparer } from './seSeparer';
import { seSouvenir } from './seSouvenir';
import { seSpecialiser } from './seSpecialiser';
import { seTrouver } from './seTrouver';
import { seduire } from './seduire';
import { sentir } from './sentir';
import { siffler } from './siffler';
import { signaler } from './signaler';
import { sonner } from './sonner';
import { sortir } from './sortir';
import { soutenir } from './soutenir';
import { supporter } from './supporter';
import { surveiller } from './surveiller';
import { telecharger } from './telecharger';
import { tenir } from './tenir';
import { terminer } from './terminer';
import { tourner } from './tourner';
import { traverser } from './traverser';
import { vendre } from './vendre';
import { venir } from './venir';
import { vivre } from './vivre';
import { voir } from './voir';
import { voler } from './voler';
import { vouloir } from './vouloir';

// Alle importierten Verben in einem Array sammeln
const allVerbsList: Verb[] = [
  accueillir, adopter, agir, aider, aimer, aller, appeler, applaudir, apporter, apprendre, associer, attendre, attribuer, avoir,
  battre, boire, chanter, chercher, choisir, commencer, connaitre, continuer, controler, corriger, courir, croire,
  danser, declarer, decoder, decouvrir, demander, denoncer, depenser, deranger, descendre, dessiner, developper, devenir, devoir, dire, disparaitre, dormir,
  echanger, ecrire, empecher, entendre, entrer, envoyer, esperer, essayer, etre, expliquer,
  faire, falloir, feter, finir,
  gagner, garder, gouter,
  hesiter,
  insister, installer, interroger,
  jouer,
  limiter, lire, lutter,
  marchander, melanger, mentir, mettre, moderniser, mourir,
  nager, naitre, nettoyer,
  occuper, offrir, oser, ouvrir,
  parler, partir, perdre, permettre, pleurer, pleuvoir, porter, pousser, pouvoir, prendre, prevenir, produire, proposer, prouver, publier,
  raconter, ranger, rappeler, rater, reagir, recevoir, rechercher, recompenser, rencontrer, rendre, rentrer, repondre, representer, respirer, reussir, rever, rimer, rigoler, rire,
  sAdapter, sAmuser, sAppeler, sEntrainer, sInstaller, sOccuper,
  sauver, savourer, savoir,
  seBaigner, seBattre, seCoucher, seLever, seMaquiller, seMarier, seMoquer, sePasser, sePlaindre, sePreparer, sePromener, seRappeler, seRefermer, seRenseigner, seReposer, seRessembler, seRetrouver, seReveiller, seSeparer, seSouvenir, seSpecialiser, seTrouver,
  seduire, sentir,
  siffler, signaler, sonner, sortir, soutenir, supporter, surveiller,
  telecharger, tenir, terminer, tourner, traverser,
  vendre, venir, vivre, voir, voler, vouloir
];

// Funktion zur Bereinigung des Infinitivs für die Sortierung
const getSortableInfinitive = (verb: Verb): string => {
  const infinitive = verb.infinitive.toLowerCase();
  if (infinitive.startsWith("s'")) {
    return infinitive.substring(2);
  }
  if (infinitive.startsWith("se ")) {
    return infinitive.substring(3);
  }
  return infinitive;
};

// Verben alphabetisch sortieren
allVerbsList.sort((a, b) => {
  const infinitiveA = getSortableInfinitive(a);
  const infinitiveB = getSortableInfinitive(b);
  return infinitiveA.localeCompare(infinitiveB);
});

// Das finale, sortierte Objekt erstellen
export const allVerbData: { [key: string]: Verb } = {};
allVerbsList.forEach(verb => {
  allVerbData[verb.infinitive] = verb;
});
