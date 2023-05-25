import React from "react";
import { Email } from "@mui/icons-material";
import { OutlinedInputProps } from "@mui/material";
import { AuthField } from "../AuthField";

function EmailField(props: OutlinedInputProps) {
	return (
		<AuthField
			name="email"
			label="Email"
			placeholder="john@gmail.com"
			icon={<Email />}
			{...props}
		/>
	);
}

export { EmailField };
