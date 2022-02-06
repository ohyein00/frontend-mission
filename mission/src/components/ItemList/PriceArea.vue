<template>
  <div :class="size" class="price-area">
    <p v-if="originalPrice"
       data-test="item-before-price" class="before-price">
              <span data-test="item-discount" class="rate">
                {{ priceDiscountRate(originalPrice,price) }}<small>%</small>
              </span>
      <span data-test="item-price" class="price"><b>{{ originalPrice }}</b>원</span>
    </p>
    <p data-test="item-after-price" class="after-price">
      <!-- 최종금액 -->
      <b class="num">{{ price }}</b>원</p>
  </div>
</template>

<script>
export default {
  name: 'PriceArea',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    price: {
      type: Number,
    },
    originalPrice: {
      type: Number,
    },
  },
  methods: {
    priceDiscountRate(originalPrice, finalPrice) {
      const sum = ((originalPrice - finalPrice) / originalPrice) * 100;
      return parseInt(sum, 10);
    },
  },
};
</script>
<style lang="scss" scoped>
.price-area {
  .before-price {
    margin-bottom: 3px;
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
    font-weight: 500;
  }

  .num {
    font-weight: bold;
  }

  &.small {
    .before-price {
      font-size: 12px;
    }

    .after-price {
      font-size: 14px;

      .num {
        font-size: 15px;
      }
    }
  }

  &.medium {
    .after-price {
      font-size: 22px;

      .num {
        font-size: 28px;
      }
    }
  }
}
</style>
