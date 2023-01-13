import {  initialState, TxStatus } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tstatusSlice = createSlice({
    name: 'TxStatus',
    initialState,
    
    reducers: {
        addTstatus: (state, action: PayloadAction<TxStatus>) => {
            state.tstatusList.push({ id: state.tstatusList[state.tstatusList.length -1].id + 1, txStatusValue:action.payload.txStatusValue});
        },
    }
});
export const { addTstatus } = tstatusSlice.actions;