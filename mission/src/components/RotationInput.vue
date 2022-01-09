<template>
  <div class="mission_wrap">
    <div class="input_area">
      <form>
        <label>
          <!-- v-bind로 할 경우 한글 마지막 글자가 출력이 안됨 -->
          <input
            :value="txtData"
            @input="txtData = $event.target.value"
            type="text"
            placeholder="텍스트를 입력해주세요"
          />
        </label>
        <button @click="mixText(txtData)" type="button">MIX</button>
      </form>
    </div>
    <p id="resultTxt">{{ txtData }}</p>
  </div>
</template>

<script>
export default {
  name: 'Mission',
  props: {
    initTxtData: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      txtData: this.initTxtData,
    };
  },
  methods: {
    mixText(data) {
      this.txtData = data.slice(1) + data.slice(0, 1);
    },
  },
};
</script>
