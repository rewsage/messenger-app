import React from "react";
import { useState } from "react";
import { Box, Button, Drawer } from "@mui/material";
import { signOut } from "firebase/auth";
import { DRAWER_WIDTH } from "@/features/chat/utils";
import { auth } from "@/services";
import { Conversations } from "../Conversations";

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
			<Conversations />

			<Button
				variant="text"
				color="primary"
				onClick={() => signOut(auth)}>
				Sign out
			</Button>
		</Drawer>
	);
}

export { Sidebar };
