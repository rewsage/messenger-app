import React from "react";
import {
	List,
	ListItem,
	Divider,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
} from "@mui/material";

function ChatList(): JSX.Element | null {
	// const usersData = [
	// 	{
	// 		username: "Alex Rubanov",
	// 		avatar: "AR",
	// 	},
	// ];

	// const listItems = Array(2).map((value, index) => {
	// 	return 0;
	// });

	return (
		<List>
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
					<Typography variant="subtitle2">
						Aleksandr Rubanov
					</Typography>
				</ListItemText>
			</ListItem>
			<Divider sx={{ mx: 2 }} />
		</List>
	);
}

export { ChatList };
