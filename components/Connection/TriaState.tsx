import React, {useState} from 'react'

export const TriaState = () => {
    const [triaDeviceData, setTriaDeviceData] = useState("<>");
    const [triaDeviceStatus, setTriaDeviceStatus] = useState("<>");
    const [triaDeviceTimestamp, setTriaDeviceTimestamp] = useState("<>");
    
  return {
        triaDeviceData,
        setTriaDeviceData,
        triaDeviceStatus,
        setTriaDeviceStatus,
        triaDeviceTimestamp,
        setTriaDeviceTimestamp
  };
};

export const TriaSettings = () => {
   const[triaTempHiChange, setTriaTempHiChange] =useState("");
   const[triaTempLoChange, setTriaTempLoChange] =useState("");
   const[triaHumHiChange, setTriaHumHiChange] =useState("");
   const[triaHumLoChange, setTriaHumLoChange] =useState("");
   const[triaAqHiChange, setTriaAqHiChange] =useState("");
   const[triaAqLoChange, setTriaAqLoChange] =useState("");

   return{
    triaTempHiChange,
    setTriaTempHiChange,
    triaTempLoChange,
    setTriaTempLoChange,
    triaHumHiChange,
    setTriaHumHiChange,
    triaHumLoChange,
    setTriaHumLoChange,
    triaAqHiChange,
    setTriaAqHiChange,
    triaAqLoChange,
    setTriaAqLoChange,
   };
};

