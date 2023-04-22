import React from "react";
import { Lock } from "@mui/icons-material";
import { AuthField } from "../AuthField";

function PasswordField() {
	return (
		<AuthField
			name="password"
			label="Password"
			type="password"
			placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
			icon={<Lock />}
		/>
	);
}

export { PasswordField };
