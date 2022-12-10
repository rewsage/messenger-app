import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
