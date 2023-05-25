import React from "react";
import { Lock } from "@mui/icons-material";
import { OutlinedInputProps } from "@mui/material";
import { AuthField } from "../AuthField";

function PasswordField(props: OutlinedInputProps) {
	return (
		<AuthField
			name="password"
			label="Password"
			type="password"
			placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
			icon={<Lock />}
			{...props}
		/>
	);
}

export { PasswordField };
