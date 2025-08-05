import storage from 'redux-persist/lib/storage'; // uses localStorage under the hood
import { configureStore } from "@reduxjs/toolkit";
import  { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./RootReducer";
import rootSaga from "./rootSaga";

//create teh saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares =[sagaMiddleware];

const persistConfig = {
  key: 'root', /*The name by which the Store can be accessed from the device Local Storage*/
  storage, /*The device's storage where the Store is stored (containing all the files and data)*/
};

const persistedReducer = persistReducer(persistConfig, rootReducer); /*Persist prevents  refreshing of the components  */
/*Here, the "rootReducer file" and the "persistConfig" are prevented from refreshing */


//mount the middleware on the Store
const Store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        thunk:false,
        serializableCheck: false   /*disables warnings for non-serializable values. Example: Date, Function, Promise, Map, Set, class instances, Undefined*/
    }).concat(middlewares),
});

export const persistor = persistStore(Store);

//run the saga
sagaMiddleware.run(rootSaga);

export default Store;