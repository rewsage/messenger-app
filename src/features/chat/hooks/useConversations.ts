import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { Conversations } from "@/features/chat/types";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

function useConversations(uid: string) {
	const [conversations, setConversations] = useState<Conversations>({});
	console.log("conversations: ", conversations);

	useEffect(() => {
		return subscribeToConversations(uid, (data) => {
			setConversations(data ?? {});
		});
	}, [uid]);

	return conversations;
}

function subscribeToConversations(
	uid: string,
	callback: (data: Conversations | null) => unknown
) {
	const conversationsRef = ref(db, DB_NODES.CONVERSATIONS + uid);

	const listener = onValue(conversationsRef, (snapshot) => {
		const data = snapshot.val() as Conversations | null;
		callback(data);
	});

	return listener;
}

export { useConversations };
