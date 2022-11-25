import cartTypes from "./cart.types";

export const totals = () => ({
    type:cartTypes.TOTALS
})

export const cartAddOne = (cartCredentials) => ({
    type:cartTypes.CART_ADD_ONE,
    payload: cartCredentials
})

export const cartDeleteOne = (cartCredentials) => ({
    type:cartTypes.CART_DELETE_ONE,
    payload: cartCredentials
})

export const cartRecete = () => ({
    type: cartTypes.CART_RECETE
})

export const totalsQty = () => ({
    type: cartTypes.QUANTITY
})

export const totalsCount = () => ({
    type: cartTypes.TOTALS_COUNT
})