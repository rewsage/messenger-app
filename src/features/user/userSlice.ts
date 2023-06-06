import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "@/types";

interface UserState {
	uid: string | null;
	userData?: UserData;
}

const initialState: UserState = {
	uid: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeUid(state, action: PayloadAction<string | null>) {
			state.uid = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { changeUid } = userSlice.actions;
