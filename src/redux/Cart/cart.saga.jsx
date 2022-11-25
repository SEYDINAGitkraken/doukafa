import { all, call, put, takeLatest } from "redux-saga/effects"
import { cartAddOne, cartDeleteOne, totalsCount, totalsQty } from "./cart.action"
import cartTypes from "./cart.types"


export function* cartSub({payload}){
    try {
        put(cartDeleteOne(payload))
        yield put(totalsQty())
        yield put(totalsCount())
    } catch (error) {
        console.log(error)
    }
}

export function* onCartSub(){
    yield takeLatest(cartTypes.CART_DELETE_ONE, cartSub)
}

export function* cartAdding({payload}){
    try {
        put(cartAddOne(payload))
        yield put(totalsQty())
        yield put(totalsCount())
    } catch (error) {
        console.log(error)
    }
}

export function* onCartAdding(){
    yield takeLatest(cartTypes.CART_ADD_ONE, cartAdding)
}

export default function* cartSaga(){
    yield all([
        call(onCartAdding),
        call(onCartSub)
    ])
}