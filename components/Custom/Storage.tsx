import React from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

// store default data

// Storing Data
const storeData = async (storageKey: string, value: any) => {
    try {
      const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, jsonValue);
  
      return { msg: `Saving successful` };
    } catch (error) {
      // saving error
      console.log(error);
      return { error: true, msg: `Saving failed` };
    }
  }
  
  // Getting Data
  const getStringValue = async (storageKey: string) => {
    try {
      const value = await AsyncStorage.getItem(storageKey)
      return value
    } catch (error) {
      // error reading value
      console.log(error);
    }
  }
  const getObjectValue = async (storageKey: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      // error reading value
      console.log(error);
    }
  }
  
  // Updating Data
  const updateObjectData = async (storageKey: string, value: any) => {
    try {
      const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
      await AsyncStorage.mergeItem!(storageKey, jsonValue);
  
      const newData = typeof value === 'string' ? await getStringValue(storageKey) : await getObjectValue(storageKey);
  
      return { msg: `Updating successful`, data: newData };
    } catch (error) {
      // updating error
      console.log(error);
      return { error: true, msg: `Updating failed` };
    }
  }
  const upsertObjectData = async (storageKey: string, value: any) => {
    try {
      const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
      const oldValue = await AsyncStorage.getItem(storageKey);
  
      if (oldValue === null) {
        await storeData(storageKey, value);
      } else {
        await AsyncStorage.mergeItem!(storageKey, jsonValue);
      }
  
      const newData = typeof value === 'string' ? await getStringValue(storageKey) : await getObjectValue(storageKey);
  
      return { msg: `Updating successful`, data: newData };
    } catch (error) {
      // upserting error
      console.log(error);
      return { error: true, msg: `Updating failed` };
    }
  }
  
  // Remove Data
  const removeData = async (storageKey: string) => {
    try {
  
      await AsyncStorage.removeItem(storageKey);
      return { msg: `Removing successful` };
  
    } catch (error) {
      // removing error
      console.log(error);
      return { error: true, msg: `Removing failed` };
    }
  }
  
  
  // MUTLI FUNCS
  const multiGetData = async (storageKeys: string[]) => {
    try {
  
      const valuesArray = await AsyncStorage.multiGet(storageKeys)
      return valuesArray;
  
    } catch (error) {
      // multi getting error
      console.log(error)
    }
  }
  const multiSetData = async (keyValueArray: [string,string][]) => {
    try {
      /*
        keyValueAray: [
         ["@MyApp_user", "value_1"],
         ["@MyApp_user", "value_1"]
       ]
      */
      const valuesArray = await AsyncStorage.multiSet(keyValueArray)
      return valuesArray;
  
    } catch (error) {
      console.log(error)
    }
  }
  const multiUpdateData = async (keyValueArray: [string,string][], value: any) => {
    try {
      /*
        keyValueAray: [
         ["@MyApp_user", "value_1"],
         ["@MyApp_user", "value_1"]
       ]
      */
  
      await AsyncStorage.multiMerge!(keyValueArray);
      const keys = keyValueArray.map(item => item[0]);
      const newMultiData = await multiGetData(keys);
  
      return { msg: `Updating successful`, data: newMultiData };
    } catch (error) {
      // multi updating error
      console.log(error);
      return { error: true, msg: `Updating failed` };
    }
  }
  const multiRemoveData = async (storageKeys: string[]) => {
    try {
  
      await AsyncStorage.multiRemove(storageKeys)
      return { msg: `Removing successful` };
  
    } catch (error) {
      // multi removing error
      console.log(error);
      return { error: true, msg: `Removing failed` };
    }
  }
  
  // SPECIALS
  const getAllStorageKeys = async () => {
    try {
  
      const keys = await AsyncStorage.getAllKeys()
      return keys;
  
    } catch (error) {
      // read key error
      console.log(error)
    }
  }
  const clearStore = async () => {
    try {
      await AsyncStorage.clear();
      return { msg: `Store clearing successful` };
    } catch (error) {
      // clearing error
      console.log(error);
      return { error: true, msg: `Store clearing failed` };
    }
  }

  export const StoreKeyMap = {
    deviceSettings: 'deviceSettings',
    deviceData: 'deviceData',
    applianceData: 'applianceData',
  }

const Storage = {
    storeData,
    getStringValue, getObjectValue,
    updateObjectData, upsertObjectData,
    removeData,
  
    multiSetData,
    multiGetData,
    multiUpdateData,
    multiRemoveData,
  
    getAllStorageKeys,
    clearStore,
}

export default Storage;
