import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSaga";
import { cartSagas } from "./cart/cartSagas";
export default function* rootSage() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
