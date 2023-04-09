import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { AuthTabs } from "@/utils";
import { Login } from "./components";
import { SignUp } from "./components";

function AuthPage(): JSX.Element {
	const [tabName, setTabName] = useState<AuthTabs>(AuthTabs.Login);

	const getCurrentTab = () => {
		switch (tabName) {
			case AuthTabs.Login: {
				return (
					<Login
						switchTab={(tabName: AuthTabs) => setTabName(tabName)}
					/>
				);
			}
			case AuthTabs.SignUp: {
				return (
					<SignUp
						switchTab={(tabName: AuthTabs) => setTabName(tabName)}
					/>
				);
			}
			case AuthTabs.PasswordResset: {
				return null;
			}
		}
	};

	return (
		<>
			<CssBaseline />
			<Container>
				<Box
					sx={{
						display: "flex",
						height: "100vh",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							minWidth: {
								xs: 1,
								sm: 3 / 4,
								md: 1 / 2,
								lg: 1 / 3,
							},
							bgcolor: "white",
							borderRadius: 2,
							p: 3,
						}}>
						{getCurrentTab()}
					</Box>
				</Box>
			</Container>
		</>
	);
}

export { AuthPage };
