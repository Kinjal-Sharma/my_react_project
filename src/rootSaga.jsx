import { all, takeLatest } from "redux-saga/effects";
import { getProductListSaga} from "./Redux/ProductsRedux/ProductsSaga";
import { GET_PRODUCT_LIST, GET_SINGLE_PRODUCT } from "./Actions";
import {  getSingleProductSaga } from "./Redux/ProductsRedux/productDetailRedux/ProductDetailSaga";

function* rootSaga(){
    yield all([
        takeLatest(GET_PRODUCT_LIST,getProductListSaga),
        takeLatest(GET_SINGLE_PRODUCT,getSingleProductSaga)
    ]  //takeLatest is a Redux-Saga effect used to handle the latest version of a repeated action — and cancel any previous ones still running.
    )
}
export default rootSaga;