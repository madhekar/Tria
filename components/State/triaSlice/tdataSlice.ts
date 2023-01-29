import {  initialState, TxData } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Alert } from "react-native";

const MAX_DATA = 20;
export const tdataSlice = createSlice({
    name: 'data',
    initialState,
    
    reducers: {
        addTdata: (state, action : PayloadAction<TxData>) => {
           //Alert.alert(action.payload.txValue); 
           if (state.tdataList.length <= MAX_DATA){
             state.tdataList.push( action.payload);
           }else{
            state.tdataList = state.tdataList.slice(1);
            state.tdataList.push(action.payload);
           }
          
           //state.tdataList.push( action.payload);
            
            /* {id: state.tdataList[state.tdataList.length - 1].id + 1,
                                 txValue: action.payload.txValue,
                                 timeStamp: action.payload.timeStamp
                                }); */
        }
    }
});

export const { addTdata } = tdataSlice.actions;
