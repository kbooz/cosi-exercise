import * as React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

interface SuccessProps {
	onReset: () => void;
}

function Success({ onReset }: SuccessProps) {
	return (
		<Grid container direction="column">
			<Grid item xs={12}>
				<Typography variant="h4" data-testid="confirmation">
					Your check-in is confirmed!
				</Typography>
			</Grid>
			<Grid item xs={12} md={3}>
				<Box pt={4}>
					<Button
						onClick={onReset}
						variant="contained"
						color="primary"
						fullWidth
						data-testid="reset"
					>
						Reset
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
}

export default Success;
