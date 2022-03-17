<template>

  <Header></Header>
  <div id="order-page">
    <h3 class="page-ttl">주문목록</h3>
    <div class="order-list">
      <ul class="cart-item-group">
        <li v-for="(item,index) in cartList"
            :key=" this.$store.state.cartModule.cartList[index].product_no"
            class="item-frame"
        >
          <CartItem
            :title="item.name"
            :cartListNum="index"
            :thumbNailUrl="item.image"
            :price="calcTotalPrice(item.price,item.amount)"
            :originalPrice="calcTotalPrice(item.original_price,item.amount)"
            :productNo="item.product_no"
            :orderQuantity="item.amount"
            data-test="item-component"/>
        </li>
      </ul>
    </div>
    <h3 class="page-ttl">배송정보</h3>
    <form>
    </form>
  </div>
  <Navigation/>
</template>
<script>
import CartItem from '@/components/Cart/CartItem.vue';
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';

export default {
  components: {
    Navigation, Header, CartItem,
  },
  data() {
    return {
      cartList: this.$store.state.cartModule.cartList,
    };
  },
  methods: {
    calcTotalPrice(price, amount) {
      return price * amount;
    },
  },
};
</script>
<style lang="scss">
#order-page {
  min-height: 100vh;
  padding-top: 50px;
}
.order-list .item-frame{
  margin-bottom:10px;
}

</style>
