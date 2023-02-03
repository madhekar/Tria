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
   // messages app to tria device 
   [{ id:   1, msg: '80', sent: true },
    { id:   2, msg: '72', sent: true },
    { id:   3, msg: '60.5', sent: true },
    { id:   4, msg: '50', sent: true },
    { id:   5, msg: '300', sent: true },
    { id:   6, msg: '0',  sent: true },
    // commands app to tria device
    { id: 7, msg: 'C:GS:0', sent: true} //requesting settings from Tria need '_' replaced by 'S'
  ];
 
export const deviceList : Device[] = 
     [ { id: 1, deviceNo: "Tria9X99", alias: "Temperature", highValue: '80.1', lowValue: '75.1', accuracy: '0.01',
         art: { icon: "thermometer", background: colors.accent } },       
       { id: 2, deviceNo: 'Tria10X01', alias: 'Humidity', highValue: '65', lowValue: '50', accuracy: '0.01',
         art: { icon: "drop", background: colors.accent } },
       { id: 3, deviceNo: "Tria9X98", alias: "Air Quality", highValue: '300',lowValue: '0', accuracy: '0.01',
         art: { icon: "air",  background: colors.accent } },
/*        { id: 4, deviceNo: "Tria10X08", alias: "Hazard Gases", highValue: '300', lowValue: '0', accuracy: '0.01',
         art: { icon: "air", background: colors.accent } } */
     ];

 const settingList : Settings[] =
     [  {id: 1, title: 'User Name' , subTitle: 'Bhalchandra',type: 'text'},
        {id: 2, title: 'Avatar/ Image' , subTitle: null, type: 'multiselect'},
        {id: 3, title: 'City' , subTitle: 'San diego', type: 'text'},
        {id: 4, title: 'State' , subTitle: 'California', type: 'text'},
        {id: 5, title: 'Country' , subTitle: 'United States', type: 'text'},
        {id: 6, title: 'Tria On/Off', subTitle: 'On', type: 'mutiselect'},  //overrides Operation window settings
        {id: 7, title: 'Operation window start time' , subTitle: '1800', type: 'text'},
        {id: 8, title: 'Operation window end time' , subTitle: '0800', type: 'text'},
        {id: 9, title: 'Use ML' , subTitle: 'True', type: 'mutiselect'}
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


