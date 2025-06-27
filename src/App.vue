<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import NotificationToast from './components/dashboard/NotificationToast.vue';
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <NotificationToast />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
}
.main-content {
  flex-grow: 1;
  padding: 2rem;
}
</style>
