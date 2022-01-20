<template>

  <Header data-test="header"/>
  <router-view />
  <Footer data-test="footer"/>
</template>

<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
