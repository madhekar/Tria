import {  initialState, Tstatus } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tstatusSlice = createSlice({
    name: 'transStatus',
    initialState,
    
    reducers: {
        addTstatus: (state, action: PayloadAction<Tstatus>) => {
            state.tstatusList.add(action.payload);
        },
    }
});
export const { addTstatus } = tstatusSlice.actions;