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
    <div class="quantity-area">
      <button type="button" class="basic size-ss">-</button>
      <input :value="quantity" type="number"/>
      <button type="button" class="basic size-ss">+</button>
    </div>
    <div class="btn-area">
      <button><font-awesome-icon icon="trash"></font-awesome-icon></button>
    </div>
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
      default: 1,
    },
  },
  data() {
    return {
      quantity: this.$props.quantityNum,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cart-item-area{
  display:flex;
  align-items: center;
  justify-content: space-between;
  border:1px solid #efefef;
  padding:10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
  .item-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight:500;
    line-height: 1.2;
  }

  .img-area{
    flex:1.1;
    border:none;
    img{
      width:100%;
    }
  }
  .txt-area{
    flex:1.5;
    padding-left:10px;
  }
  .quantity-area{
    flex:0.8;
    display:flex;
    button{
      font-size:18px;
      display:flex;
      align-items: center;
      justify-content: center;

    }
    input{
      width:25px;
      padding:2px;
      border-left:none;
      border-right:none;
      text-align:center;
    }
  }
  .btn-area{
    flex:0.4;
    padding:0 0 0 15px;
    button{
      background:none;
      font-size:18px;
      color:#999;
      border:none;
      outline: none;

    }
  }
}
</style>
