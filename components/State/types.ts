import { colors } from "../colors";
import { DeviceProps as Device } from '../Devices/types';
import { RingBuffer } from '../Custom/RingBuffer'; 
import { SettingProps as Settings} from '../AppSet/types';

export type Message = { id: number, msg: string, sent: boolean };

export type Tdata = { ts: string, tv: string };

export type Tstatus = { tsv: string };

export type initialStateType = {
    deviceList: Device[],
    messageList: Message[],
    SettingList: Settings[],
    tstatusList: RingBuffer<Tstatus>,
    tdataList: RingBuffer<Tdata>,
};

export const messageList : Message[] = 
   [{ id:   1, msg: '80', sent: true },
    { id:   2, msg: '72', sent: true },
    { id:   3, msg: '60.5', sent: true },
    { id:   4, msg: '50', sent: true },
    { id:   5, msg: '300', sent: true },
    { id:   6, msg: '0',  sent: true }];
 
export const deviceList : Device[] = 
     [ { id: 1, deviceNo: "Tria9X99", alias: "Temperature", highValue: '80', lowValue: '75', accuracy: '0.01',
         art: { icon: "thermometer", background: colors.accent } },       
       { id: 2, deviceNo: 'Tria10X01', alias: 'Humidity', highValue: '65', lowValue: '50', accuracy: '0.01',
         art: { icon: "droplet", background: colors.accent } },
       { id: 3, deviceNo: "Tria9X98", alias: "Air Quality", highValue: '3000',lowValue: '0', accuracy: '0.01',
         art: { icon: "wind",  background: colors.accent } },
       { id: 4, deviceNo: "Tria10X08", alias: "Hazard Gases", highValue: '300', lowValue: '0', accuracy: '0.01',
         art: { icon: "wind", background: colors.accent } }
     ];

 const settingList : Settings[] =
     [  {id: 1, title: 'User Name' , subTitle: 'Bhalchandra'},
        {id: 2, title: 'Avatar/ Image' , subTitle: null},
        {id: 3, title: 'City' , subTitle: 'San diego'},
        {id: 4, title: 'State' , subTitle: 'California'},
        {id: 5, title: 'Country' , subTitle: 'United States'},
        {id: 6, title: 'Operation window start time' , subTitle: '1800'},
        {id: 7, title: 'Operation window end time' , subTitle: '0800'},
        {id: 8, title: 'Use ML' , subTitle: 'True'}
     ];    

 const tdataList : RingBuffer<Tdata> =  new RingBuffer<Tdata>(100);
 tdataList.add({tv:"89.9:56.8:304", ts:"ts" });

const tstatusList: RingBuffer<Tstatus> = new RingBuffer<Tstatus>(100);
 
 export const initialState  = {
     deviceList,
     messageList,
     tstatusList,
     tdataList,
     settingList
 };


