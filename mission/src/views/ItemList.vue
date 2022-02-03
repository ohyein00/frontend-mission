<template>
  <Header></Header>
  <div id="item-list-page">
    <ul v-if="itemList" class="item-group">
      <li v-for="item in itemList"
          :key="item.title"
          class="item-frame">
        <ItemComponent
          :title="item.name"
          :thumbNailUrl="item.image"
          :likes="item.likes = 10"
          :price="item.price"
          :discount="discountRate(item.original_price, item.price)"
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
import Header from '@/components/layouts/Header.vue';
import Repository from '../repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');
export default {
  components: {
    Header,
    ItemComponent,
    Navigation,
  },
  data() {
    return {
      itemList: [],
    };
  },
  computed: {

  },
  created() {
    this.getPostUsername();
  },
  methods: {
    async getPostUsername() {
      const { data } = await ItemRepository.get();
      this.itemList = data.items;
    },
    discountRate(originalPrice, finalPrice) {
      const sum = ((originalPrice - finalPrice) / originalPrice) * 100;
      return parseInt(sum, 10);
    },
  },
  mounted() {
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
  padding-top: 50px;
  padding-bottom: 20px;
}

.item-group {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  .img-area{
    border:1px solid #efefef;
    box-sizing: border-box;
  }
  .item-frame {
    width: 50%;
  }
}
</style>
