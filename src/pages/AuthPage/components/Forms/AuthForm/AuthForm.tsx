import React from "react";
import {
	FormControl,
	FormControlProps,
	FormHelperText,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	OutlinedInputProps,
} from "@mui/material";
import { styled } from "@mui/material";

const StyledFormControl = styled(FormControl)<FormControlProps>(
	({ theme }) => ({
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: theme.palette.primary.main,
			},
		},
		"& .MuiOutlinedInput-notchedOutline": {
			borderWidth: 2,
		},
	})
);

interface AuthFormProps extends OutlinedInputProps {
	name?: string;
	label?: string;
	icon?: JSX.Element | string;
	helperText?: string;
}

function AuthForm({ name, label, icon, helperText, ...props }: AuthFormProps) {
	return (
		<StyledFormControl margin="none" size="small">
			<InputLabel
				htmlFor={`${name}-input`}
				variant="standard"
				sx={{
					fontSize: 18,
					fontWeight: 500,
				}}>
				{label}
			</InputLabel>
			<OutlinedInput
				id={`${name}-input`}
				name={name}
				startAdornment={
					<InputAdornment position="start">{icon}</InputAdornment>
				}
				sx={{ mt: 3 }}
				{...props}
			/>
			<FormHelperText
				id={`${name}-input`}
				error
				sx={{
					m: 0,
					mb: 1,
				}}>
				{helperText ?? " "}
			</FormHelperText>
		</StyledFormControl>
	);
}

export { AuthForm };
