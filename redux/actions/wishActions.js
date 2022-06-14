import axios from 'axios';
import {
  WISH_ADD_ITEM,
  WISH_REMOVE_ITEM,
  WISH_SAVE_SHIPPING_ADDRESS,
  WISH_SAVE_PAYMENT_METHOD,
  WISH_ADD_ITEM_FAIL,
} from '../constants/wishConstants';

export const addToWish = (productId) => async (dispatch) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  
   if(data.product.inStock === 0){
  //if(data.inStock === 0){

  return ({ type: WISH_ADD_ITEM_FAIL, payload: {error: 'This product is out of stock.'} }) 
  }else{
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
  }
   
};
// export const addToWish = (product) => async (dispatch) => {
//      dispatch({
//      type: WISH_ADD_ITEM,
//      payload: product
//    });  
// };
export const removeFromWish = (productId) => (dispatch) => {
  dispatch({ type: WISH_REMOVE_ITEM, payload: productId });   
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: WISH_SAVE_SHIPPING_ADDRESS, payload: data }); 
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: WISH_SAVE_PAYMENT_METHOD, payload: data });
};
