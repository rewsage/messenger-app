import React from "react";
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

function Chat(): JSX.Element {
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>AR</Avatar>
			</ListItemAvatar>
			<ListItemText
				secondary={
					<Typography variant="body2" color="text.secondary">
						Hello, my name is Aleksandr Rubandov, join to...
					</Typography>
				}>
				<Typography variant="subtitle2">Aleksandr Rubanov</Typography>
			</ListItemText>
		</ListItem>
	);
}

export { Chat };
