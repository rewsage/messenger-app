import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Chat, Chats } from "@/features/chats/types";

const initialState: Chats = {};

const chatsSlice = createSlice({
	name: "chats",
	initialState,
	reducers: {
		updateChats(
			state,
			action: PayloadAction<{ chatId: string; data: Chat | null }>
		) {
			const { chatId, data } = action.payload;
			if (data) {
				state[chatId] = data;
			} else {
				delete state[chatId];
			}
		},
	},
});

export const chatsReducer = chatsSlice.reducer;
export const { updateChats } = chatsSlice.actions;
