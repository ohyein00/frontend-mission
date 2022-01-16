<template>
  <div class="slide-container">
    <ul>
      <li v-for="(url,i) in imgUrl" :key="`img_${i}`">
        <figure v-bind:style="{backgroundImage:`url(${url})`}"/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ItemInfoPage',
  props: {
    imgUrl: {
      type: Array,
    },
  },
  data() {
  },
};
</script>
<style lang="scss" scoped>
</style>
