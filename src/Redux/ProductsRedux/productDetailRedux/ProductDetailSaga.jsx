import { call, put } from 'redux-saga/effects';
import apiEndpoint from '../../../WebConstant';
import apiClient from "../../../httpservices";
import {
   fetchSingleProductFailure,
    fetchSingleProductStart,
     fetchSingleProductSuccess
     } from './ProductDetailReducer';

export function* getSingleProductSaga(action) {
  try {
    yield put(fetchSingleProductStart());

    const id = action.payload.id; // Get the ID from the action
    const endpoint = apiEndpoint.GET_SINGLE_PRODUCTS.replace('{id}', id); // Replace placeholder
    console.log("Calling endpoint:", endpoint);

    const response = yield call(apiClient.get, endpoint);

    if (response?.data) {
      console.log("Single product data:", response.data);
      yield put(fetchSingleProductSuccess({ data: response.data }));
    } else {
      yield put(fetchSingleProductFailure());
    }

  } catch (error) {
    yield put(fetchSingleProductFailure());
  }
}
