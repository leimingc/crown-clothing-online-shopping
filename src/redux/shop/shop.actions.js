import collectionComponent from '../../pages/collection/collection.component';
import ShopActionTypes from './shop.types';

export const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
})