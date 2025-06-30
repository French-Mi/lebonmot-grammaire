<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';
import { theoryData } from '@/data/theory-content';
import type { TheoryContent } from '@/data/theory-content';

const route = useRoute();
const topicId = computed(() => route.params.topicId as string);
const levelId = computed(() => route.params.levelId as string);

const content = computed((): TheoryContent | null => {
    return theoryData[levelId.value] || null;
});
</script>

<template>
  <div class="view-container">
    <RouterLink :to="`/topic/${topicId}`" class="back-link">&larr; Zurück zur Level-Übersicht</RouterLink>

    <div v-if="content" class="theory-card card">
      <h1>{{ content.title }}</h1>
      <p class="intro-text">{{ content.intro }}</p>

      <div v-if="content.comparisonTable" class="unified-view">
        <div class="comparison-table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th v-for="header in content.comparisonTable.headers" :key="header" v-html="header"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in content.comparisonTable.rows" :key="row.category">
                        <td><strong>{{ row.category }}</strong></td>
                        <td v-for="(value, index) in row.values" :key="index" v-html="value"></td>
                    </tr>
                    <tr v-if="content.comparisonTable.examples">
                        <td><strong>Beispiele</strong></td>
                        <td v-for="(exampleSet, index) in content.comparisonTable.examples" :key="index">
                            <div v-for="example in exampleSet" :key="example.sentence" class="example-block">
                                <p class="example-sentence">
                                    <span v-html="example.sentence"></span>
                                    <SpeakerIcon :text-to-speak="example.speak" />
                                </p>
                                <p class="translation" v-html="example.translation"></p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 v-if="content.summary" class="section-title">MERKE</h2>
        <div v-if="content.summary" class="summary-box">
            <ul>
                <li v-for="item in content.summary" :key="item.term">
                    <strong>{{ item.term }}</strong>
                    <span>{{ item.definition }}</span>
                </li>
            </ul>
        </div>
      </div>

      <div v-if="content.pronounTable" class="unified-view">
        <div class="comparison-table-container">
            <table class="comparison-table">
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
                            <p class="example-sentence">
                                <span v-html="row.example.sentence"></span>
                                <SpeakerIcon :text-to-speak="row.example.speak" />
                            </p>
                            <p class="translation" v-if="row.example.translation" v-html="row.example.translation"></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p v-if="content.footnote" class="footnote" v-html="content.footnote"></p>
      </div>

      <div v-if="content.dualTable" class="dual-table-container">
        <div v-for="(tableData, key) in content.dualTable" :key="key" class="dual-table-card">
            <h3 v-html="tableData.title"></h3>
            <p class="dual-table-rule" v-html="tableData.rule"></p>
            <table class="forms-table">
                <tbody>
                    <tr v-for="form in tableData.forms" :key="form.pronoun">
                        <td class="pronoun-col" v-html="form.pronoun"></td>
                        <td v-html="form.meaning"></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

      <div v-if="content.positioningRules" class="positioning-rules">
        <h2 class="section-title">{{ content.positioningRules.title }}</h2>
        <ol class="rules-list">
            <li v-for="rule in content.positioningRules.rules" :key="rule" v-html="rule"></li>
        </ol>
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
.theory-card { padding: 2rem 2rem 1.5rem; }
h1 { font-size: 2.5rem; color: var(--header-blue); margin-bottom: 1rem; }
.intro-text { font-size: 1.1rem; line-height: 1.7; margin-bottom: 2.5rem; color: var(--dark-text); }
.comparison-table-container { overflow-x: auto; }
.comparison-table { width: 100%; border-collapse: collapse; border: 2px solid #dee2e6; }
.comparison-table th, .comparison-table td { padding: 0.85rem 1rem; border: 1px solid #dee2e6; text-align: left; vertical-align: top; }
.comparison-table thead { background-color: #f8f9fa; font-size: 1.1rem; }
.comparison-table th:first-child, .comparison-table td:first-child { font-weight: 700; background-color: #f8f9fa; width: auto; }
.comparison-table td:not(:first-child) { font-size: 1rem; }
.comparison-table :deep(code), .comparison-table :deep(strong) { background-color: transparent; padding: 0; font-weight: 700; }
.example-block { margin-bottom: 1rem; }
.example-block:last-child { margin-bottom: 0; }
.example-sentence { display: flex; align-items: center; gap: 0.5rem; }
.translation { font-size: 0.9rem; color: var(--muted-text); padding-top: 0.2rem; font-style: italic; }
.section-title { margin-top: 3rem; margin-bottom: 1rem; font-size: 1.5rem; color: var(--dark-text); }
.summary-box { border: 2px solid var(--error-color); border-radius: 8px; padding: 1.5rem; background-color: #fff5f5; }
.summary-box ul { list-style: none; padding-left: 0; margin: 0; }
.summary-box li { font-size: 1.1rem; margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.75rem; }
.summary-box li::before { content: '•'; color: var(--error-color); font-weight: bold; line-height: 1.5; }
.summary-box li:last-child { margin-bottom: 0; }
.summary-box strong { font-weight: 700; flex-basis: 80px; flex-shrink: 0; text-align: right; }
.footnote { margin-top: 1rem; font-size: 0.9rem; color: var(--muted-text); }
.footnote :deep(strong) { font-weight: 700; background-color: transparent; padding: 0; }
.positioning-rules {
    margin-top: 2.5rem;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}
.rules-list {
    padding-left: 1.5rem;
    margin: 0;
}
.rules-list li {
    margin-bottom: 1rem;
    line-height: 1.6;
}
.rules-list li:last-child {
    margin-bottom: 0;
}
.dual-table-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
}
.dual-table-card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
}
.dual-table-card h3 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}
.dual-table-card .dual-table-rule {
    text-align: center;
    font-size: 0.95rem;
    color: var(--muted-text);
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
}
.forms-table {
    width: 100%;
    border-collapse: collapse;
}
.forms-table td {
    padding: 0.6rem;
    border: 1px solid #e9ecef;
}
.forms-table .pronoun-col {
    font-weight: 700;
    width: 45%;
}
.card-placeholder { padding: 3rem; text-align: center; border-radius: 8px; background-color: #f8f9fa; }
.card-placeholder h2 { color: var(--header-blue); }
.card-placeholder p { color: var(--muted-text); }
.start-exercise-container { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #e9ecef; text-align: center; }
.btn-start-exercise { display: inline-block; padding: 0.8rem 2.5rem; border-radius: 8px; background-color: var(--primary-blue); color: white; font-size: 1.1rem; font-weight: 700; cursor: pointer; text-align: center; transition: all 0.2s; text-decoration: none; }
.btn-start-exercise:hover { transform: translateY(-2px); filter: brightness(1.1); }
</style>
