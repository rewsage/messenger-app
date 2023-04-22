import React from "react";
import { Email } from "@mui/icons-material";
import { AuthField } from "../AuthField";

function EmailField() {
	return (
		<AuthField
			name="email"
			label="Email"
			placeholder="john@gmail.com"
			icon={<Email />}
		/>
	);
}

export { EmailField };
