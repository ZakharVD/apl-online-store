import { PRODUCTS_ACTION_TYPES } from "./products.types"

export const setProductsInfo = (productsInfo) => ({
    type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS_INFO,
    payload: productsInfo
})