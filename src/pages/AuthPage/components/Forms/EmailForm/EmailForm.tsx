import React from "react";
import { Email as EmailIcon } from "@mui/icons-material";
import { AuthForm } from "../AuthForm";

function EmailForm({ ...props }) {
	return (
		<AuthForm
			id="email"
			label="Email"
			placeholder="john@gmail.com"
			icon={<EmailIcon />}
			{...props}
		/>
	);
}

export { EmailForm };
