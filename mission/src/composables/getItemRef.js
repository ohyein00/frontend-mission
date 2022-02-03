import axios from 'axios';
import { ref } from 'vue';

export const mapData = (data, keys) => {
  const mapDataArray = data.map((item) => {
    const dataItem = {};
    keys.forEach((key) => {
      dataItem[key] = item[key];
    });
    return dataItem;
  });
  return mapDataArray;
};

export const axiosData = () => axios.get('http://localhost:10000/itemInfo')
  .then((response) => response.data).catch(() => 'error_message');

const getItemRef = (dataKey) => {
  const itemList = ref([]);
  axiosData().then((data) => {
    itemList.value = mapData(data, dataKey);
  });
  return { itemList };
};
export default getItemRef;
