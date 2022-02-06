import ItemRepository from './ItemRepository';
import WishRepository from './WishRepository';
import CartRepository from './CartRepository';

const repositories = {
  item: ItemRepository,
  wish: WishRepository,
  cart: CartRepository,
};
export default {
  get: (name) => repositories[name],
};
