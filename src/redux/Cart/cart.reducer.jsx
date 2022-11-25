import cartTypes from "./cart.types";
import { handleAddToCart, handleCount } from "./cart.utils";

const INITIAL_STATE = {
    currentCart:[],
    totals: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartTypes.CART_ADD_ONE:
            return {
                ...state,
                currentCart: handleAddToCart({
                    prevItems: state.currentCart,
                    nextItem: action.payload
                }), 
            }
        case cartTypes.TOTALS_COUNT:
            console.log(action.payload)
            return {
                ...state,
                totals: state.totals
            }
        case cartTypes.CART_RECETE:
            return {
                ...state,
                currentCart:[],
                totals: 0
            }
    
        default:
            return state;
    }
}

export default cartReducer