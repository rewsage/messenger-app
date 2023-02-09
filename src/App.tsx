import React from "react";
import { RouterProvider } from "react-router";
import { router } from "@/pages";

function App(): JSX.Element {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export { App };
