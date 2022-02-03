<template>
  <DefaultLayout>
    <slot/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './DefaultLayout.vue';

export default {
  name: 'MyLayout',
  components: {
    DefaultLayout,
  },
};
</script>
