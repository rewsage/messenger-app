import { useEffect, useState } from "react";
import { Unsubscribe, onValue, ref } from "firebase/database";
import { useConversations } from "@/features/chat/hooks";
import { Chat, Chats } from "@/features/chat/types";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

function useChats(uid: string) {
	const [chats, setChats] = useState<Chats>({});

	const conversations = useConversations(uid);

	useEffect(() => {
		const chatListeners: Unsubscribe[] = [];
		const chatIds = Object.keys(conversations);

		chatIds.forEach((chatId) => {
			const listener = subscribeToChat(chatId, (data) => {
				if (data) {
					setChats((chats) => ({
						...chats,
						[chatId]: data,
					}));
				} else {
					setChats((chats) => {
						const chatsCopy = { ...chats };
						delete chatsCopy[chatId];
						return chatsCopy;
					});
				}

				console.log(chatId, data);
			});

			chatListeners.push(listener);
		});

		return () => {
			chatListeners.forEach((listener) => listener());
		};
	}, [conversations]);

	return chats;
}

function subscribeToChat(
	chatId: string,
	callback: (data: Chat | null) => unknown
) {
	const chatRef = ref(db, DB_NODES.CHATS + chatId);

	const listener = onValue(chatRef, (snapshot) => {
		const data = snapshot.val() as Chat | null;
		callback(data);
	});

	return listener;
}

export { useChats };
