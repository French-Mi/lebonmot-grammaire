<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProgressStore } from '@/stores/progressStore';
import { useDailySummaryStore } from '@/stores/dailySummaryStore';
import { useUserProfileStore } from '@/stores/userProfileStore';
import { appRewards } from '@/data/rewards';
import type { Reward } from '@/data/rewards';
import ProgressChart from '@/components/dashboard/ProgressChart.vue';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';
import AchievementIcon from '@/components/dashboard/AchievementIcon.vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const progressStore = useProgressStore();
const dailySummaryStore = useDailySummaryStore();
const profileStore = useUserProfileStore();

const showAvatarSelection = ref(false);

const unlockedAchievementsData = computed((): Achievement[] => {
  return progressStore.unlockedAchievements
    .map(id => achievements.find(a => a.id === id))
    .filter((a): a is Achievement => a !== undefined);
});

const allAvatarRewardsForDisplay = computed(() => {
  const defaultAvatar = { id: 'avatar-default', name: 'Standard', description: 'Der Start-Avatar.', requiredLevels: 0, type: 'avatar', value: 'default.png', isUnlocked: true };

  const allOtherAvatars = appRewards.map(reward => ({
    ...reward,
    isUnlocked: profileStore.unlockedAvatars.includes(reward.value)
  }));

  return [defaultAvatar, ...allOtherAvatars];
});

const handleAvatarSelect = (avatarValue: string) => {
  profileStore.selectAvatar(avatarValue);
  showAvatarSelection.value = false;
};

const downloadDailySummary = () => {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString('de-DE');
    doc.text(`Deine Lernübersicht vom ${today}`, 14, 15);
    // ... (restlicher PDF-Code bleibt unverändert)
}
</script>

<template>
    <div class="view-container">
        <h1>Dashboard</h1>
        <p class="subtitle">Willkommen zurück! Hier ist eine Übersicht deines Fortschritts.</p>

        <div class="dashboard-header">
            <div class="card chart-card">
                <h2>XP pro Tag (letzte 7 Tage)</h2>
                <ProgressChart :chart-data="progressStore.activityLog" time-frame="week" />
            </div>

            <div class="card avatar-card">
                <h2>Dein Avatar</h2>
                <div class="avatar-display" @click="showAvatarSelection = !showAvatarSelection" title="Avatar ändern">
                    <img :src="`/avatars/${profileStore.selectedAvatar}`" alt="Dein ausgewählter Avatar" class="avatar-image" />
                    <div class="edit-icon-wrapper">
                        <i class="fas fa-pen"></i>
                    </div>
                </div>
                <p class="avatar-hint">Klicke auf den Avatar, um einen neuen auszuwählen.</p>
            </div>
        </div>

        <div v-if="showAvatarSelection" class="avatar-selection-panel card">
            <h2>Wähle deinen Avatar</h2>
            <div class="rewards-grid">
              <div
                v-for="reward in allAvatarRewardsForDisplay"
                :key="reward.id"
                class="reward-card"
                :class="{
                  'selected': profileStore.selectedAvatar === reward.value,
                  'locked': !reward.isUnlocked
                }"
                @click="reward.isUnlocked ? handleAvatarSelect(reward.value) : null"
              >
                <span class="tooltip-text">
                  {{ reward.value === 'default.png' ? 'Dein Standard-Avatar' : (reward.isUnlocked ? `${reward.name} (freigeschaltet)` : `Wird freigeschaltet ab Level ${reward.requiredLevels}`) }}
                </span>
                <div class="avatar-image-wrapper">
                  <img :src="`/avatars/${reward.value}`" :alt="reward.name" class="reward-avatar-image" />
                </div>
                <span v-if="!reward.isUnlocked" class="lock-icon">
                    <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
        </div>

        <div class="bottom-row">
            <div class="card info-card">
                <h2>Erfolge</h2>
                <div v-if="unlockedAchievementsData.length > 0" class="achievements-grid">
                    <AchievementIcon v-for="achievement in unlockedAchievementsData" :key="achievement.id" :achievement="achievement"/>
                </div>
                <p v-else>Noch keine Erfolge freigeschaltet. Leg los!</p>
            </div>

            <div class="card info-card">
                <h2>Tagesübersicht</h2>
                <p>Lade eine PDF-Zusammenfassung aller heutigen Übungen herunter.</p>
                <button @click="downloadDailySummary" :disabled="!dailySummaryStore.hasSummaries" class="btn btn-primary">
                    Lernübersicht als PDF
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Allgemeine Styles bleiben gleich */
.subtitle { margin-top: -1rem; margin-bottom: 2rem; color: var(--muted-text); }
.card { padding: 1.5rem 2rem; }
.dashboard-header { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; align-items: flex-start; }
.avatar-card { text-align: center; }
.avatar-display { position: relative; width: 150px; height: 150px; margin: 1rem auto; cursor: pointer; }
.avatar-image { width: 100%; height: 100%; border-radius: 50%; border: 5px solid white; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out; }
.avatar-display:hover .avatar-image { transform: scale(1.05); }
.edit-icon-wrapper { position: absolute; bottom: 5px; right: 5px; background-color: var(--primary-blue); color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2); font-size: 0.9rem; transition: transform 0.2s; }
.avatar-display:hover .edit-icon-wrapper { transform: scale(1.1); }
.avatar-hint { font-size: 0.9rem; color: var(--muted-text); margin-top: 1rem; }
.avatar-selection-panel { margin-top: 2rem; }
.rewards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; margin-top: 1rem; }
.reward-card { position: relative; border-radius: 12px; border: 2px solid var(--border-color); padding: 0.75rem; text-align: center; cursor: pointer; transition: all 0.2s ease-in-out; display: flex; align-items: center; justify-content: center; aspect-ratio: 1 / 1; }
.reward-card:not(.locked):hover { transform: translateY(-5px); border-color: var(--primary-blue); }
.reward-card.selected { border-color: var(--success-color); box-shadow: 0 0 10px rgba(25, 135, 84, 0.3); }
.reward-card.locked { opacity: 0.5; cursor: not-allowed; filter: grayscale(80%); }

/* NEUE Tooltip-Styles */
.tooltip-text {
  visibility: hidden;
  width: max-content;
  max-width: 200px;
  background-color: #343a40;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 10;
  bottom: 110%; /* Positioniert den Tooltip über der Karte */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 0.85rem;
}
.reward-card:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.lock-icon { position: absolute; top: 5px; right: 5px; color: #343a40; font-size: 0.8rem; background-color: rgba(255, 255, 255, 0.7); padding: 0.3rem; border-radius: 50%; }
.avatar-image-wrapper { width: 100%; height: 100%; margin: 0; background-color: #f1f3f5; border-radius: 50%; padding: 0.5rem; }
.reward-avatar-image { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.bottom-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
.info-card { display: flex; flex-direction: column; }
.info-card p { flex-grow: 1; }
.achievements-grid { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; }
.btn-primary:disabled { background-color: var(--border-color); cursor: not-allowed; }

@media (max-width: 900px) {
    .dashboard-header, .bottom-row { grid-template-columns: 1fr; }
}
</style>
