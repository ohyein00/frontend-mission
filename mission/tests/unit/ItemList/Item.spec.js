import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

let wrapper;
describe('ItemListItem', () => {
  const itemData = {
    title: '타이틀',
    thumbNailUrl: 'root',
    likes: 10,
    price: 10,
  };
  beforeEach(() => {
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
    const priceElement = wrapper.find('[data-test="item-price"]');
    expect(titleElement.text()).toContain(itemData.title);
    expect(thumbnailElement.attributes().src).toEqual(itemData.thumbNailUrl);
    expect(likesElement.text()).toContain(itemData.likes);
    expect(priceElement.text()).toContain(itemData.price);
  });
});
