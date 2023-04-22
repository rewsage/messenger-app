import React from "react";
import { Button, ButtonProps } from "@mui/material";

function SubmitButton(props: ButtonProps) {
	return <Button type="submit" variant="contained" {...props} />;
}

export { SubmitButton };
