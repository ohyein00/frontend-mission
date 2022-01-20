<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <RotationInput @sendTxt='receiveTxt' :init-txt-data='txtData'></RotationInput>
    <AlertItem :init-txt-data='txtData'></AlertItem>
  </div>
</template>

<script>
import HelloWorld from '@/components/tutorial/HelloWorld.vue';
import RotationInput from '@/components/tutorial/RotationInput.vue';
import AlertItem from '@/components/tutorial/AlertItem.vue';

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
