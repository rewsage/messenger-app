import { useEffect, useState } from "react";
import { UserInfo, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "@/app/hooks";
import { updateUser } from "@/features/user/userSlice";
import { auth } from "@/services";

function useInitStatus() {
	const [isInit, setIsInit] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const loadingStart = Date.now();

		const listener = onAuthStateChanged(auth, (user) => {
			dispatch(updateUser(user?.toJSON() as UserInfo));
			console.log(user);

			setTimeout(
				() => setIsInit(true),
				800 - (Date.now() - loadingStart)
			);
		});

		return listener;
	}, [dispatch]);

	return isInit;
}

export { useInitStatus };
