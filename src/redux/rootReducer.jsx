import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import userReducer from './User/user.reducer';
import cartReducer from "./Cart/cart.reducer";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)