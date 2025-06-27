// src/data/achievements.ts

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string; // Font Awesome Klasse
    inlineColor: string; // Direkte Farbangabe für das Icon
    // Die Bedingungs-Logik wird erweitert, um mehr Daten zu nutzen
    condition: (stats: {
        topicId: string,
        mistakes: number,
        isPerfect: boolean
    }, progress: {
        level: number,
        streak: number,
        topics: { [key: string]: { xp: number } }
    }) => boolean;
}

export const achievements: Achievement[] = [
    // Bestehende Erfolge
    {
        id: 'level_1_perfect',
        title: 'Perfekter Start',
        description: 'Schließe dein erstes Level ohne Fehler ab.',
        icon: 'fas fa-star',
        inlineColor: '#FFD700', // Gold
        condition: (stats, progress) => stats.isPerfect && progress.level >= 1
    },
    {
        id: 'streak_3_days',
        title: 'Dranbleiber',
        description: 'Lerne an 3 Tagen in Folge.',
        icon: 'fas fa-fire',
        inlineColor: '#FF4500', // Orangerot
        condition: (stats, progress) => progress.streak >= 3
    },
    {
        id: 'level_5_reached',
        title: 'Grammatik-Profi',
        description: 'Erreiche Level 5.',
        icon: 'fas fa-graduation-cap',
        inlineColor: '#4A90E2', // Blau
        condition: (stats, progress) => progress.level >= 5
    },

    // --- NEUE ERFOLGE ---
    {
        id: 'pronoun_novice',
        title: 'Pronomen-Kenner',
        description: 'Erreiche 250 XP im Thema Pronomen.',
        icon: 'fas fa-comments',
        inlineColor: '#3498db', // Helles Blau
        condition: (stats, progress) =>
            stats.topicId === 'pronouns' &&
            (progress.topics['pronouns']?.xp || 0) >= 250
    },
    {
        id: 'verb_initiate',
        title: 'Verben-Bändiger',
        description: 'Schließe deine erste Verben-Übung ab.',
        icon: 'fas fa-bolt',
        inlineColor: '#f1c40f', // Sonnenblumengelb
        condition: (stats, progress) => stats.topicId === 'verbs'
    },
    {
        id: 'streak_7_days',
        title: 'Lern-Woche',
        description: 'Lerne an 7 Tagen in Folge.',
        icon: 'fas fa-calendar-week',
        inlineColor: '#2ecc71', // Smaragdgrün
        condition: (stats, progress) => progress.streak >= 7
    },
    {
        id: 'flawless_victory',
        title: 'Fehlerfrei',
        description: 'Schließe 3 Übungen in Folge perfekt ab.',
        icon: 'fas fa-shield-halved',
        inlineColor: '#9b59b6', // Lila
        condition: (stats, progress) => {
            // Diese Logik ist komplexer und benötigt eine Speicherung der letzten Runden
            // Vorerst als Platzhalter:
            return false;
        }
    }
];
