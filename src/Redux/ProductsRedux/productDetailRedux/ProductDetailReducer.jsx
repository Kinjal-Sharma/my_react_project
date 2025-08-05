import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productDetail: {},
    isloading: false,
    isloaded: false,
}


const productListDetail = createSlice({
    name: 'ProductListDetail',
    initialState,
    reducers: {
        fetchSingleProductStart(state) {
            state.isloading = true;
            state.isloaded = false
        },

        fetchSingleProductSuccess(state, {payload}) {
            console.log("Single product data:", payload.data);
            state.isloading = false;
            state.isloaded = true;
            state.productDetail = payload.data;
        },

        fetchSingleProductFailure(state) {
            state.isloading = false;
            state.isloaded = false;
        },
    }
})

export const { fetchSingleProductStart, fetchSingleProductSuccess, fetchSingleProductFailure } = productListDetail.actions;
export default productListDetail.reducer;
