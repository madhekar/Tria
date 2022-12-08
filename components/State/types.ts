import { colors } from "../colors";

export type Device = {
    id: number;
    deviceNo: string;
    alias: string;
    highValue: string;
    lowValue: string;
    accuracy: string;
    art: {
        icon: string,
        background: string,
    },
};

export type initialStateType = {
    deviceList: Device[]
 }
 
export const deviceList : Device[] = 
     [
         {
             id: 1,
             deviceNo: "Tria9X99",
             alias: "Temperature",
             highValue: '80',
             lowValue: '75',
             accuracy: '0.01',
             art: {
                 icon: "thermometer",
                 background: colors.accent,
             },
         },       
         {
             id: 2,
             deviceNo: 'Tria10X01',
             alias: 'Humidity',
             highValue: '65',
             lowValue: '45',
             accuracy: '0.01',
             art: {
                 icon: "droplet",
                 background: colors.accent,
             },
         },
         {
             id: 3,
             deviceNo: "Tria9X98",
             alias: "Air Quality",
             highValue: '3000',
             lowValue: '0',
             accuracy: '0.01',
             art: {
                 icon: "wind",
                 background: colors.accent,
             },
         },
         {
             id: 4,
             deviceNo: "Tria10X08",
             alias: "Hazard Gases",
             highValue: '300',
             lowValue: '0',
             accuracy: '0.01',
             art: {
                 icon: "wind",
                 background: colors.accent,
             },
         },
     ];
 
 
 export const initialState  = {
     deviceList,
 };

