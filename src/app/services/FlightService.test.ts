import mockAxios from 'jest-mock-axios';
import FlightService from "./FlightService"


afterEach(() => {
	mockAxios.reset();
});

describe("Flight Service", () => {
	it('searches successfully flight from API', async () => {
		const data = { flight: "123Abc", lastName: "de Souza" };
		await FlightService.search(data);
		expect(mockAxios.post).toHaveBeenCalledWith('/pb22iDJa', { data, token: process.env.REACT_APP_TOKEN });
	});

	it("sends successfully data to confirmation", async () => {
		const data = {};
		await FlightService.confirm(data);
		expect(mockAxios.post).toHaveBeenCalledWith('/7ec46dac', data)
	})

})