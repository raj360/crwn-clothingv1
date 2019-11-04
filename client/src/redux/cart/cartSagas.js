import { call, put, all, takeLatest } from "redux-saga/effects";

import UserActionTypes from "../user/userTypes";
import { clearCart } from "./cartActions";

export function* clearCartOnSignOutSucccess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSignOutSucccess
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
