<template>
  마이페이지

  <Navigation :name="this.$route.name"/>
</template>
<script>
import Navigation from '@/components/layouts/Navigation.vue';

export default {
  name: 'Mypage',
  components: {
    Navigation,
  },
};
</script>
