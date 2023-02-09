import React from "react";
import { useState } from "react";
import { Drawer, List, Box } from "@mui/material";
import { DrawerWidth } from "@/constants";

function Sidebar(): JSX.Element {
	const [drawerWidth, setDrawerWidth] = useState(DrawerWidth.default);

	const handleMouseDown = (e: React.MouseEvent) => {
		addEventListener("mousemove", handleMouseMove);
		addEventListener("mouseup", handleMouseUp);
		e.preventDefault();
	};

	const handleMouseMove = (e: MouseEvent) => {
		const mousePos = e.clientX;
		if (mousePos < DrawerWidth.max && mousePos > DrawerWidth.min) {
			setDrawerWidth(mousePos);
		}
	};

	const handleMouseUp = () => {
		removeEventListener("mousemove", handleMouseMove);
		removeEventListener("mouseup", handleMouseUp);
	};

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
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
				onMouseDown={(e) => handleMouseDown(e)}
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
