import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
// eslint-disable-next-line import/order
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/order
import {
  faShoppingCart, faHome, faUser, faHeart,
} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faHome, faUser, faHeart);

const app = createApp(App);
app.use(store).use(router).mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
