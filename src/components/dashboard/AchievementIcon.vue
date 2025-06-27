<script setup lang="ts">
import type { PropType } from 'vue';
import type { Achievement } from '@/data/achievements';

defineProps({
  achievement: {
    type: Object as PropType<Achievement>,
    required: true
  }
});
</script>

<template>
  <div class="achievement-container">
    <div class="achievement-icon">
      <i :class="achievement.icon" :style="{ color: achievement.inlineColor }"></i>
    </div>
    <div class="achievement-tooltip">
      <p class="font-bold">{{ achievement.title }}</p>
      <p class="text-xs">{{ achievement.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.achievement-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.achievement-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border: 2px solid #e5e7eb;
  transition: transform 0.2s;
}
.achievement-container:hover .achievement-icon {
    transform: scale(1.1);
}

.achievement-tooltip {
  visibility: hidden;
  width: 160px;
  background-color: #1f2937;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the icon */
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}
.achievement-tooltip::after { /* Tooltip arrow */
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #1f2937 transparent transparent transparent;
}
.achievement-container:hover .achievement-tooltip {
  visibility: visible;
  opacity: 1;
}

/* Hilfsklassen für Farben (werden aktuell nicht verwendet, aber gut für später) */
.text-yellow-400 { color: #facc15; }
.text-orange-500 { color: #f97316; }
.text-blue-500 { color: #3b82f6; }

.font-bold { font-weight: 700; margin-bottom: 4px; }
.text-xs { font-size: 0.75rem; }
</style>
