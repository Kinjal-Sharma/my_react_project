import { call, put } from 'redux-saga/effects';
import apiClient from "../../httpservices";
import apiEndpoint from "../../WebConstant";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "./ProductsReducer";


export function* getProductListSaga(action) {
  // console.log("product lisst saga is running =====>");
  
  yield put(fetchProductsStart());
  try {
    const response = yield call(apiClient.get, apiEndpoint.GET_PRODUCT_LISTS);
    
   
    if (response.data !=[]) {
   
      yield put(fetchProductsSuccess({ data: response.data }));

    } else {
      yield put(fetchProductsFailure());

    }

  } catch (error) {
    yield put(fetchProductsFailure());

  
  }
}
