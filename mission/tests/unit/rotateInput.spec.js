import { shallowMount, mount } from '@vue/test-utils';
import RotateInput from '@/components/RotationInput.vue';
import AlertItem from '@/components/AlertItem.vue';

// test 1 : 입력한 데이터가 p태그 안에 동일하게 출력되야함
// test 2 : 버튼 클릭시 메소드 실행 후 글자 로테이트
// test 3 : Alert 버튼 클릭시 누른 횟수 카운트
// #1
test('Match data', () => {
  const txtData = '텍스트';
  const wrapper = shallowMount(RotateInput, {
    propsData: { initTxtData: txtData },
  });
  const resultTxt = wrapper.find('#resultTxt');
  const input = wrapper.find('input');
  expect(input.element.value).toBe(resultTxt.text());
});

// #2
test('버튼 클릭시 데이터 로테이션', async () => {
  const txtData = '텍스트';
  const wrapper = mount(RotateInput);
  await wrapper.find('button').trigger('click');
  const mixText = (data) => data.slice(1) + data.slice(0, 1);
  expect(mixText(txtData)).toBe('스트텍');
});

// #3
test('버튼 클릭횟수 카운트', async () => {
  let alertTimes = 0;
  const wrapper = mount(AlertItem);
  const btn = wrapper.find('button');
  await btn.trigger('click');
  alertTimes += 1;
  expect(alertTimes).toBe(1);
});
