import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments, } from "../utils/firebase/firebase";

export const ProductContext = createContext({
    productsInfo: {},
})

export const ProductsProvider = ({children}) => {
    const [productsInfo, setProductsInfo] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getProductsInfo = async () => {
            const productInfo = await getCategoriesAndDocuments();
            console.log('data fetchend successfully');
            setProductsInfo(productInfo);
        }
        getProductsInfo();
    },[])

    const value = { productsInfo };

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}