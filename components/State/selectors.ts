import { RootState } from "./store";
import {Device} from './types';

export const selectDevices = (state: RootState) : Device[] => state.device.deviceList;

export const selectDeviceIDs = (state: RootState) : number[] => 
    state.device.deviceList.map(device => device.id);

export const selectDeviceBYId =(state: RootState, id : number) :Device | undefined =>
     state.device.deviceList.find(device => device.id === id);     