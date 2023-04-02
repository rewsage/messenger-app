import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "@/app/hooks";
import { updateUser } from "@/features/user/userSlice";
import { AppRoutes } from "@/routes";
import { auth } from "@/services";

function App(): JSX.Element {
	const [isInit, setIsInit] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const listener = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(updateUser(user.email));
				console.log("User data listener: ", user);
			} else {
				dispatch(updateUser(null));
			}
			setIsInit(true);
		});

		return listener;
	}, [dispatch]);

	return isInit ? <AppRoutes /> : <></>;
}

export { App };
