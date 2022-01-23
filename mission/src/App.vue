<template>

  <div id="wrapper">
    <MyLayout>
      <router-view/>
    </MyLayout>
    <Footer data-test="footer"/>
  </div>
</template>

<script>

import MyLayout from '@/layouts/MyLayout.vue';

export default {
  components: { MyLayout },
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
</style>
