import {
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_RESET,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  REVIEW_AVAILABILITY_REQUEST,
  REVIEW_AVAILABILITY_SUCCESS,
  REVIEW_AVAILABILITY_FAIL,
  ADMIN_PRODUCTS_REQUEST,
  ADMIN_PRODUCTS_SUCCESS,
  ADMIN_PRODUCTS_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,

  CLEAR_ERRORS

} from '../constants/productConstants'


// All products reducer
export const allProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //Products reset
      case ALL_PRODUCTS_RESET:
        return {};

      case ADMIN_PRODUCTS_REQUEST:
          return {
              loading: true,
          }

      case ALL_PRODUCTS_SUCCESS:
          return {
              productsCount: action.payload.productsCount,
              resPerPage: action.payload.resPerPage,
              filteredProductsCount: action.payload.filteredProductsCount,
              products: action.payload.products,
            
          }

      case ADMIN_PRODUCTS_SUCCESS:
          return {
              loading: false,
              products: action.payload
          }

      case ALL_PRODUCTS_FAIL:
      case ADMIN_PRODUCTS_FAIL:
          return {
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}  

// PRODUCT details reducer
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
      case PRODUCT_DETAILS_SUCCESS:
          return {
              product: action.payload
          }

      case PRODUCT_DETAILS_FAIL:
          return {
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
      case NEW_PRODUCT_REQUEST:
          return {
              loading: true
          }

      case NEW_PRODUCT_SUCCESS:
          return {
              loading: false,
              success: action.payload.success,
              product: action.payload.product
          }

      case NEW_PRODUCT_RESET:
          return {
              success: false
          }

      case NEW_PRODUCT_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const productReducer = (state = {}, action) => {
  switch (action.type) {
      case UPDATE_PRODUCT_REQUEST:
      case DELETE_PRODUCT_REQUEST:
          return {
              loading: true
          }

      case UPDATE_PRODUCT_SUCCESS:
          return {
              loading: false,
              isUpdated: action.payload
          }

      case DELETE_PRODUCT_SUCCESS:
          return {
              loading: false,
              isDeleted: action.payload
          }

      case UPDATE_PRODUCT_RESET:
          return {
              isUpdated: false
          }

      case DELETE_PRODUCT_RESET:
          return {
              loading: false,
              isDeleted: false
          }

      case UPDATE_PRODUCT_FAIL:
      case DELETE_PRODUCT_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
      case NEW_REVIEW_REQUEST:
          return {
              loading: true
          }

      case NEW_REVIEW_SUCCESS:
          return {
              loading: false,
              success: action.payload
          }

      case NEW_REVIEW_RESET:
          return {
              success: false
          }

      case NEW_REVIEW_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const checkReviewReducer = (state = { reviewAvailable: null }, action) => {
  switch (action.type) {
      case REVIEW_AVAILABILITY_REQUEST:
          return {
              loading: true
          }

      case REVIEW_AVAILABILITY_SUCCESS:
          return {
              loading: false,
              reviewAvailable: action.payload
          }

      case REVIEW_AVAILABILITY_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const productReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
      case GET_REVIEWS_REQUEST:
          return {
              loading: true
          }

      case GET_REVIEWS_SUCCESS:
          return {
              loading: false,
              reviews: action.payload
          }

      case GET_REVIEWS_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
      case DELETE_REVIEW_REQUEST:
          return {
              loading: true
          }

      case DELETE_REVIEW_SUCCESS:
          return {
              loading: false,
              isDeleted: action.payload
          }

      case DELETE_REVIEW_RESET:
          return {
              loading: false,
              isDeleted: false
          }

      case DELETE_REVIEW_FAIL:
          return {
              loading: false,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}