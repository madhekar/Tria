
import {  configureStore } from '@reduxjs/toolkit'
import { deviceSlice } from './device-list/deviceSlice'


export const store = configureStore({
reducer: {
        device: deviceSlice.reducer
  }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
