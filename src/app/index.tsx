import * as React from "react";

import { useMutation } from "react-query";

import MainTemplate from "./components/templates/MainTemplate";
import SearchFlight from "./routes/SearchFlight/SearchFlight";
import UserInfo from "./routes/UserInfo/UserInfo";
import Success from "./routes/Success/Success";
import FlightService from "./services/FlightService";

function App() {
	const [state, setState] = React.useState<"search" | "edit" | "success">(
		"search"
	);

	const [onSearch, { isLoading: isLoadingSearch, data }] = useMutation(
		FlightService.search,
		{
			onSuccess() {
				setState("edit");
			},
		}
	);

	const [onConfirm, { isLoading: isLoadingConfirm }] = useMutation(
		FlightService.confirm,
		{
			onSuccess() {
				setState("success");
			},
		}
	);

	return (
		<MainTemplate>
			{state === "search" && (
				<SearchFlight
					onSubmitSearch={onSearch}
					isLoading={isLoadingSearch}
				/>
			)}
			{state === "edit" && data?.data && (
				<UserInfo
					user={data.data}
					onSubmitConfimation={onConfirm}
					disabled={isLoadingConfirm}
				/>
			)}
			{state === "success" && <Success />}
		</MainTemplate>
	);
}

export default App;
