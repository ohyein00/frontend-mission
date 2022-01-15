<template>
  <div id='item-info-page'>
    <div id="item-cover">
      <figure></figure>
    </div>
    <section class="seller-sec">
      <figure data-test="seller-icon"></figure>
      <p data-test="seller-name"></p>
      <div class="tag-area">
      <span data-test="seller-tag" v-for="(tag,i) in itemInfo.seller.tag" :key="i">
        {{ tag }}
      </span>
      </div>
    </section>
    <section class="item-info-sec">
      <h5 data-test="item-title">{{ itemInfo.title }}</h5>
      <div class="price">
        <p data-test="item-before-price"
           :class="itemInfo.discount>0 ? 'has_discount' : ''"
           class="before"
        >
          <span data-test="item-discount" v-if="itemInfo.discount>0">
            {{ itemInfo.discount }}%
          </span>
          {{ itemInfo.price }}원
        </p>
        <p data-test="item-after-price" v-if="itemInfo.discount>0" class="after">
          {{ itemPriceResult }}원</p>
      </div>
    </section>
    <section data-test="item-desc" class="item-desc-sec">
      <div v-html="itemInfo.desc.contents" class="desc-area">
      </div>
      <figure v-bind:style="{backgroundImage:`url(${itemInfo.desc.imgUrl})`}"></figure>
    </section>
    <section class="item-review-sec">
      <article data-test="item-review"
               v-for="(review,i) in itemInfo.reviews" :key="`review_${i}`" class="item-review">
        <div class="txt-area">
          <small data-test="item-review-name">{{ review.userName }}</small>
          <p data-test="item-review-text">{{ review.contents }}</p>
        </div>
        <div class="img-area">
          <img :src="review.photo" data-test="item-review-photo" alt="리뷰이미지">
        </div>
      </article>
    </section>
    <div class="cart-bar">
      <button>
        {{ itemPriceResult }}원
      </button>
      <button>장바구니</button>
      <button>구메하기</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      itemInfo: {
        id: 0,
        seller: {
          name: undefined,
          icon: undefined,
          tag: [],
        },
        title: undefined,
        price: undefined,
        discount: undefined,
        coverImgUrl: undefined,
        desc: {
          contents: undefined,
          imgUrl: undefined,
        },
        reviews: [{
          userName: undefined,
          text: undefined,
          photo: undefined,
        }],
      },
    };
  },
  created() {
    this.getItemInfo();
  },
  computed: {
    itemPriceResult() {
      const sum = this.itemInfo.price * ((100 - this.itemInfo.discount) / 100);
      return sum;
    },
  },
  methods: {
    getItemInfo() {
      // eslint-disable-next-line consistent-return
      axios.get('http://localhost:10004/itemInfo').then((response) => {
        // const itemData = response.data[0];
        this.itemInfo = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>

</style>
