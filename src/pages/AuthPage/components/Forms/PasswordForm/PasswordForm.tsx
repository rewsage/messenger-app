import React from "react";
import { AuthForm } from "../AuthForm";
import { Lock as LockIcon } from "@mui/icons-material";

interface PasswordFormProps {
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

function PasswordForm({ value, onChange }: PasswordFormProps) {
	return (
		<AuthForm
			id="password"
			label="Password"
			placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
			icon={<LockIcon />}
			type="password"
			value={value}
			onChange={onChange}
		/>
	);
}

export { PasswordForm };
