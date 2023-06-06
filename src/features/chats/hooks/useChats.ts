import { useEffect } from "react";
import { Unsubscribe, onValue, ref } from "firebase/database";
import { useAppDispatch } from "@/app/hooks";
import { updateChats } from "@/features/chats";
import { useConversations } from "@/features/chats/hooks";
import { Chat } from "@/features/chats/types";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

function useChats() {
	const dispatch = useAppDispatch();
	const conversations = useConversations();

	useEffect(() => {
		const chatListeners: Unsubscribe[] = [];
		const chatIds = Object.keys(conversations);

		chatIds.forEach((chatId) => {
			const listener = subscribeToChat(chatId, (data) => {
				dispatch(updateChats({ chatId, data }));
				console.log(chatId, data);
			});

			chatListeners.push(listener);
		});

		return () => {
			chatListeners.forEach((listener) => listener());
		};
	}, [dispatch, conversations]);
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
