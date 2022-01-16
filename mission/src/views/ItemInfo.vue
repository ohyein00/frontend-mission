<template>
  <div id="wrapper">
    <div id='item-info-page'>
      <div class="page-head">
        <div id="item-cover">
          <div class="slide-container">
            <ul>
              <li v-for="(url,i) in itemInfo.coverImgUrl" :key="`img_${i}`"
                  v-bind="slide(event)"
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
          <div :class="checkDiscount(itemInfo.discount)" class="price-area">
            <p data-test="item-before-price" class="before-price">
          <span data-test="item-discount" class="rate">
            {{ itemInfo.discount }}<small>%</small>
          </span>
              <span class="price"><b>{{ itemInfo.price }}</b>원</span>
            </p>
            <p data-test="item-after-price" class="after-price">
              <b class="num">{{ itemPriceResult }}</b>원</p>
          </div>
        </section>
      </div>
      <div class="page-body">
        <section data-test="item-desc" class="item-desc-sec">
          <div class="desc-area">
            <div class="desc-frame" v-for="(desc,i) in itemInfo.desc.contents"
                 :key="`desc_${i}`">
              <div v-html="desc" class="desc"></div>
            </div>
          </div>
        </section>
        <section class="item-review-sec">
          <h5 class="sec-title">
            상품리뷰
          </h5>
          <article data-test="item-review"
                   v-for="(review,i) in itemInfo.reviews" :key="`review_${i}`" class="item-review">
            <div class="txt-area">
              <small data-test="item-review-name">작성자 : {{ review.userName }}</small>
              <p class="ttl">{{ review.title }}</p>
              <p data-test="item-review-text" class="contents">{{ review.text }}</p>
            </div>
            <div class="img-area">
              <img :src="review.photo" data-test="item-review-photo" alt="리뷰이미지">
            </div>
          </article>
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
  </div>
</template>
<script>
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

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
      // eslint-disable-next-line consistent-return
      axios.get('http://localhost:10004/itemInfo').then((response) => {
        // const itemData = response.data[0];
        this.itemInfo = response.data;
      })
        .then(() => {
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkDiscount(discount) {
      if (discount > 0) {
        return 'discount';
      }
      return 'no-discount';
    },

  },
  mounted() {
    this.$nextTick(() => {
    });
  },
};

</script>

<style lang="scss" scoped>
#wrapper {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  text-align: left;
}

.page-head {
  padding-bottom: 20px;
}

.page-foot {
  padding-bottom: 60px;
}

section {
  border-top: 1px solid #e7e7e7;
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
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7
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
    margin-top: 10px;

    .before-price {
      margin-bottom: 3px;
      font-size: 14px;

      .rate {
        color: #ea4949;
        font-weight: 500;
        margin-right: 5px;

        small {
          font-size: 12px;
        }
      }

      .price {
        text-decoration-line: line-through;
        color: #666
      }
    }

    .after-price {
      font-size: 24px;
      font-weight: 500;

      .num {
        font-size: 28px;
        font-weight: bold;
      }
    }
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
  .item-review {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 15px 12px;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    .img-area {
      flex-basis: 30%;
      flex-shrink: 0;

      img {
        border-radius: 10px;
        display: block;
        width: 100%;
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

/* checkDiscount */
.no-discount {
  .before-price {
    display: none;
  }
}

</style>
