import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import {
	Box,
	Divider,
	IconButton,
	List,
	TextField,
	Typography,
} from "@mui/material";
import { useAppSelector } from "@/app/hooks";
import { useChats } from "@/features/chat/hooks";
import { createChat, deleteChat } from "@/features/chat/services";
import { Chat } from "../Chat";

interface Chat {
	[key: string]: { title: string };
}

function Conversations(): JSX.Element {
	const [companionUid, setCompanionUid] = useState("");

	const currentUid = useAppSelector((state) => state.user.uid) as string;
	const chats = useChats(currentUid);

	const addChat = async () => {
		try {
			await createChat(currentUid, companionUid);
		} catch (err) {
			console.log(err);
		}
	};

	const dialogs = Object.keys(chats).map((chatId) => {
		const title = chats[chatId].title;

		return (
			<Box
				key={chatId}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: 2,
				}}>
				<Typography>{title}</Typography>

				<IconButton
					aria-label="delete"
					onClick={() => deleteChat(chatId)}>
					<DeleteIcon />
				</IconButton>
			</Box>
		);
	});

	return (
		<List>
			<Chat />
			<Divider sx={{ mx: 2 }} />
			<Chat />
			<Divider sx={{ mx: 2 }} />
			<Chat />
			<Divider sx={{ mx: 2 }} />

			<TextField
				onChange={(e) => setCompanionUid(e.target.value)}
				value={companionUid}></TextField>
			<IconButton
				aria-label=""
				size="small"
				sx={{
					margin: 1,
					borderRadius: 2,
					backgroundColor: "background.default",
					color: "primary.main",
				}}
				onClick={addChat}>
				<Add />
			</IconButton>

			{dialogs}
		</List>
	);
}

export { Conversations };
