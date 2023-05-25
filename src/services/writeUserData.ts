import { ref, set } from "firebase/database";
import { db } from "@/services";
import { DB_NODES } from "@/utils";

type writeUserData = (...params: string[]) => Promise<void>;

const writeUserData: writeUserData = (uid, nickname, email) => {
	return set(ref(db, DB_NODES.USERS + uid), {
		nickname: nickname,
		email: email,
	});
};

export { writeUserData };
