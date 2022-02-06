import { mount } from '@vue/test-utils';
import axios from 'axios';
import ItemListPage from '@/views/ItemList.vue';
import App from '@/App.vue';

let wrapper;
jest.mock('axios');

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
  const itemList = [
    {
      title: '아이템1',
      thumbNailUrl: 'root2',
      likes: 0,
      price: 1000,
      discount: 10,
    },
    {
      title: '아이템2',
      thumbNailUrl: 'root2',
      likes: 0,
      price: 2000,
      discount: 5,
    },
  ];

  beforeEach(() => {
    wrapper = mount(ItemListPage, {
      setup() {
        return {
          itemList,
        };
      },
    });
  });

  it('redners ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  it('render an item length according to the number of data.', () => {
    const itemComponents = wrapper.findAll('[data-test="item-component"]');
    expect(itemComponents).toHaveLength(itemList.length);
  });
  it('axios item', () => {
    const data = [{ item: 'shirt', likes: 10 }];
    const response = { items: data };
    axios.get.mockResolvedValue(response);
    axios.get('sss').then((res) => {
      console.log(res);
      expect(res.items).toEqual(data);
    });
  });
  /*  it('item has own the title, likes, thumbNail, price', () => {
      const ItemListItems = wrapper.findAll('[data-test="item-component"]');
      for (let i = 0; i < ItemListItems.length; i += 1) {
        const itemComponentImg = ItemListItems[i].find(['img']);
        expect(itemComponentImg.attributes().src).toEqual(itemList[i].thumbNailUrl);
        expect(ItemListItems[i].text()).toContain(itemList[i].title);
        expect(ItemListItems[i].text()).toContain(itemList[i].likes);
        expect(ItemListItems[i].text()).toContain(itemList[i].price);
      }
    }); */
});
