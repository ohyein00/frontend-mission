import { shallowMount, mount } from '@vue/test-utils';
import Mission from '@/components/RotationInput.vue';

// test 1 : 입력한 데이터가 p태그 안에 동일하게 출력되야함
// test 2 : 버튼 클릭시 메소드 실행 후 글자 로테이트

const txtData = '텍스트';
const wrapper = shallowMount(Mission, {
  propsData: { initTxtData: txtData },
});
const resultTxt = wrapper.find('#resultTxt');
const input = wrapper.find('input');

// #1
test('Match data', () => {
  expect(input.element.value).toBe(resultTxt.text());
});

// #2
test('버튼 클릭시 데이터 로테이션', async () => {
  await wrapper.find('button').trigger('click');
  expect(resultTxt.text()).toBe('스트텍');
});
