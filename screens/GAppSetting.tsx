import React from 'react'
import { Alert } from 'react-native';
import AppSetting from '../components/AppSet/AppSetting';
import { useAppSelector } from '../components/State/hooks';


const GAppSetting = () => {
  var SettingList = useAppSelector((state) => state.setting.settingList);
  return  <AppSetting data={SettingList} />;
}

export default GAppSetting;
