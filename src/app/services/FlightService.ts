import axios from "axios";
import { FlightQuery, FlightResponse } from "../types/Flight";

export const flightUrls = {
	search: "https://app.fakejson.com/q/pb22iDJa",
	confirm: "https://api.mocki.io/v1/7ec46dac"
}

const FlightService = {
	search(searchData: FlightQuery) {
		return axios.post<FlightResponse>(flightUrls.search, {
			token: process.env.REACT_APP_TOKEN,
			data: searchData,
		});
	},
	confirm(data: any) {
		return axios.post(flightUrls.confirm, data)
	}
}

export default FlightService;
