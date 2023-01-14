import { RootState } from "./store";
import { DeviceProps as Device} from '../Devices/types';
import { Message, TxData } from "./types";

export const selectDevices = (state: RootState) : Device[] => state.device.deviceList;

export const selectDeviceIDs = (state: RootState) : number[] => 
    state.device.deviceList.map((device: { id: any; }) => device.id);

export const selectDeviceBYId =(state: RootState, id : number) :Device | undefined =>
     state.device.deviceList.find((device: { id: any; }) => device.id === id);

export const setectMessagesById =(state: RootState, id: number) : Message | undefined =>
     state.message.messageList.find((message: { id: any;}) => message.id === id);

export const selectLastData = (state : RootState) : TxData | undefined =>
      state.triadata.tdataList.getLast();     