import React from "react";
import { TextField, Typography, Grid, Box } from "@material-ui/core";
import { ExtraInfo } from "./UserInfo.data";

interface UserInfoExtraProps {
	extraInfo: ExtraInfo;
	isConfirming: boolean;
	handleChange: any;
	values: any;
	errors: any;
}

function UserInfoExtra({
	extraInfo,
	isConfirming,
	handleChange,
	values,
	errors,
}: UserInfoExtraProps) {
	return (
		<>
			{extraInfo?.residence && (
				<Grid item xs={12} spacing={4}>
					<Box paddingTop={1}>
						<Box paddingBottom={1.5}>
							<Typography variant="body2">Residence</Typography>
						</Box>
						<Grid container spacing={3}>
							{extraInfo.residence?.address && (
								<Grid item xs={12} md={6}>
									<TextField
										id="residenceAddress"
										type="text"
										label="Address"
										fullWidth
										inputProps={{
											"data-testid": "residenceAddress",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.residenceAddress}
										error={!!errors.residenceAddress}
										helperText={errors.residenceAddress}
										required
									/>
								</Grid>
							)}
							{extraInfo.residence?.city && (
								<Grid item xs={12} md={6}>
									<TextField
										id="residenceCity"
										type="text"
										label="City"
										fullWidth
										inputProps={{
											"data-testid": "residenceCity",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.residenceCity}
										error={!!errors.residenceCity}
										helperText={errors.residenceCity}
										required
									/>
								</Grid>
							)}
							{extraInfo.residence?.country && (
								<Grid item xs={12} md={6}>
									<TextField
										id="residenceCountry"
										type="text"
										label="Country"
										fullWidth
										inputProps={{
											"data-testid": "residenceCountry",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.residenceCountry}
										error={!!errors.residenceCountry}
										helperText={errors.residenceCountry}
										required
									/>
								</Grid>
							)}
						</Grid>
					</Box>
				</Grid>
			)}
			{extraInfo?.birthDate && (
				<Grid item xs={12} md={6}>
					<TextField
						id="birthDate"
						type="date"
						label="Birth Date"
						fullWidth
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							"data-testid": "birthDate",
						}}
						onChange={!isConfirming ? handleChange : undefined}
						value={values.birthDate}
						error={!!errors.birthDate}
						helperText={errors.birthDate}
						required
					/>
				</Grid>
			)}
			{extraInfo?.birthPlace && (
				<Grid item xs={12} md={6}>
					<TextField
						id="birthPlace"
						type="text"
						label="Birth Place"
						fullWidth
						inputProps={{
							"data-testid": "birthPlace",
						}}
						onChange={!isConfirming ? handleChange : undefined}
						value={values.birthPlace}
						error={!!errors.birthPlace}
						helperText={errors.birthPlace}
						required
					/>
				</Grid>
			)}
			{extraInfo?.passport && (
				<Grid item xs={12}>
					<Box paddingTop={1}>
						<Box paddingBottom={1.5}>
							<Typography variant="body2">Passport</Typography>
						</Box>
						<Grid container spacing={3}>
							{extraInfo.passport?.dateIssue && (
								<Grid item xs={12} md={6}>
									<TextField
										id="passportDateIssue"
										type="date"
										label="Date Issue"
										fullWidth
										InputLabelProps={{
											shrink: true,
										}}
										inputProps={{
											"data-testid": "passportDateIssue",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.passportDateIssue}
										error={!!errors.passportDateIssue}
										helperText={errors.passportDateIssue}
										required
									/>
								</Grid>
							)}

							{extraInfo.passport?.locationIssue && (
								<Grid item xs={12} md={6}>
									<TextField
										id="passportLocationIssue"
										type="text"
										label="Location Issue"
										fullWidth
										inputProps={{
											"data-testid":
												"passportLocationIssue",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.passportLocationIssue}
										error={!!errors.passportLocationIssue}
										helperText={
											errors.passportLocationIssue
										}
										required
									/>
								</Grid>
							)}
							{extraInfo.passport?.expirity && (
								<Grid item xs={12} md={6} spacing={4}>
									<TextField
										id="passportExpirity"
										type="date"
										label="Date Expirity"
										fullWidth
										InputLabelProps={{
											shrink: true,
										}}
										inputProps={{
											"data-testid": "passportExpirity",
										}}
										onChange={
											!isConfirming
												? handleChange
												: undefined
										}
										value={values.passportExpirity}
										error={!!errors.passportExpirity}
										helperText={errors.passportExpirity}
										required
									/>
								</Grid>
							)}
						</Grid>
					</Box>
				</Grid>
			)}
		</>
	);
}

export default UserInfoExtra;
