import React from "react";
import { Typography } from "@mui/material";

interface HeaderProps {
	title: string;
	subtitle?: string;
}

function Header({ title, subtitle = "" }: HeaderProps): JSX.Element {
	return (
		<>
			<Typography variant="h4">{title.toLocaleUpperCase()}</Typography>
			<Typography variant="body2" mb={3} color="text.secondary">
				{subtitle.toUpperCase()}
			</Typography>
		</>
	);
}

export { Header };
