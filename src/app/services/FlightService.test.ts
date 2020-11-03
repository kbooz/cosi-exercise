import axios from 'axios';
import mockAxios from 'jest-mock-axios';

import FlightService from "./FlightService"

jest.mock('axios');

afterEach(() => {
	// cleaning up the mess left behind the previous test
	mockAxios.reset();
});

describe("Flight Service", () => {
	xit('fetches successfully data from an API', async () => {
		let catchFn = jest.fn(),
			thenFn = jest.fn();

		const data = { flight: 123, lastName: "jose" };

		FlightService.search(data).then(thenFn).catch(catchFn);

		expect(mockAxios.post).toHaveBeenCalledWith('/web-service-url/', { data });

	});

})