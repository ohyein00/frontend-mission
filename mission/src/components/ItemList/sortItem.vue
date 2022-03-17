<template>
  <ul class="sort-ls">
    <li class="sort-item">Best</li>
    <li class="sort-item">Latest</li>
  </ul>
</template>
<style lang="scss">
.sort-ls{
  display:flex;
  align-items: center;
  .sort-item{
    position:relative;
    font-size:13px;
    color:#333;
    margin:0 10px;
  }
  .sort-item:first-child{
    color:$red_1;
    &:after{
      content:'';
      display:block;
      position:absolute;
      right:-8px;
      top:0px;
      width:5px;
      height:5px;
      background:$red_1;
      border-radius: 100%;
    }
  }
  .sort-item:last-child{
    margin-right:0;
  }
}
</style>
