// src/stores/appStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Notification {
    show: boolean;
    title: string;
    description: string;
    icon: string;
}

export const useAppStore = defineStore('app', () => {
    const notification = ref<Notification>({
        show: false,
        title: '',
        description: '',
        icon: ''
    });

    let timeoutId: number | undefined;

    function showNotification(config: { title: string, description: string, icon: string }) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        notification.value = { ...config, show: true };

        timeoutId = window.setTimeout(() => {
            hideNotification();
        }, 5000); // Nach 5 Sekunden ausblenden
    }

    function hideNotification() {
        notification.value.show = false;
    }

    return { notification, showNotification };
});
