import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import cartModule from './cart';

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    cartModule,
  },

});
