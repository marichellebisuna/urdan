import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
 import combinedReducers from './reducers/reducers'
import data from './reducers/reducers'
import { persistStore, persistReducer } from "redux-persist";
// import storage from './storage';
import storage from "redux-persist/lib/storage";
import expireReducer from "redux-persist-expire";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
    return nextState
    } else {
        return combinedReducers(state, action)
    }
}

const makeStore = ({isServer}) => {
    if (isServer) {
        return createStore(reducer, bindMiddleware([thunkMiddleware]))
    }
    else{        
        const persistConfig = {
            key: "root",
            storage,
            whiteList: ['cart', 'form', 'user', 'users', 'products', 'product', 'wishItems', 'shippingAddress', 'paymentMethod'],
            transforms: [expireReducer(combinedReducers, { expireSeconds: 5 })],
        }
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(persistedReducer, bindMiddleware([thunkMiddleware]));

store.__persistor = persistStore(store); 
return store;
    }

}

export const wrapper = createWrapper(makeStore)

