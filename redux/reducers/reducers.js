import { combineReducers } from 'redux';
import { allProductsReducer, productDetailsReducer, newReviewReducer, checkReviewReducer, newProductReducer, productReducer, productReviewsReducer, reviewReducer} from './productReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'
import {wishReducer} from './wishReducers'

export default combineReducers({     
    allProducts: allProductsReducer, 
    newProduct: newProductReducer,
    productDetails: productDetailsReducer,
    product: productReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    wish: wishReducer,    
})

