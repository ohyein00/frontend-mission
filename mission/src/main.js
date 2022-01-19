import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';

const app = createApp(App);
app.use(store).use(router).mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
