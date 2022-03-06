import { combineReducers } from 'redux';

import { allProductsReducer, ProductDetailsReducer, newReviewReducer, checkReviewReducer, newProductReducer, ProductReducer, ProductReviewsReducer, reviewReducer } from './ProductReducers'

// import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

// import { checkBookingReducer, bookedDatesReducer, bookingsReducer, bookingDetailsReducer, bookingReducer } from './bookingReducers'

const reducer = combineReducers({
    allProducts: allProductsReducer,
    newProduct: newProductReducer,
    ProductDetails: ProductDetailsReducer,
    Product: ProductReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer,
    ProductReviews: ProductReviewsReducer,
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