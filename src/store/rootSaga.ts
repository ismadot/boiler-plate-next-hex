import { all } from "redux-saga/effects";
import exampleSaga from "../adapters/redux/exampleSaga";

export default function* rootSaga() {
  yield all([...exampleSaga]);
}
