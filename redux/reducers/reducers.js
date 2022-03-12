import { combineReducers } from 'redux';

import { allProductsReducer, productDetailsReducer, newReviewReducer, checkReviewReducer, newProductReducer, productReducer, productReviewsReducer, reviewReducer } from './ProductReducers'

// import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

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
    // auth: authReducer,
    // user: userReducer,
    // loadedUser: loadedUserReducer,
    // allUsers: allUsersReducer,
    // userDetails: userDetailsReducer,
    // forgotPassword: forgotPasswordReducer,
    // checkBooking: checkBookingReducer,
    // bookedDates: bookedDatesReducer,
    // bookings: bookingsReducer,
    // booking: bookingReducer,
    // bookingDetails: bookingDetailsReducer,
    
})

export default reducer