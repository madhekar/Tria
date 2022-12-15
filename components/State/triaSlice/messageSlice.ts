import { initialState, Message, messageList } from "../types";
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

let lastId = 0;

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messageList.push(action.payload);
        },
        updateMessage: (state, action: PayloadAction<Message>) => {
            const {
                payload: {id, msg, sent},
            } = action;

            state.messageList = state.messageList.map((message) => 
               message.id === id ? {...message, sent, msg} : message,
            );
        },
        removeMessage: (state, acton: PayloadAction<{id: number}>) => {
            state.messageList = state.messageList.filter((message) => message.id !== acton.payload.id);
        },
    },
});

export const { addMessage, updateMessage, removeMessage } = messageSlice.actions;