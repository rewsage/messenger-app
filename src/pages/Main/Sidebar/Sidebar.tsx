import React from "react";
import { Drawer, List, Box } from "@mui/material";

const defaultWidth = 200;

function Sidebar(): JSX.Element {
	return (
		<Drawer
			variant="permanent"
			sx={{
				width: defaultWidth,
				"& .MuiDrawer-paper": {
					width: defaultWidth,
					boxSizing: "border-box",
				},
			}}>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					zIndex: 10,
					bgcolor: "red",
					width: 5,
					cursor: "ew-resize",
				}}
			/>
			<List>
				<p>One</p>
				<p>Two</p>
				<p>Three</p>
				<p>Four</p>
			</List>
		</Drawer>
	);
}

export { Sidebar };
