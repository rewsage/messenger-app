import React from "react";
import { CircularProgress } from "@mui/material";
import { AppRoutes } from "@/routes";
import { useInitStatus } from "./hooks";
import { ContainerLayout } from "./layouts";

function App(): JSX.Element {
	const isInit = useInitStatus();

	return isInit ? (
		<AppRoutes />
	) : (
		<ContainerLayout>
			<CircularProgress size={80} thickness={4} />
		</ContainerLayout>
	);
}

export { App };
