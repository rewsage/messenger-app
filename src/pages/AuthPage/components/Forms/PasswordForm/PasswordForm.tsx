import React from "react";
import { Lock as LockIcon } from "@mui/icons-material";
import { AuthForm } from "../AuthForm";

function PasswordForm({ ...props }) {
	return (
		<AuthForm
			id="password"
			label="Password"
			placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
			icon={<LockIcon />}
			type="password"
			{...props}
		/>
	);
}

export { PasswordForm };
