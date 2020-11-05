import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import FlightService, { flightUrls } from "./FlightService";

const mock = new MockAdapter(axios);

describe.only("Flight Service", () => {
	it("searches successfully flight from API", async () => {
		const requestData = { flight: "123Abc", lastName: "de Souza" };
		const responseData = {
			data: { ...requestData, firstName: "Lucas" },
			token: process.env.REACT_APP_TOKEN,
		};

		mock.onPost(flightUrls.search).reply(200, responseData);

		const response = await FlightService.search(requestData);
		expect(response.data).toStrictEqual(responseData);
	});

	it("sends successfully data to confirmation", async () => {
		mock.onPost(flightUrls.confirm).reply(200);
		const response = await FlightService.confirm({});
		expect(response.status).toBe(200);
	});
});
