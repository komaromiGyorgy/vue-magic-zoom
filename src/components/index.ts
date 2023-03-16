import type { App } from 'vue';
import MagicZoom from './MagicZoom.vue';

export default {
    install: (app: App) => {
        app.component('MagicZoom', MagicZoom);
    },
};

export { MagicZoom };
