import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';
import App from '@/App.vue';

let wrapper;
describe('layout', () => {
  beforeEach(() => {
    wrapper = mount(App);
  });

  it('renders header', () => {
    expect(wrapper.find('[data-test="header"]').exists()).toBe(true);
  });

  it('renders footer', () => {
    expect(wrapper.get('[data-test="footer"]').exists()).toBe(true);
  });
});
describe('ItemListPage', () => {
  const items = [
    {
      title: '아이템1',
      thumbNailUrl: 'root2',
      likes: 0,
      price: 1000,
    },
    {
      title: '아이템2',
      thumbNailUrl: 'root2',
      likes: 0,
      price: 2000,
    },
  ];

  beforeEach(() => {
    wrapper = mount(ItemListPage, {
      data() {
        return {
          items,
        };
      },
    });
  });

  it('redners ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('render an item length according to the number of data.', () => {
    const itemComponents = wrapper.findAll('[data-test="item-component"]');
    expect(itemComponents).toHaveLength(items.length);
  });

  /*
  item에서도 똑같이 테스트 하겠지만,
  list-page의 데이터가 컴포넌트에게 잘 전달되어 렌더되는지 확인하는 방법으로 기대했음
  */
  it('item has own the title, likes, thumbNail, price', () => {
    const ItemListItems = wrapper.findAll('[data-test="item-component"]');
    for (let i = 0; i < ItemListItems.length; i += 1) {
      const itemComponentImg = ItemListItems[i].find(['img']);
      expect(itemComponentImg.attributes().src).toEqual(items[i].thumbNailUrl);
      expect(ItemListItems[i].text()).toContain(items[i].title);
      expect(ItemListItems[i].text()).toContain(items[i].likes);
      expect(ItemListItems[i].text()).toContain(items[i].price);
    }
  });
});
