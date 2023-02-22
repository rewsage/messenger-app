import React from "react";
import { useState } from "react";
import { Drawer, Box } from "@mui/material";
import { DRAWER_WIDTH } from "@/utils";
import { ChatList } from "../ChatList";

function Sidebar(): JSX.Element {
	const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.DEFAULT);

	const handleMouseDown = (e: React.MouseEvent) => {
		addEventListener("mousemove", handleMouseMove);
		addEventListener("mouseup", handleMouseUp);
		e.preventDefault();
	};

	const handleMouseMove = (e: MouseEvent) => {
		const mousePos = e.clientX;
		if (mousePos < DRAWER_WIDTH.MAX && mousePos > DRAWER_WIDTH.MIN) {
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
			<ChatList />
		</Drawer>
	);
}

export { Sidebar };
