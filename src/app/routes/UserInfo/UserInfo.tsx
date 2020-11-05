import * as React from "react";
import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	Select,
	TextField,
	Typography,
} from "@material-ui/core";
import { useFormik } from "formik";

import { FlightResponse } from "../../types/Flight";
import { countries, renderExtraInfo } from "./UserInfo.data";
import UserInfoExtra from "./UserInfo.extra";

interface UserInfoProps {
	user: FlightResponse;
	onSubmitConfimation?: (data: any) => void;
	isLoading?: boolean;
}

function UserInfo({ user, onSubmitConfimation, isLoading }: UserInfoProps) {
	const [isConfirming, setIsConfiming] = React.useState(false);
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			firstName: user.firstName,
			lastName: user.lastName,
			terms: false,
			nationality: "",
			email: "",
			phone: "",
			passport: "",
			residenceAddress: "",
			residenceCity: "",
			residenceCountry: "",
			birthDate: "",
			birthPlace: "",
			passportDateIssue: "",
			passportLocationIssue: "",
			passportExpirity: "",
		},
		onSubmit(submitValues) {
			if (!isConfirming) {
				setIsConfiming(true);
				return;
			}
			onSubmitConfimation?.(submitValues);
		},
	});

	const goEdit = React.useCallback(() => setIsConfiming(false), []);

	const extraInfo = React.useMemo(() => renderExtraInfo(values.nationality), [
		values.nationality,
	]);

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h6" data-testid="flight">
					Flight #{user.flight.toUpperCase()}
				</Typography>
				<Typography variant="body1" data-testid="message">
					{isConfirming
						? "Please review your information"
						: `Hi, Mr/Ms. ${values.lastName}`}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<form data-testid="form" onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<TextField
								id="firstName"
								type="text"
								label="First Name"
								fullWidth
								inputProps={{
									"data-testid": "firstName",
								}}
								onChange={
									!isConfirming ? handleChange : undefined
								}
								value={values.firstName}
								error={!!errors.firstName}
								helperText={errors.firstName}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								id="lastName"
								type="text"
								label="Last Name"
								fullWidth
								inputProps={{
									"data-testid": "lastName",
								}}
								onChange={
									!isConfirming ? handleChange : undefined
								}
								value={values.lastName}
								error={!!errors.lastName}
								helperText={errors.lastName}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormControl fullWidth required>
								<InputLabel htmlFor="nationality">
									Nationality
								</InputLabel>
								<Select
									native
									value={values.nationality}
									label="Nationality"
									onChange={
										!isConfirming ? handleChange : undefined
									}
									id="nationality"
									inputProps={{
										"data-testid": "nationality",
										value: values.nationality,
									}}
									error={!!errors.nationality}
									required
								>
									<option aria-label="None" value="" />
									{countries.map((country) => (
										<option
											value={country.code}
											key={country.code}
											data-testid="nationality-option"
										>
											{country.name}
										</option>
									))}
								</Select>
							</FormControl>
						</Grid>
						<UserInfoExtra
							errors={errors}
							extraInfo={extraInfo}
							handleChange={handleChange}
							isConfirming={isConfirming}
							values={values}
						/>
						<Grid item xs={12} md={6}>
							<TextField
								id="email"
								type="email"
								label="Email"
								fullWidth
								inputProps={{
									"data-testid": "email",
								}}
								onChange={
									!isConfirming ? handleChange : undefined
								}
								value={values.email}
								error={!!errors.email}
								helperText={errors.email}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								id="phone"
								type="tel"
								label="Phone number"
								fullWidth
								inputProps={{
									"data-testid": "phone",
								}}
								onChange={
									!isConfirming ? handleChange : undefined
								}
								value={values.phone}
								error={!!errors.phone}
								helperText={errors.phone}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								id="passport"
								type="text"
								label="Passport #"
								fullWidth
								inputProps={{
									"data-testid": "passport",
								}}
								onChange={
									!isConfirming ? handleChange : undefined
								}
								value={values.passport}
								error={!!errors.passport}
								helperText={errors.passport}
								required
							/>
						</Grid>
						{!isConfirming && (
							<Grid item xs={12}>
								<FormControlLabel
									style={{ width: "100%" }}
									data-testid="terms"
									control={
										<Checkbox
											checked={values.terms}
											onChange={
												!isConfirming
													? handleChange
													: undefined
											}
											name="terms"
											required
										/>
									}
									label="Accepts T&C"
								/>
							</Grid>
						)}
						<Grid item xs={12}>
							<Box pt={2}>
								<Grid container spacing={2}>
									{isConfirming && (
										<Grid item xs={12} md={2}>
											<Button
												fullWidth
												color="secondary"
												variant="contained"
												type="button"
												data-testid="edit"
												disabled={isLoading}
												onClick={goEdit}
											>
												Edit
											</Button>
										</Grid>
									)}
									<Grid item xs={12} md={2}>
										<Button
											fullWidth
											color="primary"
											variant="contained"
											type="submit"
											data-testid="submit"
											disabled={
												isLoading || !values.terms
											}
										>
											{isLoading ? (
												<CircularProgress size={24} />
											) : (
												"Continue"
											)}
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default UserInfo;
