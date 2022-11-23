import React, { useEffect, useState } from 'react'
import Storage, {StoreKeyMap} from './Storage';
import { colors } from '../colors';
import { Alert , View} from 'react-native';
import { Text } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import {DeviceProps} from '../Devices/types';
//import { DrawerContentScrollView } from '@react-navigation/drawer';

    
    
  Storage.upsertObjectData(StoreKeyMap.deviceSettings + ':' + 1 , 
        { id: 1,  deviceNo: "Tria9X99", alias: "Temperature", highValue: "80", lowValue: "75", accuracy: "0.01", 
            art: { icon: "thermometer", background: colors.accent }, 
        });       
      /* Storage.upsertObjectData(StoreKeyMap.deviceSettings + ':' + 2 , 
        { id: 2, deviceNo: 'Tria10X01', alias: 'Humidity',highValue: '65', lowValue: '45', accuracy: '0.01',
            art: { icon: "droplet", background: colors.accent,},
        });
    Storage.upsertObjectData(StoreKeyMap.deviceSettings + ':' + 3 ,
        { id: 3, deviceNo: "Tria9X98", alias: "Air Quality", highValue: '3000', lowValue: '0', accuracy: '0.01',
            art: { icon: "wind", background: colors.accent, },
        });
    Storage.upsertObjectData(StoreKeyMap.deviceSettings + ':' + 4 ,        
        { id: 4, deviceNo: "Tria10X08", alias: "Hazard Gases", highValue: '300', lowValue: '0', accuracy: '0.01',
            art: { icon: "wind", background: colors.accent, },
        },); */
    
   function prepareDeviceSettings(){
     var collect;
       try{
      //  var vals = Storage.getObjectValue(StoreKeyMap.deviceSettings +':'+ 1)
           var vals =  Storage.multiGetData([StoreKeyMap.deviceSettings +':'+1, 
                                            StoreKeyMap.deviceSettings +':'+2] ) 
          .then( (value) => {
            if(value != null)
               collect = value;
          });
        } catch(error){
            console.error(error)
        }
        return collect;
    }

   /* const getDeviceSetting =  (id:number) => {
    const [dataSetting, setDataSetting] = useState(null);

    useEffect(() => {
        Storage.getStringValue(StoreKeyMap.deviceSettings + ":" + id) .then(value =>{
        setDataSetting(value); console.log(value);
    }).catch(reason => {console.log("did not find async storage for: " + id + " : "  + reason)});
    }, [id])
        return dataSetting;
    } */


/* (async function()    {
function swait(ms: number, data: Promise<string>){
    return new Promise(resolve => setTimeout(resolve, ms, data));
}
var res1, res2
 var tasks =[
    async() => {
        res1 = await swait(1000, Storage.getStringValue(StoreKeyMap.deviceSettings+':1'));
    },
    async() => {
        res2 = await swait(1000, Storage.getStringValue(StoreKeyMap.deviceSettings+':2'));
    },
 ]
await Promise.all(tasks.map(p => p()));
})();

 const getDeviceSetting = (id: number) =>{
    return Storage.getStringValue(StoreKeyMap.deviceSettings + ":" + id);
 }    */
/* 
 async function prepareDeviceSettings() {

    const deviceSettings: unknown[] = [];
   
    function wait(ms: number, data: Promise<string>){
            return new Promise(resolve => setTimeout(resolve, ms, data));
   }
    
    var tasks =[
        async() => {
            var res1 = await wait(500, Storage.getStringValue(StoreKeyMap.deviceSettings+':'+1));
            deviceSettings.push(res1.toString());
            Alert.alert(res1);
        },
        async() => {
            var res2 = await wait(500, Storage.getStringValue(StoreKeyMap.deviceSettings+':2'));
            deviceSettings.push(res2.toString());
        },
        async() => {
            var res3 = await wait(500, Storage.getStringValue(StoreKeyMap.deviceSettings+':3'));
            deviceSettings.push(res3.toString());
        },
        async() => {
            var res4 = await wait(500, Storage.getStringValue(StoreKeyMap.deviceSettings+':4'));
            deviceSettings.push(res4.toString());
            Alert.alert(res4);
        }
     ]

    await Promise.all(tasks.map(p => p()));  
    return deviceSettings;
};  */

const LoadDefault =  {
    prepareDeviceSettings,
    //getDeviceSetting,
}


export default LoadDefault
