import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "firebase/auth";
import { UserData } from "@/types";

const initialState: UserData = {
	uid: null,
	name: null,
	email: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser(state, action: PayloadAction<UserInfo | null>) {
			const user = action.payload;
			if (user) {
				return {
					uid: user.uid,
					name: user.displayName,
					email: user.email,
				};
			} else {
				return initialState;
			}
		},
	},
});

export const userReducer = userSlice.reducer;
export const { updateUser } = userSlice.actions;
