import * as React from "react";

import {
	Container,
	AppBar,
	Toolbar,
	Typography,
	Box,
	CircularProgress,
} from "@material-ui/core";

import { useMutation } from "react-query";

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
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">COSI</Typography>
				</Toolbar>
			</AppBar>
			<Container
				style={{
					paddingTop: "1.5rem",
				}}
			>
				{state === "search" && (
					<>
						<SearchFlight
							onSubmitSearch={onSearch}
							disabled={isLoadingSearch}
						/>

						{isLoadingSearch && (
							<Box mt={5} display="flex" alignItems="center">
								<CircularProgress inlist />
								<Box ml={3}>
									<Typography>
										Trying to find your flight!
									</Typography>
								</Box>
							</Box>
						)}
					</>
				)}
				{state === "edit" && data?.data && (
					<UserInfo
						user={data.data}
						onSubmitConfimation={onConfirm}
						disabled={isLoadingConfirm}
					/>
				)}
				{state === "success" && <Success />}
			</Container>
		</>
	);
}

export default App;
