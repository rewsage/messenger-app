import React from "react";
import { useField } from "formik";
import { AuthForm, AuthFormProps } from "../../AuthForm";

function AuthField(props: AuthFormProps) {
	const [field, meta] = useField(props.name);

	return (
		<AuthForm
			{...field}
			{...props}
			error={meta.touched && Boolean(meta.error)}
			helperText={(meta.touched && meta.error) || undefined}
		/>
	);
}

export { AuthField };
