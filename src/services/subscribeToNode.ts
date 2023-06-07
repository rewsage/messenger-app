import { onValue, ref } from "firebase/database";
import { db } from "@/services/firebase";

function subscribeToNode<Data>(
	path: string,
	callback: (data: Data | null) => unknown
) {
	const nodeRef = ref(db, path);

	const listener = onValue(nodeRef, (snapshot) => {
		const data = snapshot.val();
		callback(data);
	});

	return listener;
}

export { subscribeToNode };
