<template>
  <div class="item_area" data-test="item-component">

    <h5 data-test="item-title">{{title}}</h5>
    <img :src="thumbNailUrl" :alt="title" data-test="item-thumbnail"/>
    <p data-test="item-likes">{{likes}}</p>
    <p data-test="item-price">{{price}}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    title: {
      type: String,
    },
    thumbNailUrl: {
      type: String,
    },
    likes: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
};
</script>

<style>
</style>
