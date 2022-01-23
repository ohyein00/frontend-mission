<template>
  <header>
    <h1 class="logo">
      <Logo/>
    </h1>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
  </header>
</template>

<script>
import Logo from '@/components/layouts/logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
};
</script>
<style lang="scss" scoped>
header{
  display:flex;
  align-items: center;
  height:50px;
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
