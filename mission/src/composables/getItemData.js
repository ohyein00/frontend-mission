import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');
const WishRepository = Repository.get('wish');
const CartRepository = Repository.get('cart');

// 미션을 위한 itemList 추가
let dummyData;
axios.get('http://localhost:10000/items').then((res) => {
  dummyData = res.data;
});
// 상품리스트

export const axiosItemList = () => ItemRepository.get()
  .then((response) => response.data.items);

export const getItemList = () => {
  const itemList = ref('Loading');
  axiosItemList().then((data) => {
    data.push(...dummyData);
    itemList.value = data;
  }).catch(() => {
    itemList.value = '상품을 찾을 수 없습니다';
  });
  return { itemList };
};

// 상품 상세

export const axiosItemInfo = (itemNo) => ItemRepository.getInfo(itemNo)
  .then((response) => response.data.item);

export const getItemInfo = () => {
  const itemInfo = ref();
  const route = useRoute();
  axiosItemInfo(route.params.itemNo).then((res) => {
    itemInfo.value = res;
  });
  return { itemInfo };
};

// 찜 목록

export const axiosWishList = () => WishRepository.get()
  .then((response) => response.data.items);

export const getWishList = () => {
  const wishList = ref('Loading');
  axiosItemList().then((data) => {
    wishList.value = data;
  }).catch(() => {
    wishList.value = '상품을 찾을 수 없습니다';
  });
  return { wishList };
};

// 장바구니

export const axiosCartList = () => CartRepository.get()
  .then((response) => response.data.items);

export const getCartList = () => {
  const getServeCartItems = ref('Loading');
  axiosItemList().then((data) => {
    getServeCartItems.value = data;
  }).catch(() => {
    getServeCartItems.value = '상품을 찾을 수 없습니다';
  });
  return { getServeCartItems };
};
