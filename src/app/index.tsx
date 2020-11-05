import * as React from "react";
import { useMutation } from "react-query";

import MainTemplate from "./components/templates/MainTemplate";
import SearchFlight from "./routes/SearchFlight/SearchFlight";
import Success from "./routes/Success/Success";
import UserInfo from "./routes/UserInfo/UserInfo";
import FlightService from "./services/FlightService";

function App() {
	const [state, setState] = React.useState<"search" | "edit" | "success">(
		"search"
	);

	const [
		onSearch,
		{ isLoading: isLoadingSearch, data: searchData },
	] = useMutation(FlightService.search, {
		onSuccess() {
			setState("edit");
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

	return (
		<MainTemplate>
			{state === "search" && (
				<SearchFlight
					onSubmitSearch={onSearch}
					isLoading={isLoadingSearch}
				/>
			)}
			{state === "edit" && searchData?.data && (
				<UserInfo
					user={searchData.data}
					onSubmitConfimation={onConfirm}
					isLoading={isLoadingConfirm}
				/>
			)}
			{state === "success" && <Success onReset={onReset} />}
		</MainTemplate>
	);
}

export default App;
