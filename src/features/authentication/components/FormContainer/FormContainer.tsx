import React from "react";
import { Box, BoxProps } from "@mui/material";

interface FormContainerProps extends BoxProps<"form"> {
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function FormContainer(props: FormContainerProps) {
	return (
		<Box
			component="form"
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
			{...props}></Box>
	);
}

export { FormContainer };
