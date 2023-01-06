import { RootState } from "./store";
import { DeviceProps as Device} from '../Devices/types';
import { Message, Tdata } from "./types";

export const selectDevices = (state: RootState) : Device[] => state.device.deviceList;

export const selectDeviceIDs = (state: RootState) : number[] => 
    state.device.deviceList.map(device => device.id);

export const selectDeviceBYId =(state: RootState, id : number) :Device | undefined =>
     state.device.deviceList.find(device => device.id === id);

export const setectMessagesById =(state: RootState, id: number) : Message | undefined =>
     state.message.messageList.find(message => message.id === id);

export const selectLastData = (state : RootState) : Tdata | undefined =>
      state.triadata.tdataList.getLast();     