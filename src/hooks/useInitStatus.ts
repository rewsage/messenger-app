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

export { useInitStatus };
