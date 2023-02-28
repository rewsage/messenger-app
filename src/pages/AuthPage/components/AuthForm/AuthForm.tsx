import React from "react";
import {
	FormControl,
	FormControlProps,
	InputAdornment,
	InputLabel,
	OutlinedInput,
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

interface AuthFormProps {
	id: string;
	label?: string;
	placeholder?: string;
	icon?: JSX.Element | string;
	type?: string | undefined;
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

function AuthForm({
	id,
	label,
	value,
	onChange,
	icon,
	type,
	placeholder,
}: AuthFormProps) {
	return (
		<StyledFormControl margin="dense" size="small">
			<InputLabel
				htmlFor={`${id} - input`}
				variant="standard"
				sx={{
					fontSize: 18,
					fontWeight: 500,
				}}>
				{label}
			</InputLabel>
			<OutlinedInput
				id={`${id} - input`}
				type={type}
				startAdornment={
					<InputAdornment position="start">{icon}</InputAdornment>
				}
				sx={{ mt: 3 }}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</StyledFormControl>
	);
}

export { AuthForm };
