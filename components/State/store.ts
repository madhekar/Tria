import AsyncStorage  from  '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH } from 'redux-persist';
import {  combineReducers, configureStore } from '@reduxjs/toolkit';

import { deviceSlice } from './triaSlice/deviceSlice';
import { messageSlice } from './triaSlice/messageSlice';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';

 /* export const persistConfig = {
  key: 'tria',
  storage: AsyncStorage
};

const devicePersistConfig = {
  key: 'device',
  storage: AsyncStorage,
}

const messagePersistConfig ={
  key: 'message',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  device: persistReducer(devicePersistConfig,deviceSlice.reducer),
  message: persistReducer(messagePersistConfig, messageSlice.reducer)
})

const persistedReducer = persistReducer<any, any>(persistConfig, 
  rootReducer
  //device: deviceSlice.reducer,
  //message: messageSlice.reducer
); 
*/
 

//const persistedReducer = persistReducer<any, any>(persistConfig, RootReducer);
export const store = configureStore({
reducer: {
        // persistedReducer
        device: deviceSlice.reducer,
        message: messageSlice.reducer
  }, 
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//export const persistor = persistStore(store);
