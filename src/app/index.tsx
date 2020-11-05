/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useMutation } from "react-query";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import MainTemplate from "./components/templates/MainTemplate";
import SearchFlight from "./routes/SearchFlight/SearchFlight";
import Success from "./routes/Success/Success";
import UserInfo from "./routes/UserInfo/UserInfo";
import FlightService from "./services/FlightService";
import { FlightQuery, FlightResponse } from "./types/Flight";

type AppStep = "search" | "edit" | "success";

function App() {
	const [step, setStep] = React.useState<AppStep>("search");

	const [showError, setShowError] = React.useState(false);

	// MOCK: temporary save user query to merge with mock
	const [userQuery, setUserQuery] = React.useState<FlightQuery>();

	const [
		onSearch,
		{ isLoading: isLoadingSearch, data: searchData },
	] = useMutation(FlightService.search, {
		onSuccess(_data, query) {
			setStep("edit");
			setUserQuery(query);
		},
		onError() {
			// handle error analytics
			setShowError(true);
		},
	});

	const [onConfirm, { isLoading: isLoadingConfirm }] = useMutation(
		FlightService.confirm,
		{
			onSuccess() {
				setStep("success");
			},
			onError() {
				// handle error analytics
				setShowError(true);
			},
		}
	);

	const onReset = React.useCallback(() => setStep("search"), []);

	const onDismissError = React.useCallback(() => setShowError(false), []);

	// MOCK: merge mock server with user query
	const userInfo: FlightResponse | undefined = React.useMemo(
		() =>
			searchData?.data && userQuery?.flight
				? { ...searchData.data, ...userQuery }
				: undefined,
		[userQuery, searchData?.data?.flight]
	);

	return (
		<MainTemplate>
			{step === "search" && (
				<SearchFlight
					onSubmitSearch={onSearch}
					isLoading={isLoadingSearch}
				/>
			)}
			{step === "edit" && userInfo?.flight && (
				<UserInfo
					user={userInfo}
					onSubmitConfimation={onConfirm}
					isLoading={isLoadingConfirm}
				/>
			)}
			{step === "success" && <Success onReset={onReset} />}
			<Snackbar
				open={showError}
				autoHideDuration={10000}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={onDismissError}
			>
				<Alert severity="error" onClose={onDismissError}>
					Woops, there was an error! Our team will handle that!
				</Alert>
			</Snackbar>
		</MainTemplate>
	);
}

export default App;
