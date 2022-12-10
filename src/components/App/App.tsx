import React from "react";
import { RouterProvider } from "react-router";
import { router } from "../../routes";

function App(): JSX.Element {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export { App };
