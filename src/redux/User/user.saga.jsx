import { all, call, put, takeLatest } from "redux-saga/effects"
import { signInSuccess, signOutUserSuccess } from "./user.action";
import { loginUser } from "./user.helper";
import userTypes from "./user.types";

export function* getSnapshotFromUserAuth(user, additionalData = {}){

    try {
        //const userRef = yield call(handleUserProfile, { userAuth: user, additionalData })
        //const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
                id: user._id,
                ...user
            })
        )
    } catch (error) {
        console.log(error)
    }
}


export function* emailSignIn({payload:{email, password}}){
    try {
        const { user, error } = yield loginUser( email, password )
        if (error) {
            error.message = 'email ou mot de passe incorrecte'
            yield put(userError(error))
        }
        if(user){
            yield getSnapshotFromUserAuth(user)
        }
      
    } catch (error) {
        console.log(error)
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* signOut(){
    try {
        yield put(signOutUserSuccess())
        
    } catch (err) {
        console.log(err)
    }
}

export function* onSignOutStart(){
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOut)
}

export default function* userSaga(){
    yield all([
        call(onEmailSignInStart),
        call(onSignOutStart),
    ])
}