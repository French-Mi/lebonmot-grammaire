<script setup lang="ts">
import { computed } from 'vue';
import { useVerbTrainerStore } from '@/stores/verbTrainerStore';
import { allVerbData } from '@/data/verbs';
import { getTablePronouns, getFormattedTableConjugations, getTenseDisplayName, formatPronounForDisplay } from '@/lib/verb-helper';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';

const store = useVerbTrainerStore();

const selectedVerbsData = computed(() => {
  return store.selectedVerbs.map(verbKey => allVerbData[verbKey]).filter(Boolean);
});

const formatForSpeech = (pronoun: string, conjugation: string, tense: string): string => {
  const displayPronoun = formatPronounForDisplay(pronoun, conjugation);
  const cleanConjugation = conjugation.replace(/\(e\)?s?$/, '');
  let fullPhrase = '';

  if (tense.includes('subjonctif')) {
      const startsWithVowel = ['il', 'elle', 'on'].some(p => displayPronoun.startsWith(p));
      if (startsWithVowel) {
          fullPhrase = `qu'${displayPronoun} ${cleanConjugation}`;
      } else if (displayPronoun === "j'") {
          fullPhrase = `que ${displayPronoun}${cleanConjugation}`;
      } else {
          fullPhrase = `que ${displayPronoun} ${cleanConjugation}`;
      }
  } else {
      if (displayPronoun === "j'") {
        return `j'${cleanConjugation}`;
      }
      fullPhrase = `${displayPronoun} ${cleanConjugation}`;
  }
  return fullPhrase;
};
</script>

<template>
  <div class="view-container">
    <RouterLink to="/verb-trainer/select-mode" class="back-link">&larr; Zurück zur Modus-Auswahl</RouterLink>

    <div v-for="verb in selectedVerbsData" :key="verb.infinitive" class="verb-card card">
      <h2 class="verb-header">
        {{ verb.infinitive }}
        <SpeakerIcon :text-to-speak="verb.infinitive" />
        <span class="translation">({{ verb.translation }})</span>
      </h2>

      <div class="tense-tables-grid">
        <div v-for="tense in store.selectedTenses" :key="tense" class="tense-table">
          <h3>{{ getTenseDisplayName(tense) }}</h3>
          <ul>
            <li v-for="(pronoun, index) in getTablePronouns(tense)" :key="pronoun">
              <div class="pronoun-wrapper">
                <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                  {{ (pronoun.startsWith('il') || pronoun.startsWith('ils')) ? "qu'" : "que" }}
                </span>
                <span class="pronoun">{{ formatPronounForDisplay(pronoun, (getFormattedTableConjugations(verb, tense) || [])[index] || '') }}</span>
              </div>

              <div class="conjugation-wrapper">
                <span class="conjugation">{{ (getFormattedTableConjugations(verb, tense) || [])[index] }}</span>
                <SpeakerIcon
                  :text-to-speak="formatForSpeech(pronoun, (getFormattedTableConjugations(verb, tense) || [])[index] || '', tense)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container { max-width: 1200px; }
.back-link { display: inline-block; margin-bottom: 1.5rem; font-weight: 500; }
.verb-card { margin-bottom: 2rem; padding: 2rem; }
.verb-header { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; font-size: 2.5rem; margin-bottom: 2rem; border-bottom: 2px solid var(--primary-blue); padding-bottom: 1rem; }
.translation { font-size: 1.5rem; color: var(--muted-text); font-weight: 400; margin-left: 0.5rem; }
.tense-tables-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.tense-table h3 { font-size: 1.2rem; color: var(--primary-blue); margin-bottom: 1rem; }
.tense-table ul { list-style: none; padding: 0; margin: 0; font-size: 1.1rem; }

.tense-table li {
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color-light);
  align-items: center;
  gap: 1.5rem;
}

.pronoun-wrapper {
  display: flex;
  align-items: center;
  width: 120px;
  color: var(--muted-text);
  flex-shrink: 0;
  text-align: right;
  justify-content: flex-end;
}
.pronoun {
  padding-left: 0.25rem;
  font-weight: 500;
}
.subjunctive-prefix {
  margin-right: 0.1rem;
  font-weight: 400;
}

/* --- KORREKTUR DES STILS --- */
.conjugation-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* flex-grow und justify-content entfernt, damit die Elemente zusammenrücken */
}
.conjugation {
  font-weight: 500;
}
</style>
