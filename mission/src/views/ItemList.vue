<template>
  <div id="item-list-page">
    <ItemComponent v-for="item in items"
                   :title="item.title"
                   :thumbNailUrl="item.thumbNailUrl"
                   :likes="item.likes"
                   :price="item.price"
                   :key="item.title"
                   data-test="item-component"/>
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  components: {
    ItemComponent,
  },
  data() {
    return {
      items: {},
    };
  },
  mounted() {
    console.log(ItemComponent);
  },
};
</script>

<style>
</style>
