import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: [],
  },
  mutations: {
    addNewCartItem(state, cartItem) {
      state.cartList.push(cartItem);
    },
    increaseCartItem(state, alreadyItemIndex) {
      state.cartList[alreadyItemIndex].amount += 1;
    },
    removeCartList(state, cartItemIndex) {
      state.cartList.splice(cartItemIndex, 1);
    },
  },
  actions: {
    addCart({ commit }, product) {
      commit('addNewCartItem', product);
    },
    increaseCart({ commit }, alreadyItemIndex) {
      commit('increaseCartItem', alreadyItemIndex);
    },
    removeCar({ commit }, cartItemIndex) {
      commit('removeCartList', cartItemIndex);
    }
    ,
  },
  modules: {
  }
  ,
});
