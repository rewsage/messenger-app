import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CssBaseline } from "@mui/material";
import { Sidebar } from "../components";
import { Outlet } from "react-router";

function Root(): JSX.Element {
	return (
		<Grid container>
			<CssBaseline />
			<Grid xs={3}>
				<Sidebar />
			</Grid>
			<Grid xs={9}>
				<Outlet />
			</Grid>
		</Grid>
	);
}

export { Root };
