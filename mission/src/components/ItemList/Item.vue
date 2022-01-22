<template>
  <div class="item-area" data-test="item-component">
    <div class="img-area">
      <img :src="thumbNailUrl" :alt="title" data-test="item-thumbnail"/>
    </div>
    <div class="txt-area">
      <h5 class="item-title" data-test="item-title">{{ title }}</h5>
      <div class="price-wrap">
        <PriceArea
          :discount="discount"
          :price="price"
          size="small"
        />
        <div class="item-likes" data-test="item-likes">
      <span class="num">
        {{ likes }}
      </span>
          <font-awesome-icon icon="heart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PriceArea from '@/components/ItemList/PriceArea.vue';

library.add(faHeart);
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
    likes: {
      type: Number,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.price-area {
  margin: 5px 0
}

.item-title {
  font-size: 15px;
  line-height: 1.2;
}

.item-area {
  padding: 10px 5px 20px;

  .img-area {
    position: relative;
    width: 100%;
    padding-bottom:115%;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 5px;

    img {
      position:absolute;
      width:100%;
      height:100%;
      object-fit: cover;
      display: block;
      width: 100%;
    }
  }

  .price-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .item-likes{
      padding-bottom:5px;
      font-size:12px;
      .num{
        padding-right:4px;
        font-weight:500;
        font-size:13px;
      }
      svg{
        color : $red_1
      }
    }
  }
}
</style>
