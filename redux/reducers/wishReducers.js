/* eslint-disable import/prefer-default-export */
import {
  WISH_ADD_ITEM,
  WISH_REMOVE_ITEM,
  WISH_SAVE_SHIPPING_ADDRESS,
  WISH_SAVE_PAYMENT_METHOD,
  WISH_EMPTY,
  WISH_ADD_ITEM_FAIL,
} from '../constants/wishConstants';

const initialState = {
  wishItems:[], shippingAddress:{}, paymentMethod:'paypal'
}
export const wishReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case WISH_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
     case WISH_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.wishItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          error: '',
          wishItems: state.wishItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
         
        };
      }else{
        return {
        ...state,
        error: '',
        wishItems: [...state.wishItems, item],
        
      };
       }
  
     }
  
    case WISH_REMOVE_ITEM:
      return {
        ...state,
        error: '',
        wishItems: state.wishItems.filter((x) => x.product !== action.payload),
      };
    case WISH_EMPTY:
      return {       
        wishItems: [],
      };
    case WISH_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case WISH_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};
