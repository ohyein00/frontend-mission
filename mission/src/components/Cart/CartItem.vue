<template>
  <div class="cart-item-area" data-test="item-component">
    <div class="img-area">
      <router-link :to="`/item/${productNo}`" tag="a">
        <img :src="thumbNailUrl" :alt="title" data-test="item-thumbnail"/>
      </router-link>
    </div>
    <div class="txt-area">
      <h5 class="item-title" data-test="item-title">{{ title }}</h5>
      <div class="price-wrap">
        <PriceArea
          :originalPrice="originalPrice"
          :price="price"
          size="cart"
        />
      </div>
    </div>
    <template v-if="quantityNum">
      <div v-if="quantityNum" class="quantity-area">
        <button type="button" @click="decreaseQuantity" class="button basic size-ss">-</button>
        <label>
          <input v-model="quantity" type="number"/>
        </label>
        <button type="button" @click="increaseQuantity" class="button basic size-ss">+</button>
      </div>
      <div class="btn-area">
        <button @click="removeCartItem">
          <font-awesome-icon icon="trash"></font-awesome-icon>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import PriceArea from '@/components/ItemList/PriceArea.vue';

export default {
  name: 'ItemListItem',
  components: {
    PriceArea,
  },
  props: {
    title: {
      type: String,
    },
    thumbNailUrl: {
      type: String,
    },
    productNo: {
      type: String,
    },
    price: {
      type: Number,
    },
    originalPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    quantityNum: {
      type: Number,
    },
    cartListNum: {
      type: Number,
    },
  },
  data() {
    return {
      quantity: this.$props.quantityNum,
    };
  },
  methods: {
    increaseQuantity() {
      this.$store.dispatch('increaseCart', this.$props.cartListNum);
      this.quantity = this.$store.state.cartModule.cartList[this.$props.cartListNum].amount;
    },
    decreaseQuantity() {
      this.$store.dispatch('decreaseCart', this.$props.cartListNum);
      this.quantity = this.$store.state.cartModule.cartList[this.$props.cartListNum].amount;
    },
    removeCartItem() {
      this.$store.dispatch('removeCart', this.$props.cartListNum);
    },
  },
};
</script>

<style lang="scss" scoped>

.cart-item-area {
  display: flex;
  align-items: center;
  border: 1px solid #efefef;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .item-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    white-space: break-spaces;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 40px;
  }

  .img-area {
    border: none;
    width:80px;
    img {
      width: 100%;
    }
  }

  .txt-area {
    flex:2;
    padding: 0 10px;
  }

  .quantity-area {
    flex: 0.8;
    display: flex;

    button {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    input {
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      padding: 2px;
      border-left: none;
      border-right: none;
      text-align: center;
    }
  }

  .btn-area {
    flex: 0.4;
    padding: 0 0 0 15px;

    button {
      background: none;
      font-size: 18px;
      color: #999;
      border: none;
      outline: none;

    }
  }
}
</style>
