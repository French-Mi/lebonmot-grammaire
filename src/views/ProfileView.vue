<script setup lang="ts">
import { computed } from 'vue';
import { useUserProfileStore } from '@/stores/userProfileStore';
import { appRewards } from '@/data/rewards';
import type { Reward } from '@/data/rewards';
import { RouterLink } from 'vue-router';

const profileStore = useUserProfileStore();

// Holt die vollen Reward-Objekte für die freigeschalteten Avatare
const unlockedAvatarRewards = computed((): Reward[] => {
  const defaultAvatar: Reward = { id: 'avatar-default', name: 'Standard', description: 'Der Start-Avatar.', requiredLevels: 0, type: 'avatar', value: 'default.png' };

  const unlocked = appRewards.filter(reward => profileStore.unlockedAvatars.includes(reward.value));

  return [defaultAvatar, ...unlocked];
});

const handleAvatarSelect = (avatarValue: string) => {
  profileStore.selectAvatar(avatarValue);
};
</script>

<template>
  <div class="view-container">
    <RouterLink to="/" class="back-link">&larr; Zurück zur Hauptübersicht</RouterLink>
    <h1 class="main-title">Dein Profil & Belohnungen</h1>
    <p class="subtitle">Wähle einen Avatar, um dein Profil zu personalisieren.</p>

    <div class="rewards-grid">
      <div
        v-for="reward in unlockedAvatarRewards"
        :key="reward.id"
        class="reward-card"
        :class="{ 'selected': profileStore.selectedAvatar === reward.value }"
        @click="handleAvatarSelect(reward.value)"
      >
        <div class="avatar-image-wrapper">
          <img :src="`/avatars/${reward.value}`" :alt="reward.name" class="avatar-image" />
        </div>
        <div class="reward-info">
          <h3 class="reward-name">{{ reward.name }}</h3>
          <p class="reward-description">{{ reward.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-link { display: inline-block; margin-bottom: 1rem; font-weight: 500; }
.main-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--header-blue);
  margin-bottom: 0.5rem;
}
.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--muted-text);
  margin-bottom: 3rem;
}
.rewards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}
.reward-card {
  background-color: var(--card-background);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.reward-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  border-color: var(--primary-blue);
}
.reward-card.selected {
  border-color: var(--success-color);
  box-shadow: 0 0 15px rgba(25, 135, 84, 0.3);
}
.avatar-image-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  background-color: #f1f3f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden; /* Verhindert, dass das Bild über den Rand hinausragt */
}
.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Stellt sicher, dass das Bild den Kreis füllt */
  border-radius: 50%; /* KORREKTUR: Schneidet das Bild rund zu */
}
.reward-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.reward-description {
  font-size: 0.9rem;
  color: var(--muted-text);
}
</style>
