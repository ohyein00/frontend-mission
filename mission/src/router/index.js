import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import Cart from '@/views/Cart.vue';
import WishList from '@/views/WishList.vue';
import Mypage from '@/views/Mypage.vue';
import ItemInfo from '@/views/ItemInfo.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
