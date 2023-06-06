import React from "react";
import { Loading } from "@/components";
import { useInitStatus } from "@/hooks";
import { AppRoutes } from "@/routes";

function App(): JSX.Element {
	const isInit = useInitStatus();

	return isInit ? <AppRoutes /> : <Loading />;
}

export { App };
