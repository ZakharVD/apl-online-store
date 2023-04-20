import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store);