import { colors } from "../colors";
import { DeviceProps as Device } from '../Devices/types';
import { SettingProps as Settings} from '../AppSet/types';

export type Message = { id: number, msg: string, sent: boolean };

export type TxData = { timeStamp: string, txValue: string};

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
   [{ id:   1, msg: 'S:TH:80', sent: true },
    { id:   2, msg: 'S:TL:72', sent: true },
    { id:   3, msg: 'S:HH:60.5', sent: true },
    { id:   4, msg: 'S:HL:50', sent: true },
    { id:   5, msg: 'S:AH:300', sent: true },
    { id:   6, msg: 'S:AL:0',  sent: true },
    // commands app to tria device
    { id: 7, msg: 'C:GS:0', sent: true}, //requesting settings from Tria need '_' replaced by 'S'
     { id: 8, msg: 'C:OP:0', sent: true},
    { id: 9, msg: 'C:AI:1', sent: true}  
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
     [  {id: 1, title: 'User' , subTitle: 'Bhalchandra',type: 'text'},
        {id: 2, title: 'Lattitude' , subTitle: '32.968700', type: 'text'},
        {id: 3, title: 'Longitude' , subTitle: '-117.184200', type: 'text'},
        {id: 4, title: 'Control Operation Pause - on/off', subTitle: 'on', type: 'text'},  //overrides Operation window settings
        {id: 5, title: 'Use Artificial Intelligence - on/off' , subTitle: 'on', type: 'text'}
     ];    

 const tdataList : TxData[] = [];

const tstatusList: TxStatus[] = [];
 
 export const initialState  = {
     deviceList,
     messageList,
     tstatusList,
     tdataList,
     settingList
 };


