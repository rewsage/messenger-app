import { get, ref, update } from "firebase/database";
import { Members } from "@/features/chats/types";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

async function deleteChat(chatId: string) {
	const snapshot = await get(ref(db, DB_NODES.CHATS + chatId + "/members"));
	const members = snapshot.val() as Members | null;

	if (members) {
		const memberIds = Object.keys(members);

		const updates = {
			[DB_NODES.CHATS + chatId]: null,
		};

		memberIds.forEach((id) => {
			updates[DB_NODES.CONVERSATIONS + id + "/" + chatId] = null;
		});

		return update(ref(db), updates);
	} else {
		throw Error("Error occured while deleting a chat: chat is not found");
	}
}

export { deleteChat };
