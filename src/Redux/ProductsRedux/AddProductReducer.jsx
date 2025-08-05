import { ADD_TO_CART } from "../../Actions";

const initialState = {
    cart: [],
    cartCount: 0,
};

const AddProductReducer = (state = initialState, action) => {
    if (!state || typeof state !== 'object') state = initialState;

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, //spreading the state
                cart: [...(state.cart || []), action.payload],
                cartCount: (state.cartCount || 0) + 1,
            };

        default:
            return state;
    }
};

export default AddProductReducer;
