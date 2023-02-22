import { FormControl, FormControlProps } from "@mui/material";
import { styled } from "@mui/material";

const AuthForm = styled(FormControl)<FormControlProps>(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		"&:hover fieldset": {
			borderColor: theme.palette.primary.main,
		},
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderWidth: 2,
	},
}));

export { AuthForm };
