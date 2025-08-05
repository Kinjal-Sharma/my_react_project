import { combineReducers } from "redux";
import ProductsReducer from "./Redux/ProductsRedux/ProductsReducer"
import ProductDetailReducer from "./Redux/ProductsRedux/productDetailRedux/ProductDetailReducer"
import AddProductReducer from "./Redux/ProductsRedux/AddProductReducer";

const rootReducer = combineReducers({
    productListReducer : ProductsReducer,
    productdetailReducer : ProductDetailReducer,
    addProductReducer : AddProductReducer
})

export default rootReducer;