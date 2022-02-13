<template>
  <Header></Header>
  <div id="item-list-page">
    <div class="list-head flex-center">
    <h3 class="page-ttl">판매 상품</h3>
      <sort-item class="sort-wrap"></sort-item>
    </div>
    <div class="item-wrap">
      <div v-if="validationObject(itemList)" class="item-group flex-top">
        <div v-for="item in itemList"
             :key="item.title"
             class="item-frame"
        >
          <router-link :to="`/item/${item.product_no}`">
            <ItemComponent
              :title="item.name"
              :thumbNailUrl="item.image"
              :price="item.price"
              :productNo="item.product_no"
              :originalPrice="item.original_price"
              data-test="item-component"/>
          </router-link>
          <button @click="addCart(item.product_no)" class="cart-button">
            <font-awesome-icon icon="shopping-cart"/>
          </button>
        </div>
      </div>
      <p v-else class="no-data">
        {{ itemList }}
      </p>
    </div>
  </div>

  <Navigation :name="this.$route.name"/>
</template>

<script>
import { useStore } from 'vuex';
import ItemComponent from '@/components/ItemList/Item.vue';
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';
import { getItemList } from '@/composables/getItemData';
import SortItem from '@/components/ItemList/sortItem.vue';

export default {
  components: {
    SortItem,
    Header,
    ItemComponent,
    Navigation,
  },
  setup() {
    const store = useStore();
    const addCart = (productNo) => {
      const cartItem = { productNo, amount: 1 };
      const alreadyItemIndex = store.state.cartList
        .findIndex((item) => item.productNo === productNo);
      if (alreadyItemIndex === -1) {
        store.dispatch('addCart', cartItem);
      } else {
        store.dispatch('increaseCart', alreadyItemIndex);
        alert('상품이 이미 담겨있어 수량이 추가되었습니다.');
      }
    };
    const validationObject = (data) => typeof data === 'object';
    const { itemList } = getItemList();
    return {
      addCart,
      validationObject,
      itemList,
    };
  },
};
</script>

<style lang="scss">
#item-list-page {
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 20px;
}
.list-head{
  position:relative;
  justify-content: space-between;
  .sort-wrap{
    padding-right:10px;
    font-size:14px;
  }
}
.item-frame{
  position:relative;
}
.cart-button{
  position:absolute;
  top:calc(50vw - 10px);
  right:15px;
  transform:translateY(-100%);
  width:30px;
  height:30px;
  padding-right:8px;
  box-sizing: border-box;
  line-height:21 px;
  text-align:center;
  background:$red_1;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  opacity:.9;
  color:#fff;
  border-radius: 100%;
}
.item-group {
  flex-wrap: wrap;
  padding: 0 5px;

  .img-area {
    border: 1px solid #efefef;
    box-sizing: border-box;
  }

  .item-frame {
    width: 50%;
  }
}

</style>
