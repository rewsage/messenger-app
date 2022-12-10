import React from "react";
import { Divider, Typography, Box } from "@mui/material";

function Sidebar(): JSX.Element {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<Typography variant="body1" color="initial">
				Hello
			</Typography>
			<Divider />
			<Typography variant="body1" color="initial">
				Bye
			</Typography>
			<Divider />
			<Typography variant="body1" color="initial">
				Alexsandr
			</Typography>
			<Divider />
			<Typography variant="body1" color="initial">
				The first
			</Typography>
			<Divider />
		</Box>
	);
}

export { Sidebar };
