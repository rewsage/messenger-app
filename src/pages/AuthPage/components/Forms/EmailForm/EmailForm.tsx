import React from "react";
import { Email as EmailIcon } from "@mui/icons-material";
import { AuthForm } from "../AuthForm";

interface EmailFormProps {
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

function EmailForm({ value, onChange }: EmailFormProps) {
	return (
		<AuthForm
			id="email"
			label="Email"
			placeholder="john@gmail.com"
			icon={<EmailIcon />}
			value={value}
			onChange={onChange}
		/>
	);
}

export { EmailForm };
