/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useMutation } from "react-query";

import MainTemplate from "./components/templates/MainTemplate";
import SearchFlight from "./routes/SearchFlight/SearchFlight";
import Success from "./routes/Success/Success";
import UserInfo from "./routes/UserInfo/UserInfo";
import FlightService from "./services/FlightService";
import { FlightQuery, FlightResponse } from "./types/Flight";

function App() {
	const [state, setState] = React.useState<"search" | "edit" | "success">(
		"search"
	);

	// MOCK: temporary save user query to merge with mock
	const [userQuery, setUserQuery] = React.useState<FlightQuery>();

	const [
		onSearch,
		{ isLoading: isLoadingSearch, data: searchData },
	] = useMutation(FlightService.search, {
		onSuccess(_data, query) {
			setState("edit");
			setUserQuery(query);
		},
	});

	const [onConfirm, { isLoading: isLoadingConfirm }] = useMutation(
		FlightService.confirm,
		{
			onSuccess() {
				setState("success");
			},
		}
	);

	const onReset = React.useCallback(() => setState("search"), []);

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
			{state === "search" && (
				<SearchFlight
					onSubmitSearch={onSearch}
					isLoading={isLoadingSearch}
				/>
			)}
			{state === "edit" && userInfo?.flight && (
				<UserInfo
					user={userInfo}
					onSubmitConfimation={onConfirm}
					isLoading={isLoadingConfirm}
				/>
			)}
			{state === "success" && <Success onReset={onReset} />}
		</MainTemplate>
	);
}

export default App;
