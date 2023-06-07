import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { updateUserData } from "@/features/user";
import { subscribeToNode } from "@/services/subscribeToNode";
import { UserData } from "@/types";
import { DB_NODES } from "@/utils";

function useUserData() {
	const { uid, userData } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	console.log("userData: ", userData);

	useEffect(() => {
		if (uid) {
			return subscribeToNode<UserData>(DB_NODES.USERS + uid, (data) => {
				dispatch(updateUserData(data));
			});
		} else {
			dispatch(updateUserData(null));
			return;
		}
	}, [uid, dispatch]);
}

export { useUserData };
