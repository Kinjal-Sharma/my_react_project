import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    isloading: false,
    isloaded: false,
}

const productList = createSlice({
    name: 'ProductList',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.isloading = true;
            state.isloaded = false
        },
        fetchProductsSuccess(state, {payload}) {
          
            state.isloading = false;
            state.isloaded = true;
            state.list = payload.data;
        },
        fetchProductsFailure(state) {
            state.isloading = false;
            state.isloaded = false;
        },
    }
})

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productList.actions;
export default productList.reducer;
