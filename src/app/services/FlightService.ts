import axios from "axios";

import { FlightQuery, FlightResponse } from "../types/Flight";

const API_URL = "https://87d46870-87bf-4558-8b7f-ed6ce1b3c94d.mock.pstmn.io";

export const flightUrls = {
	search: `${API_URL}/search`,
	confirm: `${API_URL}/confirm`,
};

const headers = {
	"x-api-key": process.env.REACT_APP_TOKEN,
};

const FlightService = {
	search(searchData: FlightQuery) {
		return axios.post<FlightResponse>(flightUrls.search, searchData, {
			headers,
		});
	},
	confirm(data: any) {
		return axios.post(flightUrls.confirm, data, {
			headers,
		});
	},
};

export default FlightService;
