<template>
  <div id="item-list-page">
    <ul class="item-group">
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
  </div>

  <Navigation/>
</template>

<script>
import ItemComponent from '@/components/ItemList/Item.vue';
import getItemData from '@/composables/getItemData';

import Navigation from '@/components/layouts/Navigation.vue';

export default {
  name: 'ItemListPage',
  components: {
    ItemComponent,
    Navigation,
  },
  setup() {
    return {
      ...getItemData(['title', 'price', 'discount', 'thumbNailUrl', 'likes']),
    };
  },
  methods: {},
  mounted() {
  },
};
</script>

<style lang="scss">
#item-list-page{
  padding-bottom:60px;
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
