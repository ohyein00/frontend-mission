import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';
import PriceArea from '@/components/ItemList/PriceArea.vue';

let wrapper;
describe('ItemListItem', () => {
  const itemData = {
    title: '타이틀',
    thumbNailUrl: 'root',
    likes: 10,
    discount: 10,
    price: 10000,
  };
  beforeAll(() => {
    wrapper = mount(ItemListItem, {
      propsData: itemData,
    });
  });
  it('redners ItemListItem', () => {
    expect(wrapper.find('[data-test="item-component"]').exists()).toBe(true);
  });

  it('itemlistitem renders the props data', () => {
    const titleElement = wrapper.find('[data-test="item-title"]');
    const thumbnailElement = wrapper.find('[data-test="item-thumbnail"]');
    const likesElement = wrapper.find('[data-test="item-likes"]');
    const discountElement = wrapper.find('[data-test="item-discount"]');
    const priceElement = wrapper.find('[data-test="item-price"]');
    expect(titleElement.text()).toContain(itemData.title);
    expect(thumbnailElement.attributes().src).toEqual(itemData.thumbNailUrl);
    expect(likesElement.text()).toContain(itemData.likes);
    expect(discountElement.text()).toContain(itemData.discount);
    expect(priceElement.text()).toContain(itemData.price.toLocaleString());
  });
});

describe('item priceArea component', () => {
  const priceData = {
    discount: 50,
    price: 10000,
  };
  it('If discount is greater than 0, the discounted amount and discount rate', () => {
    wrapper = mount(PriceArea, {
      propsData: priceData,
    });
    const afterPriceElement = wrapper.find('[data-test="item-after-price"]');
    expect(afterPriceElement.text()).toContain('5,000');
  });
  it('If discount is 0, the discount rate and before price exist becomes false', () => {
    priceData.discount = 0;
    wrapper = mount(PriceArea, {
      propsData: priceData,
    });
    const afterPriceElement = wrapper.find('[data-test="item-after-price"]');
    const beforePriceElement = wrapper.find('[data-test="item-before-price"]');
    expect(afterPriceElement.text()).toContain('10,000');
    expect(beforePriceElement.exists()).toBeFalsy();
  });
});
