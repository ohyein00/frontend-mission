<template>
  <Header></Header>
  <div id="item-list-page">
    <ul v-if="itemList" class="item-group">
      <li v-for="item in itemList"
          :key="item.title"
          class="item-frame">
        <ItemComponent
           :title="item.title"
           :thumbNailUrl="item.thumbNailUrl"
           :likes="item.likes"
           :price="item.price"
           :discount="item.discount"
           data-test="item-component"/>
      </li>
    </ul>
    <div v-else class="no-data">
      상품을 찾을 수 없습니다.
    </div>
  </div>

  <Navigation/>
</template>

<script>
import ItemComponent from '@/components/ItemList/Item.vue';

import Navigation from '@/components/layouts/Navigation.vue';
import getItemRef from '@/composables/getItemRef';
import Header from '@/components/layouts/Header.vue';

export default {
  name: 'ItemListPage',
  components: {
    Header,
    ItemComponent,
    Navigation,
  },
  setup() {
    return {
      ...getItemRef(['title', 'price', 'discount', 'thumbNailUrl', 'likes']),

    };
  },
  methods: {},
  mounted() {
  },
};
</script>

<style lang="scss">
.no-data{
  text-align:center;
  font-size:14px;
  padding:20px;
}
#item-list-page{
  padding-top:50px;
  padding-bottom:20px;
}
  .item-group{
    display:flex;
    flex-wrap: wrap;
    padding:0 5px;
    .item-frame{
      width:50%;
    }
  }
</style>
