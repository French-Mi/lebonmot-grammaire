<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';
import { theoryData } from '@/data/theory-content';
import type { TheoryContent } from '@/data/theory-content';

const route = useRoute();
const topicId = computed(() => route.params.topicId as string);
const levelId = computed(() => route.params.levelId as string);

const content = computed<TheoryContent | null>(() => (theoryData as Record<string, TheoryContent>)[levelId.value] || null);
</script>

<template>
  <div class="view-container">
    <RouterLink :to="`/topic/${topicId}`" class="back-link">&larr; Zurück zur Level-Übersicht</RouterLink>

    <div v-if="content" class="theory-card card">
      <h1>{{ content.title }}</h1>
      <p class="intro-text" v-html="content.intro"></p>

      <div v-if="content.comparisonTable && content.comparisonTable.rows.length > 0" class="table-container">
        <table class="data-table rules-example-table">
          <thead>
            <tr>
              <th v-for="header in content.comparisonTable.headers" :key="header" v-html="header"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in content.comparisonTable.rows" :key="row.category">
              <td v-html="row.category"></td>
              <td v-for="value in row.values" :key="value" v-html="value"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="content.pronounTable" class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th v-for="header in content.pronounTable.headers" :key="header" v-html="header"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in content.pronounTable.rows" :key="row.pronoun">
              <td v-html="row.pronoun"></td>
              <td v-html="row.replaces"></td>
              <td>
                <div class="example-cell">
                  <span v-html="row.example.sentence"></span>
                  <SpeakerIcon :text-to-speak="row.example.speak" />
                </div>
                <div class="translation">{{ row.example.translation }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="content.dualTable" class="dual-table-container">
        <div class="table-half">
            <h4>{{ content.dualTable.left.title }}</h4>
            <p v-html="content.dualTable.left.rule"></p>
            <ul>
                <li v-for="item in content.dualTable.left.forms" :key="item.pronoun" v-html="`${item.pronoun} &rarr; ${item.meaning}`"></li>
            </ul>
        </div>
        <div class="table-half">
            <h4>{{ content.dualTable.right.title }}</h4>
            <p v-html="content.dualTable.right.rule"></p>
             <ul>
                <li v-for="item in content.dualTable.right.forms" :key="item.pronoun" v-html="`${item.pronoun} &rarr; ${item.meaning}`"></li>
            </ul>
        </div>
      </div>

      <p v-if="content.footnote" class="footnote" v-html="content.footnote"></p>

      <div v-if="content.positioningRules" class="rules-section">
        <h2>{{ content.positioningRules.title }}</h2>
        <ol>
          <li v-for="rule in content.positioningRules.rules" :key="rule" v-html="rule"></li>
        </ol>
      </div>

      <div v-if="content.orderChart" class="table-container order-chart-section">
        <h3 class="chart-title">Reihenfolge der Objektpronomen:</h3>
        <table class="pronoun-order-table">
            <thead>
                <tr>
                    <th v-for="header in content.orderChart.headers" :key="header" v-html="header"></th>
                </tr>
            </thead>
        </table>
      </div>

      <div class="start-exercise-container">
        <RouterLink :to="`/topic/${topicId}/level/${levelId}`" class="btn btn-start-exercise">
          Übungen starten
        </RouterLink>
      </div>
    </div>

    <div v-else class="card-placeholder">
        <h2>Theorie in Kürze verfügbar</h2>
        <p>Für dieses Level wird gerade eine Theorie-Seite vorbereitet.</p>
    </div>
  </div>
</template>

<style scoped>
.view-container { max-width: 900px; margin: 0 auto; }
.back-link { display: inline-block; margin-bottom: 1.5rem; font-weight: 500; color: var(--muted-text); }
.theory-card { padding: 2rem 2.5rem 1.5rem; }
h1 { font-size: 2.5rem; color: var(--header-blue); margin-bottom: 1rem; }
.intro-text { font-size: 1.1rem; line-height: 1.7; margin-bottom: 2.5rem; color: var(--dark-text); }
.table-container { margin-bottom: 2rem; }
.data-table, .pronoun-order-table { width: 100%; border-collapse: collapse; border: 1px solid #dee2e6; }
.data-table th, .data-table td, .pronoun-order-table th { padding: 0.85rem 1rem; border: 1px solid #dee2e6; text-align: left; vertical-align: top; }
.data-table thead, .pronoun-order-table thead { background-color: #f8f9fa; font-size: 1.1rem; }
.rules-example-table td:first-child { width: 40%; }
.example-cell { display: flex; align-items: center; gap: 0.5rem; }
.translation { font-size: 0.9rem; color: var(--muted-text); padding-top: 0.2rem; font-style: italic; }
.dual-table-container { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2rem; }
.table-half { flex: 1; padding: 1.5rem; border: 1px solid #dee2e6; border-radius: 8px; }
.table-half h4 { margin-top: 0; }
.table-half ul { list-style-type: none; padding-left: 0; }
.table-half li { margin-bottom: 0.5rem; }
.rules-section { margin: 2.5rem 0; padding: 1.5rem; background-color: #f8f9fa; border-radius: 8px; }
.rules-section h2 { margin-top: 0; margin-bottom: 1rem; }
.rules-section ol { padding-left: 20px; }
.rules-section li { margin-bottom: 0.5rem; line-height: 1.6; }
.order-chart-section { margin-top: 2.5rem; }
.chart-title { text-align: left; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 500;}
.pronoun-order-table th { text-align: center; font-weight: normal; vertical-align: middle; }
.footnote { font-size: 0.9rem; color: var(--muted-text); margin-top: 1.5rem; margin-bottom: 2rem; }
.card-placeholder { padding: 3rem; text-align: center; }
.start-exercise-container { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #e9ecef; text-align: center; }
.btn-start-exercise { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 8px; background-color: var(--primary-blue); color: white; font-size: 1.1rem; font-weight: 700; text-align: center; transition: all 0.2s; text-decoration: none; }
.btn-start-exercise:hover { transform: translateY(-2px); filter: brightness(1.1); }

@media (min-width: 768px) {
    .dual-table-container {
        flex-direction: row;
    }
}
</style>
