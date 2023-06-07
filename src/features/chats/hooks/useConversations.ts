import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/hooks";
import { Conversations } from "@/features/chats/types";
import { subscribeToNode } from "@/services/subscribeToNode";
import { DB_NODES } from "@/utils";

function useConversations() {
	const { uid } = useAppSelector((state) => state.user);
	const [conversations, setConversations] = useState<Conversations>({});
	const conversationsPath = DB_NODES.CONVERSATIONS + uid;

	console.log("conversations: ", conversations);

	useEffect(() => {
		if (uid) {
			return subscribeToNode<Conversations>(conversationsPath, (data) => {
				setConversations(data ?? {});
			});
		} else {
			return setConversations({});
		}
	}, [uid, conversationsPath]);

	return conversations;
}

export { useConversations };
