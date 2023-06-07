import { get, ref } from "firebase/database";
import { db } from "@/services/firebase";

async function getNodeData(path: string) {
	const nodeRef = ref(db, path);
	const snapshot = await get(nodeRef);

	return snapshot.val();
}

export { getNodeData };
