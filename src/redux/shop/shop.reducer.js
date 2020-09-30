import CartActionTypes from '../cart/cart.types';
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE) => {
  switch (CartActionTypes.type) {
    default:
      return state;
  }
};

export default shopReducer;