<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <RotationInput @sendTxt='receiveTxt' :init-txt-data='txtData'></RotationInput>
    <AlertItem ref='alert' :init-txt-data='txtData'></AlertItem>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import RotationInput from '@/components/RotationInput.vue';
import AlertItem from '@/components/AlertItem.vue';

export default {
  name: 'Home',
  components: {
    RotationInput,
    HelloWorld,
    AlertItem,
  },

  data() {
    return {
      txtData: '',
    };
  },
  methods: {
    receiveTxt(txt) {
      this.txtData = txt;
    },
  },
};
</script>
