import * as React from "react";
import { TextField, Typography, Button, Grid } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FlightQuery } from "../../types/Flight";

interface SearchFlightProps {
	onSubmitSearch?: (data: FlightQuery) => void;
	disabled?: boolean;
}

const schema = Yup.object({
	flight: Yup.number().required("Fill your flight number"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Fill your last name"),
});

function SearchFlight({ onSubmitSearch, disabled }: SearchFlightProps) {
	const { values, errors, handleChange, handleSubmit } = useFormik<
		FlightQuery
	>({
		initialValues: {
			flight: 0,
			lastName: "",
		},
		validationSchema: schema,
		onSubmit(submitValues) {
			console.log(submitValues);
			onSubmitSearch?.(submitValues);
		},
	});
	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h3">
					Welcome to your web check-in
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								id="flight"
								type="number"
								label="Flight #"
								fullWidth
								inputProps={{
									"data-testid": "flightNumber",
								}}
								onChange={handleChange}
								value={values.flight}
								error={!!errors.flight}
								helperText={errors.flight}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="lastName"
								type="text"
								label="Last Name"
								fullWidth
								inputProps={{
									"data-testid": "lastName",
								}}
								onChange={handleChange}
								value={values.lastName}
								error={!!errors.lastName}
								helperText={errors.lastName}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								color="primary"
								variant="contained"
								type="submit"
								data-testid="submit"
								disabled={disabled}
							>
								Search Flight
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default SearchFlight;
