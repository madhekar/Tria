import {  initialState, TxData } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tdataSlice = createSlice({
    name: 'TxData',
    initialState,
    
    reducers: {
        addTdata: (state, action : PayloadAction<TxData>) => {
           state.tdataList.push({id: state.tdataList[state.tdataList.length - 1].id + 1,
                                 txValue: action.payload.txValue,
                                 timeStamp: action.payload.timeStamp
                                });
        }
    }
});

export const { addTdata } = tdataSlice.actions;
