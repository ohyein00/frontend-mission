<template>
  <Header></Header>
  <div id="item-list-page">
    <h3 class="page-ttl">찜 목록</h3>
    <div class="item-wrap">
      <ul v-if="typeof wishList === 'object'" class="item-group">
        <li v-for="item in wishList"
            :key="item.title"
            class="item-frame"
            @click="pushRouter(`/item/${item.product_no}`)"
        >
          <ItemComponent
            :title="item.name"
            :thumbNailUrl="item.image"
            :price="item.price"
            :originalPrice="item.original_price"
            data-test="item-component"/>
        </li>
      </ul>
      <p v-else-if="typeof wishList === 'string'" class="no-data">
        {{ wishList }}
      </p>
    </div>
  </div>

  <Navigation :name="this.$route.name"/>
</template>

<script>
import ItemComponent from '@/components/ItemList/Item.vue';
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';
import { getWishList } from '@/composables/getItemData';

export default {
  components: {
    Header,
    ItemComponent,
    Navigation,
  },
  setup() {
    return {
      ...getWishList(),
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
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 20px;
}

.item-group {
  display: flex;
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
