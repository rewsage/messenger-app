import { ref, set, update } from "firebase/database";
import { getChatId } from "@/features/chats/utils";
import { db, nodeExists } from "@/services";
import { DB_NODES } from "@/utils";

async function createChat(currentUid: string, companionUid: string) {
	const chatId = getChatId(currentUid, companionUid);
	const chatExists = await nodeExists(DB_NODES.CHATS + chatId);

	if (chatExists) {
		throw Error("Error occured while chat creating: chat already exists");
	}

	const userExists = await nodeExists(DB_NODES.USERS + companionUid);

	if (userExists) {
		await createConversation(currentUid, companionUid);
		await set(ref(db, DB_NODES.CHATS + chatId), {
			title: "Chat with",
			members: {
				[currentUid]: true,
				[companionUid]: true,
			},
		});

		return chatId;
	} else {
		throw Error("Error occured while chat creating: user is not found");
	}
}

function createConversation(firstUid: string, secondUid: string) {
	const chatId = getChatId(firstUid, secondUid);

	const conversationData = {
		smth: "const",
	};

	const updates = {
		[firstUid + "/" + chatId]: conversationData,
		[secondUid + "/" + chatId]: conversationData,
	};

	return update(ref(db, DB_NODES.CONVERSATIONS), updates);
}

export { createChat };
