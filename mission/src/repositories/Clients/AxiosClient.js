import axios from 'axios';

const baseDomain = 'http://localhost:10000/';
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {
    Authorization: 'abcd1234',
  },
});
