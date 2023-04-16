import { Box, Link, Typography } from "@mui/material";
import React from "react";

interface FooterProps {
	linkText: string;
	helperText?: string;
	onLinkClick?: (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => void;
}

function Footer({ helperText, linkText, onLinkClick }: FooterProps) {
	return (
		<Box display="flex" justifyContent="center" mt={2}>
			<Typography variant="body2" color="text.secondary">
				{helperText}&nbsp;
			</Typography>
			<Link
				component="button"
				type="button"
				variant="body2"
				onClick={onLinkClick}>
				{linkText}
			</Link>
		</Box>
	);
}

export { Footer };
