import React from "react";
import { FieldValidator, useField } from "formik";
import { AuthForm, AuthFormProps } from "../../AuthForm";

interface AuthFieldProps extends AuthFormProps {
	validate?: FieldValidator;
}

function AuthField({ name, validate, ...props }: AuthFieldProps) {
	const [field, meta] = useField({ name, validate });

	return (
		<AuthForm
			error={meta.touched && Boolean(meta.error)}
			helperText={(meta.touched && meta.error) || undefined}
			{...field}
			{...props}
		/>
	);
}

export { AuthField, AuthFieldProps };
