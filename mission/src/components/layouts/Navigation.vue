<template>
  <div class="nav-wrapper">
    <nav class="nav-area">
      <ul class="nav-list">
        <li v-for="nav in navItems" :key="nav.name"
            @click="pushRouter(nav.path)"
            :class="{'is-active':name === nav.name}"
            class="nav-item">
          <div class="icon-area">
            <font-awesome-icon :icon="nav.icon"></font-awesome-icon>
          </div>
          <p>{{ nav.title }}</p>
        </li>

      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    name: {
      type: String,
      default: 'home',
    },
  },
  data() {
    return {
      navItems: [
        {
          name: 'Home',
          title: '홈',
          path: '/',
          icon: 'home',
        },
        {
          name: 'Wish',
          title: '찜 목록',
          path: 'wish',
          icon: 'heart',
        },
        {
          name: 'Cart',
          title: '장바구니',
          path: 'cart',
          icon: 'shopping-cart',
        },

        {
          name: 'Mypage',
          title: '마이페이지',
          path: 'mypage',
          icon: 'user',
        },
      ],
    };
  },
  methods: {
    pushRouter(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}

.nav-list {
  display: flex;
  align-items: stretch;
  border-top: 1px solid #e6e6e6;
  padding: 10px 0;
  background: #fff;

  .nav-item {
    flex: 1;
    text-align: center;
    color: #666;
    &.is-active{
      color:$red_1;
      font-weight:bold;
    }
    .icon-area {
      width: 100%;
      margin-bottom: 5px;

      svg {
        font-size: 18px;
      }
    }

    font-size: 13px;
  }
}
</style>
