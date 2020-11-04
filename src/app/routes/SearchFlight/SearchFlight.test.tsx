import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchFlight from "./SearchFlight";

describe("Search Flight form", () => {
	it("should render", async () => {
		render(<SearchFlight />);
		const flightInput = await screen.findByTestId(/flight/);
		const lastNameInput = await screen.findByTestId(/lastName/);
		expect(flightInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
	});

	it("should execute search when all fields are correct", async () => {
		const mockSearch = jest.fn();
		render(<SearchFlight onSubmitSearch={mockSearch} isLoading={false} />);
		const flightInput = screen.getByTestId(/flight/);
		const lastNameInput = screen.getByTestId(/lastName/);
		const submitButton = screen.getByTestId(/submit/);

		fireEvent.change(flightInput, { target: { value: "ABC123" } });

		fireEvent.change(lastNameInput, { target: { value: "de Souza" } });

		fireEvent.click(submitButton);

		await waitFor(() => expect(mockSearch).toBeCalled());
	});

	it("should fail to execute search when fields are incorrect", async () => {
		const mockSearch = jest.fn();
		render(<SearchFlight onSubmitSearch={mockSearch} isLoading={false} />);
		const flightInput = screen.getByTestId(/flight/);
		const submitButton = screen.getByTestId(/submit/);

		fireEvent.change(flightInput, { target: { value: "A" } });

		fireEvent.click(submitButton);

		await waitFor(() => expect(mockSearch).toBeCalledTimes(0));
	});
});
