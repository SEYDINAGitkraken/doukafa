import { all, call } from 'redux-saga/effects';

import userSaga from './User/user.saga';
import cartSaga from './Cart/cart.saga';

export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(cartSaga)
    ])
}