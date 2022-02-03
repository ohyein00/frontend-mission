<template>
  <div id="container">
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/layouts/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
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
