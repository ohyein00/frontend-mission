import store from '@/store/index';

const addCart = (addItem) => {
  const addCartItemInfo = {
    product_no: addItem.product_no,
    name: addItem.name,
    image: addItem.image,
    price: addItem.price,
    original_price: addItem.original_price,
    description: addItem.description,
  };
  const alreadyItemIndex = store.state.cartModule.cartList
    .findIndex((storeItem) => storeItem.product_no === addCartItemInfo.product_no);
  if (alreadyItemIndex === -1) {
    store.dispatch('addCart', { ...addCartItemInfo, amount: 1 }).then(() => {
      alert('상품이 장바구니에 추가되었습니다.');
    });
  } else {
    store.dispatch('increaseCart', alreadyItemIndex).then(() => {
      alert('상품이 이미 담겨있어 수량이 추가되었습니다.');
    });
  }
};
export default addCart;
