import React, {useState} from 'react'

export const TriaState = () => {
    const [triaDeviceData, setTriaDeviceData] = useState("<>");
    const [triaDeviceStatus, setTriaDeviceStatus] = useState("<>");
    const [triaDeviceSetting, setTriaDeviceSetting] = useState("<>");
    
  return {
        triaDeviceData,
        setTriaDeviceData,
        triaDeviceStatus,
        setTriaDeviceStatus,
        triaDeviceSetting,
        setTriaDeviceSetting
  };
};

