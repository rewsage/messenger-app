import { ref, set } from "firebase/database";
import { db } from "@/services";

type writeUserData = (...params: string[]) => Promise<void>;

const writeUserData: writeUserData = (userId, name, email) => {
	return set(ref(db, "users/" + userId), {
		username: name,
		email: email,
	});
};

export { writeUserData };
