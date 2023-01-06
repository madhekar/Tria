import { colors } from "../colors";
import {DeviceProps as Device} from '../Devices/types';
import { RingBuffer } from '../Custom/RingBuffer'; 

export type Message = {
    id: number,
    msg: string,
    sent: boolean,
};

export type Tdata = {
    ts: string,
    tv: string
};

export type Tstatus = {
    tsv: string
};

export type initialStateType = {
    deviceList: Device[],
    messageList: Message[],
    tstatusList: RingBuffer<Tstatus>,
    tdataList: RingBuffer<Tdata>,
};

export const messageList : Message[] = 
[
    {
        id:   1,
        msg: '80',  //Temp desc
        sent: true
    },
    {
        id:   2,
        msg: '72',  //Temp high
        sent: true
    },
    {
        id:   3,
        msg: '60.5',  // humidity high
        sent: true
    },
    {
        id:   4,
        msg: '50',  //humidity low
        sent: true
    },
    {
        id:   5,
        msg: '300',  //airquaity high
        sent: true
    },
    {
        id:   6,
        msg: '0',  //airquaity low
        sent: true
    }
];
 
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
             lowValue: '50',
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

 const tdataList : RingBuffer<Tdata> =  new RingBuffer<Tdata>(100);
 tdataList.add({tv:"89.9:56.8:304", ts:"ts" });

const tstatusList: RingBuffer<Tstatus> = new RingBuffer<Tstatus>(100);
 
 export const initialState  = {
     deviceList,
     messageList,
     tstatusList,
     tdataList,
 };


