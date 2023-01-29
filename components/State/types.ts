import { colors } from "../colors";
import { DeviceProps as Device } from '../Devices/types';
import { SettingProps as Settings} from '../AppSet/types';

export type Message = { id: number, msg: string, sent: boolean };

export type TxData = { timeStamp: string, txValue: string };

export type TxStatus = { txStatusValue: string };

export type initialStateType = {
    deviceList: Device[],
    messageList: Message[],
    SettingList: Settings[],
    tstatusList: TxStatus[],
    tdataList: TxData[]
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
       { id: 3, deviceNo: "Tria9X98", alias: "Air Quality", highValue: '300',lowValue: '0', accuracy: '0.01',
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
        {id: 6, title: 'Tria On/Off', subTitle: 'On'},  //overrides Operation window settings
        {id: 7, title: 'Operation window start time' , subTitle: '1800'},
        {id: 8, title: 'Operation window end time' , subTitle: '0800'},
        {id: 9, title: 'Use ML' , subTitle: 'True'}
     ];    

 const tdataList : TxData[] = [ {txValue:'72:42:10', timeStamp:'2023-01-01 12:0:0'}
                              ];

const tstatusList: TxStatus[] = [];
 
 export const initialState  = {
     deviceList,
     messageList,
     tstatusList,
     tdataList,
     settingList
 };


