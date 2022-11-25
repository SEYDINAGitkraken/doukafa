import { all, call, put, takeLatest } from "redux-saga/effects"
import { cartAddOne, totalsCount } from "./cart.action"
import cartTypes from "./cart.types"



export function* cartAdding({payload:{cartCredentials}}){
    const cart = cartCredentials
    console.log(cart)
    try {
        yield put(cartAddOne(cart))
        // yield put(totalsCount(cart))
    } catch (error) {
        console.log(error)
    }
}

export function* onCartAdding(){
    yield takeLatest(cartTypes.CART_ADD_ONE, cartAdding)
}

export default function* cartSaga(){
    yield all([
        call(onCartAdding)
    ])
}