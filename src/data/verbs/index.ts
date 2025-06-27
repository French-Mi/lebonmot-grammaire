// src/data/verbs/index.ts
import type { Verb } from '@/types/verb-types';

import { agir } from './agir';
import { aider } from './aider';
import { aimer } from './aimer';
import { aller } from './aller';
import { appeler } from './appeler';
import { applaudir } from './applaudir';
import { apporter } from './apporter';
import { apprendre } from './apprendre';
import { attendre } from './attendre';
import { avoir } from './avoir';
import { boire } from './boire';
import { chanter } from './chanter';
import { chercher } from './chercher';
import { choisir } from './choisir';
import { commencer } from './commencer';
import { connaitre } from './connaitre';
import { continuer } from './continuer';
import { corriger } from './corriger';
import { courir } from './courir';
import { danser } from './danser';
import { decouvrir } from './decouvrir';
import { demander } from './demander';
import { denoncer } from './denoncer';
import { depenser } from './depenser';
import { descendre } from './descendre';
import { dessiner } from './dessiner';
import { devoir } from './devoir';
import { dire } from './dire';
import { disparaitre } from './disparaitre';
import { dormir } from './dormir';
import { echanger } from './echanger';
import { ecrire } from './ecrire';
import { entendre } from './entendre';
import { entrer } from './entrer';
import { envoyer } from './envoyer';
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
import { jouer } from './jouer';
import { limiter } from './limiter';
import { lire } from './lire';
import { lutter } from './lutter';
import { mettre } from './mettre';
import { nager } from './nager';
import { offrir } from './offrir';
import { oser } from './oser';
import { ouvrir } from './ouvrir';
import { parler } from './parler';
import { partir } from './partir';
import { perdre } from './perdre';
import { pleuvoir } from './pleuvoir';
import { porter } from './porter';
import { pouvoir } from './pouvoir';
import { prendre } from './prendre';
import { prevenir } from './prevenir';
import { proposer } from './proposer';
import { raconter } from './raconter';
import { ranger } from './ranger';
import { rappeler } from './rappeler';
import { reagir } from './reagir';
import { rechercher } from './rechercher';
import { rencontrer } from './rencontrer';
import { rentrer } from './rentrer';
import { repondre } from './repondre';
import { reussir } from './reussir';
import { rever } from './rever';
import { rigoler } from './rigoler';
import { sAmuser } from './sAmuser';
import { sAppeler } from './sAppeler';
import { savoir } from './savoir';
import { seBaigner } from './seBaigner';
import { seCoucher } from './seCoucher';
import { sEntrainer } from './sEntrainer';
import { seLever } from './seLever';
import { seMaquiller } from './seMaquiller';
import { sePreparer } from './sePreparer';
import { sePromener } from './sePromener';
import { seRappeler } from './seRappeler';
import { seReposer } from './seReposer';
import { seRetrouver } from './seRetrouver';
import { seReveiller } from './seReveiller';
import { seSouvenir } from './seSouvenir';
import { seTrouver } from './seTrouver';
import { siffler } from './siffler';
import { signaler } from './signaler';
import { sonner } from './sonner';
import { sortir } from './sortir';
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

export const allVerbData: { [key: string]: Verb } = {
  "agir": agir, "aider": aider, "aimer": aimer, "aller": aller, "appeler": appeler, "applaudir": applaudir, "apporter": apporter, "apprendre": apprendre, "attendre": attendre, "avoir": avoir,
  "boire": boire, "chanter": chanter, "chercher": chercher, "choisir": choisir, "commencer": commencer, "connaître": connaitre, "continuer": continuer, "corriger": corriger, "courir": courir,
  "danser": danser, "découvrir": decouvrir, "demander": demander, "dénoncer": denoncer, "dépenser": depenser, "descendre": descendre, "dessiner": dessiner, "devoir": devoir, "dire": dire,
  "disparaître": disparaitre, "dormir": dormir, "échanger": echanger, "écrire": ecrire, "entendre": entendre, "entrer": entrer, "envoyer": envoyer, "essayer": essayer, "être": etre,
  "expliquer": expliquer, "faire": faire, "falloir": falloir, "fêter": feter, "finir": finir, "gagner": gagner, "garder": garder, "goûter": gouter, "hésiter": hesiter,
  "insister": insister, "installer": installer, "jouer": jouer, "limiter": limiter, "lire": lire, "lutter": lutter, "mettre": mettre, "nager": nager, "offrir": offrir,
  "oser": oser, "ouvrir": ouvrir, "parler": parler, "partir": partir, "perdre": perdre, "pleuvoir": pleuvoir, "porter": porter, "pouvoir": pouvoir, "prendre": prendre, "prévenir": prevenir,
  "proposer": proposer, "raconter": raconter, "ranger": ranger, "rappeler": rappeler, "réagir": reagir, "rechercher": rechercher, "rencontrer": rencontrer, "rentrer": rentrer,
  "répondre": repondre, "réussir": reussir, "rêver": rever, "rigoler": rigoler, "s'amuser": sAmuser, "s'appeler": sAppeler, "savoir": savoir, "se baigner": seBaigner, "se coucher": seCoucher, "s'entraîner": sEntrainer,
  "se lever": seLever, "se maquiller": seMaquiller, "se préparer": sePreparer, "se promener": sePromener, "se rappeler": seRappeler, "se reposer": seReposer, "se retrouver": seRetrouver,
  "se réveiller": seReveiller, "se souvenir": seSouvenir, "se trouver": seTrouver, "siffler": siffler, "signaler": signaler, "sonner": sonner, "sortir": sortir,
  "surveiller": surveiller, "télécharger": telecharger, "tenir": tenir, "terminer": terminer, "tourner": tourner, "traverser": traverser, "vendre": vendre, "venir": venir,
  "vivre": vivre, "voir": voir, "voler": voler, "vouloir": vouloir,
};
