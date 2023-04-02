import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: null,
	},
	reducers: {
		updateUser(state, action) {
			state.data = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { updateUser } = userSlice.actions;
