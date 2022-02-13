<template>
  <Header></Header>
  <div id="item-list-page">
    <h3 class="page-ttl">장바구니</h3>
    <ul v-if="typeof cartList === 'object'" class="cart-item-group">
      <li v-for="item in cartList"
          :key="item.title"
          class="item-frame"
      >
        <CartItem
          :title="item.name"
          :thumbNailUrl="item.image"
          :price="item.price"
          :originalPrice="item.original_price"

          :productNo="item.product_no"
          data-test="item-component"/>
      </li>
    </ul>
    <p v-else-if="typeof cartList === 'string'" class="no-data">
      {{ cartList }}
    </p>
  </div>
  <Navigation :name="this.$route.name"/>
</template>

<script>
import CartItem from '@/components/Cart/CartItem.vue';
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';
import { getCartList } from '@/composables/getItemData';

export default {
  components: {
    Header,
    CartItem,
    Navigation,
  },
  setup() {
    return {
      ...getCartList(),
    };
  },
  methods: {
    pushRouter(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
.no-data {
  text-align: center;
  font-size: 14px;
  padding: 20px;
}

#item-list-page {
  min-height:100vh;
  padding-top: 50px;
  padding-bottom: 20px;
}

.cart-item-group {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  .img-area{
    border:1px solid #efefef;
    box-sizing: border-box;
  }
  .item-frame {
    width: 100%;
  }
}
.price-area {
  margin: 5px 0
}

</style>
