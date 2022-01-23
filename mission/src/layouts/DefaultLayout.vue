<template>
  <div id="container">
    <Header></Header>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
};
</script>
<style>

#container {
  overflow: hidden;
  width: 100%;
}
</style>
