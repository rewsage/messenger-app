import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";

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
