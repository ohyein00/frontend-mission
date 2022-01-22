<template>
  <div id='item-info-page'>
    <div class="page-head">
      <div id="item-cover">
        <div class="slide-container">
          <ul>
            <li v-for="(url,i) in itemInfo.coverImgUrl" :key="`img_${i}`"
                class='slide-item'>
              <figure v-bind:style="{backgroundImage:`url(${url})`}"/>
            </li>
          </ul>
        </div>
      </div>
      <section class="seller-sec">
        <figure data-test="seller-icon"
                v-bind:style="{backgroundImage:`url(${itemInfo.seller.icon})`}"/>
        <div class="txt-area">
          <p data-test="seller-name" class="seller-name">
            {{ itemInfo.seller.name }}
          </p>
          <div class="tag-area">
          <span data-test="seller-tag" v-for="(tag,i) in itemInfo.seller.tag" :key="i" class="tag">
            #{{ tag }}
          </span>
          </div>
        </div>
      </section>
      <section class="item-info-sec">
        <h3 data-test="item-title" class="item-title">{{ itemInfo.title }}</h3>
        <PriceArea
          :discount="itemInfo.discount"
          :price="itemInfo.price"
          size="medium"
        />
      </section>
    </div>
    <div class="page-body">
      <section data-test="item-desc" class="item-desc-sec">
        <div class="desc-area">
          <div class="desc-frame" v-for="(desc,i) in itemInfo.description.contents"
               :key="`desc_${i}`">
            <!-- HTML 출력 -->
            <div v-html="desc" class="desc"></div>
          </div>
        </div>
      </section>
      <section class="item-review-sec">
        <h5 class="sec-title">
          상품리뷰
        </h5>
        <template v-if="itemInfo.reviews">
          <article data-test="item-review"
                   v-for="(review,) in itemInfo.reviews"
                   :key="review"
                   class="item-review">
            <div class="txt-area">
              <small data-test="item-review-name">작성자 : {{ review.userName }}</small>
              <p class="ttl">{{ review.title }}</p>
              <p data-test="item-review-text" class="contents">{{ review.text }}</p>
            </div>
            <div class="img-area">
              <img v-if="review.photo" :src="review.photo" class="no-data"
                   data-test="item-review-photo" alt="리뷰이미지"/>
              <p v-else class="no-data">NO PHOTO</p>
            </div>
          </article>
        </template>
        <div v-else class="no-data"></div>
      </section>
    </div>
    <div class="page-foot">
      <div class="cart-bar">
        <p>
          <small>총 금액</small><br>
          <span class="num">{{ itemPriceResult }}</span>원
        </p>
        <div class="btn-area">
          <button>
            <font-awesome-icon icon="shopping-cart"/>
          </button>
          <button class="buy-button">구매하기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import PriceArea from '@/components/ItemList/PriceArea.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    PriceArea,
  },
  data() {
    return {
      itemNum: 0,
      itemInfo: {
        id: 0,
        seller: {
          name: '',
          icon: '',
          tag: [],
        },
        title: '',
        price: 0,
        discount: 0,
        coverImgUrl: '',
        description: {
          contents: '',
          imgUrl: '',
        },
        reviews: [{
          userName: '',
          text: '',
          photo: '',
        }],
      },
      slideNum: 0,
    };
  },
  created() {
    this.getItemData();
  },
  computed: {
    itemPriceResult() {
      const sum = this.itemInfo.price * ((100 - this.itemInfo.discount) / 100);
      return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    getItemData() {
      axios.get('http://localhost:10000/itemInfo').then((response) => {
        const {
          id, seller, title, price, discount, coverImgUrl, description, reviews,
        } = response.data[this.itemNum];
        this.itemInfo.id = id;
        this.itemInfo.seller = seller;
        this.itemInfo.title = title;
        this.itemInfo.price = price;
        this.itemInfo.discount = discount;
        this.itemInfo.coverImgUrl = coverImgUrl;
        this.itemInfo.description = description;
        this.itemInfo.reviews = reviews;
      }).catch((error) => {
        console.log(error);
      });
    },
    checkDiscount(discount) {
      if (discount > 0) {
        return true;
      }
      return false;
    },

  },
  mounted() {
  },
};

</script>

<style lang="scss" scoped>

.page-head {
  padding-bottom: 20px;
}

.page-foot {
  padding-bottom: 60px;
}

section {
  border-top: 1px solid $gray_1;
  padding: 15px 15px 0;
}

.sec-title {
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0 20px;
}

.slide-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  ul {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    li {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      figure {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
      }
    }
  }
}

.seller-sec {
  display: flex;
  align-items: center;
  padding: 15px 20px;

  figure {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-size: cover;
    background-color: $gray_1;
    border: 1px solid $gray_1
  }

  .txt-area {
    margin-left: 15px;

    .seller-name {
      font-size: 14px;
      font-weight: 500;
    }

    .tag-area {
      margin-top: 5px;
      margin-left: -2px;

      .tag {
        display: inline-block;
        border-radius: 12px;
        background: #efefef;
        padding: 5px 7px 6px;
        font-size: 11px;
        color: #333;
        margin-right: 7px;
      }
    }
  }
}

.item-info-sec {
  border-top: 0;
  padding-top: 5px;

  .item-title {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2;
    margin-left: -2px;
  }
  .price-area {
    margin:10px 0;
  }
}

.item-desc-sec {
  .desc-area {
    line-height: 1.4;

    .desc-frame {
      margin: 10px 0;
    }
  }
}

.item-review-sec {
  div.no-data {
    text-align: center;
    color: #666;
    padding: 20px 0;
    width: 100%;
  }

  .item-review {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 15px 12px;
    border-bottom: 1px solid $gray_1;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    .img-area {
      display: flex;
      align-items: center;
      flex-basis: 30%;
      flex-shrink: 0;
      background: #e7e7e7;
      border-radius: 15px;

      img {
        border-radius: 10px;
        display: block;
        width: 100%;
      }

      p {
        width: 100%;
        text-align: center;
        font-size: 12px;
      }
    }

    .txt-area {
      width: 70%;
      max-height: 100px;

      small {
        display: block;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 7px;
      }

      .ttl {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .contents {
        font-size: 14px;
        line-height: 1.2;
        padding-right: 15px;
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
      }
    }
  }
}

.cart-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  left: 0;
  bottom: 0;
  padding: 10px;
  border-top: 1px solid #dcdcdc;
  background: #fff;

  p {
    font-size: 16px;
    padding-left: 5px;
    line-height: 1.1;

    small {
      font-size: 14px;
    }

    .num {
      font-size: 26px;
      font-weight: bold;
    }
  }

  .btn-area {
    button {
      vertical-align: bottom;
      text-align: center;
      min-width: 45px;
      height: 45px;
      background: #fff;
      outline: none;
      border: 1px solid #dcdcdc;
      box-sizing: border-box;
      font-size: 20px;
      color: #848484;
      border-radius: 10px;
      margin-left: 10px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }

    .buy-button {
      color: #fff;
      background: #d53c3c;
      border: none;
      width: 40vw;
      font-size: 18px;
      font-weight: 500;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
  }
}

</style>
