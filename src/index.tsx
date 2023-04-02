import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/assets/theme";
import { Provider } from "react-redux";
import { store } from "@/app/index";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
