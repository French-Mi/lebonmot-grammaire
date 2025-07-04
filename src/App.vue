<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import NotificationToast from './components/dashboard/NotificationToast.vue';

const isLoading = ref(true);
let timeoutId: number | null = null;

const endLoading = () => {
  if (isLoading.value) {
    isLoading.value = false;
    window.removeEventListener('keydown', endLoading);
    if (timeoutId) clearTimeout(timeoutId);
  }
};

onMounted(() => {
  timeoutId = window.setTimeout(endLoading, 1000);
  window.addEventListener('keydown', endLoading);
});

onUnmounted(() => {
  window.removeEventListener('keydown', endLoading);
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="logo-container">
      <svg class="loading-logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M85 22.0001C85 18.1341 81.866 15.0001 78 15.0001H22C18.134 15.0001 15 18.1341 15 22.0001V62.0001C15 65.8661 18.134 69.0001 22 69.0001H35V81.0001L50.5 69.0001H78C81.866 69.0001 85 65.8661 85 62.0001V22.0001Z" fill="white"></path><rect x="25" y="25.0001" width="16.6667" height="34" fill="#0055A4"></rect><rect x="41.6667" y="25.0001" width="16.6666" height="34" fill="white"></rect><rect x="58.3333" y="25.0001" width="16.6667" height="34" fill="#EF4135"></rect></svg>
      <div>
        <h1>le BonMot</h1>
        <p class="subtitle-trainer">Grammatiktrainer</p>
      </div>
    </div>
  </div>

  <div v-else class="app-layout">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="app-footer">
      <p>&copy; Miriam Betz, Alle Rechte vorbehalten.</p>
    </footer>
    <NotificationToast />
  </div>
</template>

<style scoped>
/* Stile für den Ladebildschirm (unverändert) */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--header-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.loading-screen .logo-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
}
.loading-screen .loading-logo-svg {
  width: 80px;
  height: 80px;
}
.loading-screen h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}
.loading-screen .subtitle-trainer {
  font-family: serif;
  font-style: italic;
  font-size: 1.5rem;
  text-align: right;
  margin-top: -0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

/* NEUE STILE FÜR DAS LAYOUT UND DEN FOOTER */
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
}
.main-content {
  flex-grow: 1; /* Wichtig, damit der Footer nach unten gedrückt wird */
}
.app-footer {
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: var(--card-background);
  border-top: 1px solid var(--border-color);
  color: var(--muted-text);
  font-size: 0.85rem;
  flex-shrink: 0; /* Verhindert, dass der Footer schrumpft */
}
</style>
