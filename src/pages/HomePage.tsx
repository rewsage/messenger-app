import React from "react";
import { Outlet } from "react-router";
import { Box, CssBaseline } from "@mui/material";
import { Sidebar } from "@/features/chats";
import { useChats } from "@/features/chats";
import { useUserData } from "@/features/user";

function HomePage(): JSX.Element {
	useChats();
	useUserData();

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Sidebar />
			<Box>
				<Outlet />
			</Box>
		</Box>
	);
}

export { HomePage };
