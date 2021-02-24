import { createApp } from 'vue';
import App from './app/App.vue';
import router from "./app/router";
import store from './app/store';

createApp(App).use(router).use(store).mount('#app');
