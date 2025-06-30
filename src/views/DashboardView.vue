<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProgressStore } from '@/stores/progressStore';
import { useDailySummaryStore } from '@/stores/dailySummaryStore';
import ProgressChart from '@/components/dashboard/ProgressChart.vue';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';
import AchievementIcon from '@/components/dashboard/AchievementIcon.vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const progressStore = useProgressStore();
const dailySummaryStore = useDailySummaryStore();

// KORREKTUR: Die Liste der freigeschalteten Erfolge wird sicher gefiltert,
// um den 'undefined'-Fehler zu vermeiden.
const unlockedAchievementsData = computed(() => {
  return progressStore.unlockedAchievements
    .map(id => achievements.find(a => a.id === id))
    .filter((a): a is Achievement => a !== undefined);
});

const downloadDailySummary = () => {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString('de-DE');
    doc.text(`Deine Lernübersicht vom ${today}`, 14, 15);

    let finalY = 20;

    dailySummaryStore.summaries.forEach((summary, index) => {
        if (finalY > 220 || index > 0) {
            doc.addPage();
            finalY = 15;
        }

        doc.setFontSize(14);
        doc.text(summary.title, 14, finalY + 10);
        finalY += 10;

        const head = [['Frage', 'Deine Antwort', 'Korrektur']];
        const body = summary.results.map(res => {
            const correction = res.isCorrect ? 'Richtig' : res.correctAnswer;
            return [res.question, res.userInput, correction];
        });

        autoTable(doc, {
            head,
            body,
            startY: finalY + 5,
            headStyles: {
                fillColor: summary.topic === 'Verben' ? [52, 58, 64] : [74, 144, 226],
                textColor: [255, 255, 255]
            },
            didParseCell: (data) => {
                if (data.column.index === 2) {
                    if (data.cell.raw === 'Richtig') {
                        data.cell.styles.textColor = '#198754';
                        data.cell.styles.fontStyle = 'bold';
                    } else {
                        data.cell.styles.textColor = '#dc3545';
                    }
                }
            }
        });
        finalY = (doc as any).lastAutoTable.finalY;
    });

    doc.save(`lebonmot-lernuebersicht-${today}.pdf`);
}
</script>

<template>
    <div class="view-container">
        <h1>Dashboard</h1>
        <p class="subtitle">Willkommen zurück! Hier ist eine Übersicht deines Fortschritts.</p>

        <div class="dashboard-grid">
            <div class="card chart-card">
                <h2>XP pro Tag (letzte 7 Tage)</h2>
                <ProgressChart :chart-data="progressStore.activityLog" time-frame="week" />
            </div>
             <div class="card achievements-card">
                <h2>Erfolge</h2>
                <div v-if="unlockedAchievementsData.length > 0" class="achievements-grid">
                    <AchievementIcon
                        v-for="achievement in unlockedAchievementsData"
                        :key="achievement.id"
                        :achievement="achievement"
                    />
                </div>
                <p v-else>Noch keine Erfolge freigeschaltet. Leg los!</p>
            </div>

            <div class="card summary-card">
                <h2>Tagesübersicht</h2>
                <p>Lade eine PDF-Zusammenfassung aller heutigen Übungen herunter.</p>
                <button
                    @click="downloadDailySummary"
                    :disabled="!dailySummaryStore.hasSummaries"
                    class="btn btn-primary"
                >
                    Lernübersicht als PDF
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.subtitle {
    margin-top: -1rem;
    color: var(--muted-text);
}
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}
.card {
    padding: 1.5rem 2rem;
}
.chart-card {
    grid-column: 1 / -1;
}
.achievements-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}
.summary-card p {
    margin-bottom: 1.5rem;
}
.summary-card .btn-primary {
    width: 100%;
    padding: 0.8rem;
    font-size: 1.1rem;
}
.btn-primary:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
}
</style>
