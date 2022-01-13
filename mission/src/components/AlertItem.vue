<template>
  <div class='alert_btn'>
    <button @click='[count(),alert()]' class='btn'>
      Alert
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlertItem',
  props: {
    initTxtData: {
      type: String,
      default: '없음',
    },
  },
  data() {
    return {
      alertTimes: 0,
    };
  },
  methods: {
    alert() {
      // eslint-disable-next-line no-alert
      alert(`입력된 데이터 : ${this.initTxtData === '' ? '없음' : this.initTxtData},\n 버튼을 누른 횟수 : ${this.alertTimes}`);
    },
    count() {
      this.alertTimes += 1;
    },
  },
};
</script>
