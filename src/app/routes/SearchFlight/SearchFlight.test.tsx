import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchFlight from "./SearchFlight";

describe("Search Flight form", () => {
	it("should render", async () => {
		render(<SearchFlight />);
		const flightInput = await screen.findByTestId(/flight/);
		const lastNameInput = await screen.findByTestId(/lastName/);
		expect(flightInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
	});

	it.only("should execute search when all fields are correct", async () => {
		const mockSearch = jest.fn();
		render(<SearchFlight onSubmitSearch={mockSearch} />);
		const flightInput = await screen.findByTestId(/flight/);
		const lastNameInput = await screen.findByTestId(/lastName/);
		const submitButton = await screen.findByTestId(/submit/);

		await fireEvent.change(flightInput, { target: { value: 1235 } });
		await fireEvent.change(lastNameInput, { target: { value: "jose" } });
		await fireEvent.click(submitButton);

		console.log(screen.debug());

		expect(mockSearch).toBeCalled();
	});
});
