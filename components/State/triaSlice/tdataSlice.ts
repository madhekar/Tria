import {  initialState, TxData } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Alert } from "react-native";

export const tdataSlice = createSlice({
    name: 'data',
    initialState,
    
    reducers: {
        addTdata: (state, action : PayloadAction<TxData>) => {
           //Alert.alert(action.payload.txValue); 
           state.tdataList.push( action.payload);
            
            /* {id: state.tdataList[state.tdataList.length - 1].id + 1,
                                 txValue: action.payload.txValue,
                                 timeStamp: action.payload.timeStamp
                                }); */
        }
    }
});

export const { addTdata } = tdataSlice.actions;
