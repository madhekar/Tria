
import {  Device , initialStateType, deviceList, initialState } from "../types";
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

/* export const  reducer = ( state = initialState, action:any) => {
    switch(action.type){
       case DEVICE_LIST_ACTION_TYPES.ADD_DEVICE:
           return [...state, {
                              id: ++lastId, 
                              deviceNo: action.payload.device.deviceNo, 
                              alias: action.payload.device.alias, 
                              highValue: action.payload.device.highValue,
                              lowValue: action.payload.device.highValue, 
                              accuracy: action.payload.device.accuracy
                            }];

       case DEVICE_LIST_ACTION_TYPES.UPDATE_DEVICE:
             return state.map(device => device.id !== action.payload.device.id ? device : {...device, highValue: action.payload.device.highValue});            

       case DEVICE_LIST_ACTION_TYPES.REMOVE_DEVICE:
            return state.filter(device => device.id !== action.payload.id);
 
        default: 
                return state;
    }
} */