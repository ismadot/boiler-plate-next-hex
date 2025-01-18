import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./exampleSlice";

import { AxiosResponse } from "axios";
import { fetchExampleData } from "../api";

function* handleFetchData(): Generator<any, void, AxiosResponse> {
  try {
    const response = yield call(fetchExampleData);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* exampleSaga() {
  yield takeLatest(fetchDataRequest.type, handleFetchData);
}

export default [exampleSaga()];
