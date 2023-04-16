import React from "react";
import { Outlet } from "react-router";
import { Box, CssBaseline } from "@mui/material";
import { Sidebar } from "@/features/chat/";

function HomePage(): JSX.Element {
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
