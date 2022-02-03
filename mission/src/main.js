import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faShoppingCart, faHome, faUser, faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';

library.add(faShoppingCart, faHome, faUser, faHeart);

const app = createApp(App);
app.use(store).use(router).mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
