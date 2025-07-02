<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUserProfileStore } from '@/stores/userProfileStore';

const profileStore = useUserProfileStore();
</script>

<template>
  <header class="app-header">
    <div class="header-content">
      <RouterLink to="/" class="logo-link">
        <div class="logo">
          <div class="speech-bubble-body">
            <div class="flag-icon">
              <div class="flag-blue"></div>
              <div class="flag-white"></div>
              <div class="flag-red"></div>
            </div>
          </div>
          <div class="speech-bubble-tail"></div>
        </div>
        <span class="logo-text">le BonMot</span>
      </RouterLink>

      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">Grammatik</RouterLink>
        <RouterLink to="/verb-trainer" class="nav-link">Verben</RouterLink>
        <RouterLink to="/dashboard" class="nav-link profile-link" title="Dein Dashboard">
          <img :src="`/avatars/${profileStore.selectedAvatar}`" alt="Avatar" class="user-avatar-icon" />
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: var(--primary-blue);
  color: white;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: white;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}
.nav-link:hover,
.nav-link.router-link-exact-active {
  border-bottom-color: white;
}
.profile-link:hover .user-avatar-icon {
    transform: scale(1.1);
}

.user-avatar-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f8f9fa;
  border: 1px solid rgba(255, 255, 255, 0.5);
  object-fit: contain;
  padding: 2px;
  transition: transform 0.2s ease-in-out;
}

/* Logo Styles */
.logo { position: relative; width: 40px; height: 40px; }
.speech-bubble-body { width: 100%; height: 30px; background-color: white; border-radius: 10px; position: relative; z-index: 2; }
.speech-bubble-tail { position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-top: 10px solid white; z-index: 1; }
.flag-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 28px; height: 18px; display: flex; border-radius: 1px; overflow: hidden; }
.flag-blue { background-color: #0055A4; flex: 1; }
.flag-white { background-color: #FFFFFF; flex: 1; }
.flag-red { background-color: #EF4135; flex: 1; }
</style>
