import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';

import { allProductsReducer, productDetailsReducer, newReviewReducer, checkReviewReducer, newProductReducer, productReducer, productReviewsReducer, reviewReducer} from './ProductReducers'

 import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'
import { wishReducer } from './wishReducers';

// import { checkBookingReducer, bookedDatesReducer, bookingsReducer, bookingDetailsReducer, bookingReducer } from './bookingReducers'

const reducer = combineReducers({
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
     cart: cartReducer,
     wish: wishReducer,
    // checkBooking: checkBookingReducer,
    // bookedDates: bookedDatesReducer,
    // bookings: bookingsReducer,
    // booking: bookingReducer,
    // bookingDetails: bookingDetailsReducer,
    
})


export default reducer