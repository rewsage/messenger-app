import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { AuthTabNames, AuthTabs } from "@/features/authentication/utils";

function AuthPage(): JSX.Element {
	const [tabName, setTabName] = useState(AuthTabNames.Login);

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
						{AuthTabs[tabName]({
							switchTab: (name) => setTabName(name),
						})}
					</Box>
				</Box>
			</Container>
		</>
	);
}

export { AuthPage };
