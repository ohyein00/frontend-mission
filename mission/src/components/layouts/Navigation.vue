<template>
  <div class="nav-wrapper">
    <nav class="nav-area">
      <ul class="nav-list">
        <li class="nav-item nav-home">
          <div class="icon-area">
            <font-awesome-icon icon="home"></font-awesome-icon></div>
          <p>홈</p>
        </li>
        <li class="nav-item nav-bars">
          <div class="icon-area">
            <font-awesome-icon icon="bars"></font-awesome-icon>
          </div>
          <p>카테고리</p>
        </li>
        <li class="nav-item nav-search">
          <div class="icon-area">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </div>
          <p>검색</p>
        </li>
        <li class="nav-item nav-user">
          <div class="icon-area">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </div>
          <p>마이페이지</p>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
.nav-wrapper{
  position: fixed;
  width:100%;
  bottom:0;
  left:0;
  right:0;
}
.nav-list{
  display:flex;
  align-items: stretch;
  border-top:1px solid #e6e6e6;
  padding:10px 0;
  background:#fff;
  .nav-item{
    flex:1;
    text-align:center;
    .icon-area{
      width:100%;
      margin-bottom:5px;
      svg{
        font-size:18px;
        color: #5a5353;
      }
    }
    font-size:14px;
  }
}
</style>
