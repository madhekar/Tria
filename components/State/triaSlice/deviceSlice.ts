
import {  Device ,  initialState } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

let lastId = 0;

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    
    reducers: {
        addDevice: (state, action: PayloadAction<Device>) => {
            state.deviceList.push(action.payload);
        },
        updateDevice: (state, action: PayloadAction<Device>) => {
            const {
                payload: {id, deviceNo, alias, highValue, lowValue, accuracy},
            } = action;

            state.deviceList = state.deviceList.map((device) => 
               device.id === id ? {...device, deviceNo, alias, highValue, lowValue, accuracy} : device,
            );
        },
        removeDevice: (state, acton: PayloadAction<{id: number}>) => {
            state.deviceList = state.deviceList.filter((device) => device.id !== acton.payload.id);
        },
    },
});

export const { addDevice, updateDevice, removeDevice } = deviceSlice.actions;

