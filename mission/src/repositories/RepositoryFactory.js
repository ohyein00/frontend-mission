import ItemRepository from './ItemRepository';

const repositories = {
  item: ItemRepository,
};
export default {
  get: (name) => repositories[name],
};
