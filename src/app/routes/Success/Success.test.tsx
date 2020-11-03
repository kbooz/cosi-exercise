import React from "react";
import { render, screen } from "@testing-library/react";
import Success from "./Success";

describe("Success step", () => {
	it("should render with text", () => {
		render(<Success />);
		const linkElement = screen.getByText(/Your check-in is confirmed/i);
		expect(linkElement).toBeInTheDocument();
	});
});
