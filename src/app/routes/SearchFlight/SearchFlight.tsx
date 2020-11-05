import * as React from "react";
import {
	Box,
	Button,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FlightQuery } from "../../types/Flight";

interface SearchFlightProps {
	onSubmitSearch?: (data: FlightQuery) => void;
	isLoading?: boolean;
}

const schema = Yup.object({
	flight: Yup.string()
		.length(6, "Must have only 6 characters")
		.required("Fill your flight number"),
	lastName: Yup.string()
		.min(3, "Minimun")
		.max(20, "Must be 20 characters or less")
		.required("Fill your last name"),
});

function SearchFlight({ onSubmitSearch, isLoading }: SearchFlightProps) {
	const { values, errors, handleChange, handleSubmit } = useFormik<
		FlightQuery
	>({
		initialValues: {
			flight: "",
			lastName: "",
		},
		validationSchema: schema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit(submitValues) {
			onSubmitSearch?.(submitValues);
		},
	});
	return (
		<Grid container spacing={4} direction="column">
			<Grid item xs={12}>
				<Typography variant="h4">
					Welcome to your web check-in
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3} direction="column">
						<Grid item xs={12} md={4}>
							<TextField
								id="flight"
								type="text"
								label="Flight #"
								placeholder="A3C1B3"
								fullWidth
								required
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									"data-testid": "flight",
									maxLength: 6,
								}}
								onChange={handleChange}
								value={values.flight}
								error={!!errors.flight}
								helperText={errors.flight ?? "ex.: A3C1B3"}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								id="lastName"
								type="text"
								label="Last Name"
								fullWidth
								required
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									"data-testid": "lastName",
								}}
								onChange={handleChange}
								value={values.lastName}
								error={!!errors.lastName}
								helperText={errors.lastName}
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<Box pt={2}>
								<Button
									fullWidth
									color="primary"
									variant="contained"
									type="submit"
									data-testid="submit"
									disabled={isLoading}
								>
									{isLoading ? (
										<CircularProgress size={18} />
									) : (
										"Search Flight"
									)}
								</Button>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default SearchFlight;
