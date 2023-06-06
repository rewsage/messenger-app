import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "@/features/chats";
import { userReducer } from "@/features/user";

export const store = configureStore({
	reducer: {
		user: userReducer,
		chats: chatsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
