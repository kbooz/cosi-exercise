import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Success from "./Success";

describe("Success step", () => {
	it("should render with text", () => {
		render(<Success onReset={() => {}} />);
		const linkElement = screen.getByText(/Your check-in is confirmed/i);
		expect(linkElement).toBeInTheDocument();
	});

	it("should press reset", () => {
		const onReset = jest.fn();
		render(<Success onReset={onReset} />);
		const buttonElement = screen.getByTestId("reset");
		fireEvent.click(buttonElement);
		expect(onReset).toBeCalled();
	});
});
