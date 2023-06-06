import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { useAppSelector } from "@/app/hooks";
import { Conversations } from "@/features/chats/types";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

function useConversations() {
	const { uid } = useAppSelector((state) => state.user);
	const [conversations, setConversations] = useState<Conversations>({});
	console.log("conversations: ", conversations);

	useEffect(() => {
		if (uid) {
			return subscribeToConversations(uid, (data) => {
				setConversations(data ?? {});
			});
		} else {
			setConversations({});
			return;
		}
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
