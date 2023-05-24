import { get, ref } from "firebase/database";
import { db } from "@/services";

async function nodeExists(path: string) {
	const nodeRef = ref(db, path);
	const snapshot = await get(nodeRef);

	return snapshot.exists();
}

export { nodeExists };
