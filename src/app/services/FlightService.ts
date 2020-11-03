import { FlightQuery, FlightResponse } from "../types/Flight";
import { ApiService, SecondaryApiService } from "./api";


const FlightService = {
	search(searchData: FlightQuery) {
		return ApiService.post<FlightResponse>("/pb22iDJa", {
			token: process.env.REACT_APP_TOKEN,
			data: searchData,
		});
	},
	confirm(data: any) {
		return SecondaryApiService.post("/7ec46dac", data)
	}
}

export default FlightService;
