import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "@/types";

interface UserState {
	uid: string | null;
	userData: UserData | null;
}

const initialState: UserState = {
	uid: null,
	userData: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeUid(state, action: PayloadAction<string | null>) {
			const uid = action.payload;
			return { ...initialState, uid };
		},
		updateUserData(state, action: PayloadAction<UserData | null>) {
			state.userData = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { changeUid, updateUserData } = userSlice.actions;
