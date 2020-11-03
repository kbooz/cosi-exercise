import { ApiService } from "./api";
import { ApiService } from "./api";

const flightPrefix = "/wawa"

const FlightService = {
	search(key: string, searchData) {
		return ApiService.post<{ lastName: string }>(`${flightPrefix}/search`, searchData);
	}
}

export default FlightService;
