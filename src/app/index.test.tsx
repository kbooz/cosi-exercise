import * as React from "react";
import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import App from ".";
import { flightUrls } from "./services/FlightService";

const mock = new MockAdapter(axios);

describe("App", () => {
	it("should render", async () => {
		render(<App />);
		const title = await screen.findByText("COSI - Flight Check-In");
		expect(title).toBeTruthy();
	});

	it("should fill search, fill user information and show success", async () => {
		render(<App />);

		const user = {
			flight: "ABC123",
			lastName: "de Souza",
			firstName: "Lucas",
		};

		// Creates API mocks
		mock.onPost(flightUrls.search).reply(200, { ...user });
		mock.onPost(flightUrls.confirm).reply(200);

		// Fills search form

		fireEvent.change(screen.getByTestId("flight"), {
			target: { value: user.flight },
		});

		fireEvent.change(screen.getByTestId("lastName"), {
			target: { value: user.lastName },
		});

		await waitFor(() => fireEvent.click(screen.getByTestId("submit")));

		// Fills user info form
		await waitFor(() =>
			expect(screen.getByTestId("flight")).toHaveTextContent(user.flight)
		);

		const userInfo = {
			email: "lucas@test.com",
			phone: "+55219999999",
			passport: "ABCDEF",
			nationality: "BR",
		};

		act(() => {
			Object.keys(userInfo).forEach((field) =>
				fireEvent.change(screen.getByTestId(field), {
					target: { value: userInfo[field] },
				})
			);

			fireEvent.click(screen.getByTestId("terms"));
		});

		fireEvent.click(screen.getByTestId("submit"));

		await waitFor(() =>
			expect(screen.getByTestId("message")).toHaveTextContent("review")
		);

		await waitFor(() => fireEvent.click(screen.getByTestId("submit")));

		// // Check if its success
		await waitFor(() =>
			expect(screen.getByTestId("confirmation")).toBeInTheDocument()
		);
	});
});
