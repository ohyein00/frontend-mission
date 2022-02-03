<template>
  <header :class="{scrollTop : scrollHasTop}">
    <h1 class="logo">
      <Logo/>
    </h1>
  </header>
</template>

<script>
import { computed } from 'vue';
import Logo from '@/components/layouts/logo.vue';
import getScroll from '@/composables/getScroll';

export default {
  name: 'Header',
  components: {
    Logo,
  },
  setup() {
    const { scrollValue } = getScroll();
    const scrollHasTop = computed(() => {
      if (scrollValue.value < 40) {
        return true;
      }
      return false;
    });
    return {
      scrollHasTop, scrollValue,
    };
  },
};
</script>
<style lang="scss" scoped>
header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 1000;
  background:#fff;
  display:flex;
  align-items: center;
  height:50px;
  transform:translate3d(0,-100%,0);
  transition:transform 0.3s ease-in-out;
  &.scrollTop{
    transform:translate3d(0,0,0);
  }
}
.logo{
  margin:0 auto;
  text-align:center;
  svg{
    width:60px;
    height:30px;
  }
}

</style>
