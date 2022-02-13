<template>
  <Header></Header>
  <div id="item-list-page">
    <h3 class="page-ttl">장바구니</h3>
    <ul v-if="checkCartList()" class="cart-item-group">
      <li v-for="(item,index) in cartList"
          :key=" this.$store.state.cartModule.cartList[index].product_no"
          class="item-frame"
      >
        <CartItem
          :title="item.name"
          :cartListNum="index"
          :thumbNailUrl="item.image"
          :price="item.price"
          :originalPrice="item.original_price"
          :productNo="item.product_no"
          :quantityNum="item.amount"
          data-test="item-component"/>
      </li>
    </ul>
    <p v-else class="no-data">
      장바구니에 담긴 상품이 없습니다.
    </p>

    <div class="discount-price-area">
      할인된 금액 : <strong class="price"><span class="num">{{calcDiscountPrice()}}</span>원</strong>
    </div>
    <div class="total-price-area">
      총 금액 : <strong class="price"><span class="num">{{calcTotalPrice()}}</span>원</strong>
    </div>

    <div class="order-btn-area">
      <router-link to="/order" class="button size-full strong">
        결제하기
      </router-link>
    </div>
  </div>
  <Navigation/>
</template>

<script>
import CartItem from '@/components/Cart/CartItem.vue';
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';

export default {
  components: {
    Header,
    CartItem,
    Navigation,
  },
  data() {
    return {
      cartList: this.$store.state.cartModule.cartList,
      totalPrice: 0,
      discountPrice: 0,
    };
  },
  computed: {

  },
  methods: {
    checkCartList() {
      return this.$store.state.cartModule.cartList.length > 0;
    },
    calcTotalPrice() {
      this.totalPrice = 0;
      this.cartList.forEach((item) => {
        this.totalPrice += (item.price * item.amount);
      });
      return this.totalPrice.toLocaleString();
    },
    calcDiscountPrice() {
      this.discountPrice = 0;
      this.cartList.forEach((item) => {
        this.discountPrice += ((item.original_price - item.price) * item.amount);
      });
      return this.discountPrice.toLocaleString();
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
    margin-bottom:20px;
  }
}
.price-area {
  margin: 5px 0
}
.discount-price-area{
  text-align:right;
  margin-right:10px;
  font-size:14px;
}
.total-price-area{
  text-align:right;
  margin-top:10px;
  margin-right:10px;
  font-size:18px;
  .price{
    font-size:22px;
    color:$red_1
  }
  .num{
    font-size:24px;
    font-weight:500;

  }
}
.order-btn-area{
  margin-top:30px;
}

</style>
