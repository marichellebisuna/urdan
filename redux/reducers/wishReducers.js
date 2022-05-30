/* eslint-disable import/prefer-default-export */
import {
  WISH_ADD_ITEM,
  WISH_REMOVE_ITEM,
  WISH_EMPTY,
  WISH_ADD_ITEM_FAIL,
  WISH_LIST_REQUEST,
  WISH_LIST_SUCCESS,
  WISH_LIST_FAIL,
  CLEAR_ERRORS
} from '../constants/wishConstants';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { getCookie, setCookie } from '../../utils/useCookie';

const CARD = "CARD";

const wishInitialState = {
   wishItems: getCookie(CARD),
  //wishCart:localStorage.getItem("wishItems")
};

//  const initialState = {
  
  // userInfo: Cookies.get('userInfo')
  //   ? JSON.parse(Cookies.get('userInfo'))
  //   : null,
  // cart: {
  //   cartItems: Cookies.get('cartItems')
  //     ? JSON.parse(Cookies.get('cartItems'))
  //     : [],

  //   shippingAddress: Cookies.get('shippingAddress')
  //     ? JSON.parse(Cookies.get('shippingAddress'))
  //     : {},
  //   paymentMethod: Cookies.get('paymentMethod')
  //     ? Cookies.get('paymentMethod')
  //     : '',
  // },
 

    //   : [],
  
//  wishItems: localStorage.getItem('wishItems')   
// };

export const wishReducer = (
  state = {wishItems:wishInitialState.Items, error:{}},
  //state= initialState,
  action
) => {
  switch (action.type) {
    case WISH_LIST_REQUEST:
      return { loading: true, wishItems: [] };
    case WISH_LIST_SUCCESS:
      return { loading: false, wishItems: action.payload };
    case WISH_LIST_FAIL:
      return { loading: false, error: action.payload };
    case WISH_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case WISH_ADD_ITEM: {   
      const item = action.payload;          
      const existItem = state.wishItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          wishItems: state.wishItems.map((x) =>
            x.product === existItem.product ? item : x           
          ), 
        };             
      }    
     
        return {
          ...state,
          wishItems: [...state.wishItems, item],
        };    
      // const item = action.payload;
      // const existItem = state.wishItems.find((x) => x.name === item.name);
      // const wishItems = existItem
      //   ? state.wishItems.map((x) =>
      //       x.name === existItem.name ? item : x
      //     )
      //   : [...state.wishItems, item];
      // Cookies.set('wishItems', JSON.stringify(wishItems));
      // return {
      //   ...state,
      //   wish: {
      //     ...state.wish,
      //     wishItems,
      //   },
      // };
    
  }
    case WISH_REMOVE_ITEM:
      return {
        ...state,
        error: '',
        wishItems: state.wishItems.filter((x) => x.product !== action.payload),
      };
    case WISH_EMPTY:
      return {
        ...state,
        error: '',
        wishItems: [],
      }; 
    case CLEAR_ERRORS:
      return {
          ...state,
          error: null
      } 
    default:
      return state;
  }
};
