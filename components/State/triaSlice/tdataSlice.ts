import {  initialState, TxData } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Alert } from "react-native";

const MAX_DATA = 100;
export const tdataSlice = createSlice({
    name: 'data',
    initialState,
    
    reducers: {
        addTdata: (state, action : PayloadAction<TxData>) => {
           //Alert.alert(action.payload.txValue); 
          if(action.payload.txValue != null && parseFloat(action.payload.txValue.split(':')[0]) > 0.0 ){
           if (state.tdataList.length <= MAX_DATA){
             state.tdataList.push( action.payload);
           }else{
            state.tdataList = state.tdataList.slice(1);
            state.tdataList.push(action.payload);
           }
        }
      }
    }
});

export const { addTdata } = tdataSlice.actions;
