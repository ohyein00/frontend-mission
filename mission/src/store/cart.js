const cartModule = {
  state: {
    cartList: [],
  },
  mutations: {
    addNewCartItem(state, cartItem) {
      state.cartList.push(cartItem);
    },
    increaseCartItem(state, ItemIndex) {
      state.cartList[ItemIndex].amount += 1;
    },
    decreaseCartItem(state, ItemIndex) {
      state.cartList[ItemIndex].amount -= 1;
      if (state.cartList[ItemIndex].amount < 1) { state.cartList[ItemIndex].amount = 1; }
    },
    removeCartList(state, cartItemIndex) {
      state.cartList.splice(cartItemIndex, 1);
    },
  },
  actions: {
    addCart({ commit }, product) {
      // getApi
      commit('addNewCartItem', product);
    },
    increaseCart({ commit }, ItemIndex) {
      commit('increaseCartItem', ItemIndex);
    },
    decreaseCart({ commit }, ItemIndex) {
      commit('decreaseCartItem', ItemIndex);
    },
    removeCart({ commit }, cartItemIndex) {
      commit('removeCartList', cartItemIndex); d;
    }
    ,
  },
};
export default cartModule;
