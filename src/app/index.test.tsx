import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("App", () => {
	it("should render", async () => {
		render(<App />);
		const title = await screen.findByText("COSI - Flight Check-In");
		expect(title).toBeTruthy();
	});
});
