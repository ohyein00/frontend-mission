import axios from 'axios';
import { ref } from 'vue';

const getItemData = (filterKey) => {
  const itemList = ref([]);
  axios.get('http://localhost:10000/itemInfo').then((response) => {
    const filterItems = response.data.map((item) => {
      const filterData = {};
      filterKey.forEach((keyName) => {
        filterData[keyName] = item[keyName];
      });
      return filterData;
    });
    itemList.value = filterItems;
  })
    .catch((error) => {
      console.log(error);
    });
  return { itemList };
};
export default getItemData;
