<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Mission></Mission>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Mission from '@/components/RotationInput.vue';

export default {
  name: 'Home',
  components: {
    Mission,
    HelloWorld,
  },
};
</script>
