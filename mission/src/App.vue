<template>

  <div id="wrapper">
    <Header data-test="header"/>
    <div id="container">
      <router-view/>
    </div>
    <Footer data-test="footer"/>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart, faHome, faUser, faSearch, faBars,
} from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

library.add(faShoppingCart, faHome, faUser, faSearch, faBars);

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#wrapper {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100%;
  text-align: left;
  color: #333;
}
#container{
  overflow:hidden;
  width:100%;
}
</style>
