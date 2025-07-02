import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Reward } from '@/data/rewards';

export const useUserProfileStore = defineStore('userProfile', () => {
  const unlockedAvatars = ref<string[]>(['default.png']);
  const selectedAvatar = ref<string>('default.png');

  // Lade den Zustand aus dem LocalStorage
  const savedState = localStorage.getItem('leBonMotUserProfile');
  if (savedState) {
    const state = JSON.parse(savedState);
    unlockedAvatars.value = state.unlockedAvatars || ['default.png'];
    selectedAvatar.value = state.selectedAvatar || 'default.png';
  }

  // Speichere den Zustand bei jeder Änderung
  watch([unlockedAvatars, selectedAvatar], (newState) => {
    localStorage.setItem('leBonMotUserProfile', JSON.stringify({
      unlockedAvatars: newState[0],
      selectedAvatar: newState[1]
    }));
  }, { deep: true });

  function unlockReward(reward: Reward) {
    if (reward.type === 'avatar' && !unlockedAvatars.value.includes(reward.value)) {
      unlockedAvatars.value.push(reward.value);
    }
  }

  function selectAvatar(avatarValue: string) {
    if (unlockedAvatars.value.includes(avatarValue)) {
      selectedAvatar.value = avatarValue;
    }
  }

  return { unlockedAvatars, selectedAvatar, unlockReward, selectAvatar };
});
