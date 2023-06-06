import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "@/app/hooks";
import { changeUid } from "@/features/user/userSlice";
import { auth } from "@/services";
import { delay } from "@/utils/helpers";

function useInitStatus() {
	const [isInit, setIsInit] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const loadingStart = Date.now();

		const listener = onAuthStateChanged(auth, async (user) => {
			const uid = user?.uid ?? null;
			dispatch(changeUid(uid));
			console.log(user);

			const loadingEnd = Date.now();
			await delay(500 - (loadingEnd - loadingStart));

			setIsInit(true);
		});

		return listener;
	}, [dispatch]);

	return isInit;
}

// function useUserData(uid: string) {
// 	const [userData, setUserData] = useState<UserData | null>(null);
// 	console.log("userData: ", userData);

// 	useEffect(() => {
// 		return subscribeToUserData(uid, (data) => {
// 			setUserData(data);
// 		});
// 	}, [uid]);

// 	return userData;
// }

// function subscribeToUserData(
// 	uid: string,
// 	callback: (data: UserData | null) => unknown
// ) {
//     if (uid === "") return (() => {return});

// 	const userRef = ref(db, DB_NODES.USERS + uid);

// 	const listener = onValue(userRef, (snapshot) => {
// 		const data = snapshot.val() as UserData | null;
// 		callback(data);
// 	});

// 	return listener;
// }

export { useInitStatus };
