import {  initialState, Tdata } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tdataSlice = createSlice({
    name: 'transData',
    initialState,
    
    reducers: {
        addTdata: (state, action : PayloadAction<Tdata>) => {
           state.tdataList.add(action.payload);
        }
    }
});

export const { addTdata } = tdataSlice.actions;
