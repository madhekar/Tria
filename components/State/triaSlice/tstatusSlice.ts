import {  initialState, TxStatus } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tstatusSlice = createSlice({
    name: 'TxStatus',
    initialState,
    
    reducers: {
        addTstatus: (state, action: PayloadAction<TxStatus>) => {
            state.tstatusList.push(action.payload);
        },
    }
});
export const { addTstatus } = tstatusSlice.actions;