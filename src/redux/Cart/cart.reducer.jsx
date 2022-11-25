import cartTypes from "./cart.types";
import { handleAddToCart, handleCount, handleQty, handleSubToCart } from "./cart.utils";

const INITIAL_STATE = {
    currentCart:[],
    totals: 0,
    quantity: 0
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
        case cartTypes.CART_DELETE_ONE:
            return {
                ...state,
                currentCart: handleSubToCart({
                    prevItems: state.currentCart,
                    nextItem: action.payload
                }),
            }
        case cartTypes.QUANTITY:
            return {
                ...state,
                quantity: handleQty({
                    prevItems: state.currentCart
                }), 
            }
        case cartTypes.TOTALS_COUNT:
            return {
                ...state,
                totals: handleCount({
                    prevItems: state.currentCart
                })
            }
        case cartTypes.CART_RECETE:
            return {
                ...state,
                ...INITIAL_STATE
            }
    
        default:
            return state;
    }
}

export default cartReducer