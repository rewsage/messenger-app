import { ref, set } from "firebase/database";
import { db } from "@/services";
import { UserData } from "@/types";
import { DB_NODES } from "@/utils";

const writeUserData = (uid: string, data: UserData) => {
	return set(ref(db, DB_NODES.USERS + uid), data);
};

export { writeUserData };
