import userTypes from "./user.types";

export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const userError = (error) =>({
    type: userTypes.USER_ERROR,
    payload: error
})

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
})