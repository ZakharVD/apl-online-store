import { createSlice } from '@reduxjs/toolkit';

export const PRODUCTS_INITIAL_STATE = {
    productsInfo: {}
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: PRODUCTS_INITIAL_STATE,
    reducers: {
        setProductsInfo(state, action) {
            state.productsInfo = action.payload;
        }
    }
})

export const { setProductsInfo } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;