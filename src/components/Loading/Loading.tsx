import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";
import { ContainerLayout } from "@/layouts";

function Loading(props: CircularProgressProps) {
	return (
		<ContainerLayout>
			<CircularProgress size={80} thickness={4} {...props} />
		</ContainerLayout>
	);
}

export { Loading };
