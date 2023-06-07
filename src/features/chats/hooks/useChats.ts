import { useEffect } from "react";
import { Unsubscribe } from "firebase/database";
import { useAppDispatch } from "@/app/hooks";
import { updateChats } from "@/features/chats";
import { useConversations } from "@/features/chats/hooks";
import { Chat } from "@/features/chats/types";
import { subscribeToNode } from "@/services/subscribeToNode";
import { DB_NODES } from "@/utils";

function useChats() {
	const dispatch = useAppDispatch();
	const conversations = useConversations();

	useEffect(() => {
		const chatListeners: Unsubscribe[] = [];
		const chatIds = Object.keys(conversations);

		chatIds.forEach((chatId) => {
			const listener = subscribeToNode<Chat>(
				DB_NODES.CHATS + chatId,
				(data) => {
					dispatch(updateChats({ chatId, data }));
					console.log(chatId, data);
				}
			);

			chatListeners.push(listener);
		});

		return () => {
			chatListeners.forEach((listener) => listener());
		};
	}, [dispatch, conversations]);
}

export { useChats };
