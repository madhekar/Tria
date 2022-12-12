
import {  configureStore } from '@reduxjs/toolkit'

import { deviceSlice } from './triaSlice/deviceSlice'
import { messageSlice } from './triaSlice/messageSlice';

import { persistStore, persistReducer, FLUSH } from 'redux-persist';
import { processColor } from 'react-native-reanimated';


export const store = configureStore({
reducer: {
        device: deviceSlice.reducer,
        message: messageSlice.reducer
  }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
