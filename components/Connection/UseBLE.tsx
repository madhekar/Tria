
import React, {useState} from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import {BleError, BleManager, Characteristic, Device, State} from 'react-native-ble-plx';
import {atob, btoa} from 'react-native-quick-base64';
import moment from 'moment';

type PermissionCallback = (result: boolean) => void;

const bleManager = new BleManager();

const TRIA_UUID =  'FFE0';//'FC75AB21-3D68-49D0-B736-545AA8D01B53';
const TRIA_CHARACTERISTIC = 'FFE1';

type VoidCallback = (result: boolean) => void;

interface BluetoothLowEnergyApi{
    requestPermissions(callback: PermissionCallback): Promise<void>;
    connectToDevice(device: Device): Promise<void>;
    scanForDevices(): void;
    connectedDevice: Device | null;
    disconnectFromDevice: () => void;
    triaData: String;
    triaStatus: String;
    triaSetting: String;
    allDevices: Device[];
    writeSettingsToTria(sd: string): void;
}

export default function UseBLE(): BluetoothLowEnergyApi{
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [triaData, setTriaData] = useState<String>("");
    const [triaStatus, setTriaStatus] = useState<String>("");
    const [triaSetting, setTriaSetting] = useState<String>("");

    const requestPermissions = async (callback: PermissionCallback)=> {
        if(Platform.OS == 'android'){
            const grantedStatus = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'Bluetooth Low Energy Needs Location Permission',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'Ok',
                    buttonNeutral: 'Maybe Later'
                },
            );
            callback(grantedStatus == PermissionsAndroid.RESULTS.GRANTED);
        }else {
            callback(true);
        }
    };

    const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
       devices.findIndex(device => nextDevice.id == device.id) > -1;

    const scanForDevices = () => {
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error){
                Alert.alert(error.message);
            }
            if (device && device.name?.includes('DSD')){
               setAllDevices((prevState: Device[]) => {
                    if (!isDuplicateDevice(prevState, device )) {
                        return [...prevState, device];
                    }
                    return prevState;
               });
            }
        });
    };

    // connect To Device
    const connectToDevice = async (device: Device) => {
        try{
            const deviceConnection = await bleManager.connectToDevice(device.id);
            setConnectedDevice(deviceConnection);
            await deviceConnection.discoverAllServicesAndCharacteristics();
            bleManager.stopDeviceScan();
            startStreamingData(deviceConnection);
        }catch(error){
            Alert.alert("Error: Unable to connect" + error);
        }
    };

    const disconnectFromDevice = () => {
        if(connectedDevice){
            bleManager.cancelDeviceConnection(connectedDevice.id);
            setConnectedDevice(null);
            setTriaData("");
        }
    };


    const onTriaDataUpdate = (
        error: BleError | null,
        characteristic: Characteristic | null
    ) => {
        if (error) {
            Alert.alert(error.message);
            return -1;
        } else if(!characteristic?.value){
            Alert.alert("No characteristics found!");
            return -1;
        }
        const rawData = atob(characteristic.value)
        var stok = rawData.split(':');
        if (stok[0].startsWith(">")){
            let strOut = 'S:' + stok[0] + ' A:' + stok[1] + ' R:' + stok[2];
            setTriaStatus(strOut);
        }else if(stok[0].startsWith('R')){ 
            let idx='1';
            (stok[1] == 'T') ? idx='1' : (stok[1] == 'H') ? idx='2' : idx='3'
            let strSet = idx + ':' + stok[1] +':'+ stok[2] +':'+ stok[3];
            setTriaSetting(strSet);
        } else{
            let strOut = 'T:' + stok[0] + ' H:' + stok[1] + ' A:' + stok[2];
            setTriaData(rawData);
        }
    };


    const startStreamingData = async (device: Device) => {
        if (device){
            device.monitorCharacteristicForService(
                TRIA_UUID,
                TRIA_CHARACTERISTIC,
                (error, characteristic) => onTriaDataUpdate(error, characteristic),
            );
        }else{
            Alert.alert("No device connected");
        }
    };

    const writeSettingsToTria = async (sdata: string) => {
        if (connectedDevice){
            await connectedDevice.writeCharacteristicWithoutResponseForService(
                TRIA_UUID, 
                TRIA_CHARACTERISTIC,
                btoa(sdata));
        } else{
            Alert.alert('No device is connected!');
        }
    };

    return {
        requestPermissions,
        connectToDevice,
        scanForDevices,
        allDevices,
        connectedDevice,
        disconnectFromDevice,
        writeSettingsToTria,
        triaData,
        triaStatus,
        triaSetting,
    };
}