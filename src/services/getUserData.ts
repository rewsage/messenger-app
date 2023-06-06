import { get, ref } from "firebase/database";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

function getUserData(uid: string) {
	const userRef = ref(db, DB_NODES.USERS + uid);
	return get(userRef);
}
