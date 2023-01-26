import AsyncStorage  from  '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH ,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import {   combineReducers, configureStore } from '@reduxjs/toolkit';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { deviceSlice} from './triaSlice/deviceSlice';
import { messageSlice } from './triaSlice/messageSlice';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import { tdataSlice } from './triaSlice/tdataSlice';
import { tstatusSlice } from './triaSlice/tstatusSlice';
import { settingSlice} from './triaSlice/settingsSlice';
import { Device } from 'react-native-ble-plx';
import { State } from 'react-native-gesture-handler';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import type { Reducer } from '@reduxjs/toolkit'
/*
 export const persistConfig = {
  key: 'tria',
  storage: AsyncStorage,
  stateReconciles: headSet as (inboundState: CombinedState) => CombinedState
};

type CombinedState = typeof rootReducer extends Reducer<infer U, any> ? U : never

const devicePersistConfig = {
  key: 'device',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const messagePersistConfig ={
  key: 'message',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const dataPersistConfig ={
  key: 'data',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const statusPersistConfig ={
  key: 'status',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const setiingPersistConfig ={
  key: 'setting',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
  device: persistReducer(devicePersistConfig, deviceSlice.reducer),
  message: persistReducer(messagePersistConfig, messageSlice.reducer),
  data: persistReducer(dataPersistConfig, tdataSlice.reducer),
  status: persistReducer(statusPersistConfig, tstatusSlice.reducer),
  setting: persistReducer(setiingPersistConfig, settingSlice.reducer)

})

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer); 

export const store = configureStore({
   reducer: persistedReducer,
   //reducer   : persistReducer(persistConfig, rootReducer) as typeof rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);


function headSet(inboundState: any) {
  throw new Error('Function not implemented.');
}
*/
export const store = configureStore({
reducer: {
        // persistedReducer
        device: deviceSlice.reducer,
        message: messageSlice.reducer,
        triadata: tdataSlice.reducer,
        triastautus: tstatusSlice.reducer,
        setting: settingSlice.reducer
  }, 
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
