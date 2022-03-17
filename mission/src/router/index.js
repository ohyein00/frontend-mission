import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import Cart from '@/views/CartList.vue';
import WishList from '@/views/WishList.vue';
import Mypage from '@/views/Mypage.vue';
import ItemInfo from '@/views/ItemInfo.vue';
import Order from '@/views/Order.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/wish',
    name: 'Wish',
    component: WishList,
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: '/item/:itemNo',
    name: 'item',
    component: ItemInfo,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
