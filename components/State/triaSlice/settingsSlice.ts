import {  initialState } from "../types";
import {SettingProps as Settings} from '../../AppSet/types'
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

let lastId = 0;

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    
    reducers: {
        addSetting: (state, action: PayloadAction<Settings>) => {
            state.settingList.push(action.payload);
        },
        updateSetting: (state, action: PayloadAction<Settings>) => {
            const {
                payload: {id, title, subTitle},
            } = action;

            state.settingList = state.settingList.map((setting) => 
               setting.id === id ? {...setting, title, subTitle} : setting,
            );
        },
        removeSetting: (state, acton: PayloadAction<{id: number}>) => {
            state.settingList = state.settingList.filter((setting) => setting.id !== acton.payload.id);
        },
    },
});

export const { addSetting, updateSetting, removeSetting } = settingSlice.actions;