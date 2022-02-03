<template>
  <footer>
    <p>Footer</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style scoped>
footer {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px;
  background: #efefef;
  font-size: 12px;
}

.nav-wrapper ~ footer {
  margin-bottom: 57px;
}
</style>
