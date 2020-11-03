import * as React from "react";
import {
	TextField,
	Typography,
	Button,
	Grid,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";
import { useFormik } from "formik";

import { FlightResponse } from "../../types/Flight";

interface UserInfoProps {
	user: FlightResponse;
	onSubmitConfimation?: (data: any) => void;
	disabled?: boolean;
}

function UserInfo({ user, onSubmitConfimation, disabled }: UserInfoProps) {
	const [isConfirming, setIsConfiming] = React.useState(false);
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			firstName: user.firstName,
			lastName: user.lastName,
			terms: false,
			email: "",
			phone: "",
			passport: "",
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

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="body1">
					{isConfirming
						? "Please review your information"
						: `Hi, Mr/Ms. ${values.lastName}`}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<form onSubmit={handleSubmit}>
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
						{isConfirming && (
							<Grid item xs={12}>
								<Button
									color="secondary"
									variant="contained"
									type="button"
									data-testid="edit"
									disabled={disabled}
									onClick={goEdit}
								>
									Edit
								</Button>
							</Grid>
						)}
						<Grid item xs={12}>
							<Button
								color="primary"
								variant="contained"
								type="submit"
								data-testid="submit"
								disabled={disabled && !values.terms}
							>
								Continue
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default UserInfo;
