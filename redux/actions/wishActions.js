import axios from 'axios';
import { useEffect } from 'react';
import {
  CLEAR_ERRORS,
  WISH_ADD_ITEM,
  WISH_LIST_FAIL,
  WISH_LIST_REQUEST,
  WISH_LIST_SUCCESS,
  WISH_REMOVE_ITEM
} from '../constants/wishConstants';

export const listWish = ({
 
}) => async (dispatch) => {
  try {
    dispatch({ type: WISH_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: WISH_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WISH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToWish = (productId) => async (dispatch, getState) => {
  
   const { data } = await axios.get(`/api/products/${productId}`);

   if(data.product.inStock === 0)
   return ({ type: WISH_ADD_ITEM_FAIL, payload: {error: 'This product is out of stock.'} }) 

  //  const check = cart.every(item => {
  //      return item._id !== product._id
  //  })

  //  if(!check) return ({ type: WISH_ADD_ITEM_FAIL, payload: {error: 'The product has been added to cart.'} }) 
  //  console.log(data)

  // const {
  //   wish: { wishItems },
  // } = getState();
    dispatch({
      type: WISH_ADD_ITEM,
      payload: {
        product: data.product._id,
        title: data.product.title,
        images: data.product.images,
        price: data.product.price,
        inStock: data.product.inStock        
      },
    });

  localStorage.setItem(
    'wishItems',
    JSON.stringify(getState().wish.wishItems)
  );
  localStorage.setItem(
    'shopping',
    JSON.stringify(getState().shoppingCart.shopping)
  );
  // Router.push('/wish');

};
export const removeFromWish = (productId) => (dispatch, getState) => {
  dispatch({ type: WISH_REMOVE_ITEM, payload: productId });

  const {
    wish: { wishItems },
  } = getState();
  localStorage.setItem('wishItems', JSON.stringify(wishItems));
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
      type: CLEAR_ERRORS
  })
}