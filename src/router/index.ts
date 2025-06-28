// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- Hauptseiten ---
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },

    // --- Grammatik-Übungen ---
    {
        path: '/topic/:topicId',
        name: 'topic',
        component: () => import('../views/TopicView.vue')
    },
    {
        path: '/topic/:topicId/exercise/:levelId',
        name: 'exercise',
        component: () => import('../views/ExerciseView.vue')
    },
    // NEUE ROUTE FÜR THEORIE-SEITEN
    {
      path: '/topic/:topicId/theory/:levelId',
      name: 'theory',
      component: () => import('../views/TheoryView.vue')
    },

    // --- Verben-Trainer (vollständige Routen wiederhergestellt) ---
    {
      path: '/verb-trainer',
      name: 'verb-config',
      component: () => import('../views/VerbConfigView.vue')
    },
    {
      path: '/verb-trainer/select-verbs',
      name: 'verb-selection',
      component: () => import('../views/VerbSelectionView.vue')
    },
    {
      path: '/verb-trainer/select-mode',
      name: 'verb-mode-selection',
      component: () => import('../views/VerbModeSelectionView.vue')
    },
    {
      path: '/verb-trainer/training',
      name: 'verb-training',
      component: () => import('../views/VerbTrainingView.vue')
    },
    {
      path: '/verb-trainer/table',
      name: 'verb-table-view',
      component: () => import('../views/VerbTableView.vue')
    }
  ]
});

export default router;
