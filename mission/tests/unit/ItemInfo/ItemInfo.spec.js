import { mount } from '@vue/test-utils';

import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  const wrapper = mount(ItemInfoPage);
  it('redners ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
  it('redners item cover img', () => {
    expect(wrapper.find('#item-cover').exists()).toBe(true);
  });
  it('redners seller data ,item info, item description', async () => {
    await wrapper.vm.$nextTick();
    const sellerIcon = wrapper.get('[data-test="seller-icon"]');
    const sellerName = wrapper.get('[data-test="seller-name"]');
    const itemTitle = wrapper.get('[data-test="item-title"]');
    const itemPrice = wrapper.get('[data-test="item-before-price"]');
    const itemDesc = wrapper.get('[data-test="item-desc"]');
    expect(sellerIcon.exists()).toBe(true);
    expect(sellerName.exists()).toBe(true);
    expect(itemTitle.exists()).toBe(true);
    expect(itemPrice.exists()).toBe(true);
    expect(itemDesc.exists()).toBe(true);
  });
  it('판매자 태그 정보가 존재하면 배열의 갯수만큼 태그가 출력됨', async () => {
    await wrapper.setData({ itemInfo: { seller: { tag: ['test1', 'test2', 'test3'] } } });
    const sellerTag = wrapper.findAll('[data-test="seller-tag"]');
    expect(sellerTag).toHaveLength(3);
  });
  it('discount 수치가 0이상이면 할인율과 할인된 가격이 표시됨', async () => {
    const price = 10000;
    const discount = 10;
    await wrapper.setData({ itemInfo: { discount, price } });
    expect(wrapper.text()).toContain('10%');
    expect(wrapper.text()).toContain('9000원');
  });
  it('리뷰가 존재하면 배열의 갯수만큼 리뷰가 출력됨', async () => {
    await wrapper.setData({
      itemInfo: {
        reviews: [{
          userName: undefined,
          contents: undefined,
          photo: undefined,
        }],
      },
    });
    const review = wrapper.findAll('[data-test="item-review"]');
    const reviewName = wrapper.findAll('[data-test="item-review-name"]');
    const reviewPhoto = wrapper.findAll('[data-test="item-review-photo"]');
    const reviewText = wrapper.findAll('[data-test="item-review-text"]');
    expect(review).toHaveLength(1);
    expect(reviewName).toHaveLength(1);
    expect(reviewPhoto).toHaveLength(1);
    expect(reviewText).toHaveLength(1);
  });
});
