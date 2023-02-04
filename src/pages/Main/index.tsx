import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

function Main(): JSX.Element {
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

export { Main };
