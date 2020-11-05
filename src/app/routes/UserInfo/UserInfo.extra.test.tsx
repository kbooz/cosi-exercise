import * as React from "react";
import { render, screen } from "@testing-library/react";

import UserInfoExtra from "./UserInfo.extra";

describe("User Info Form extra fields", () => {
	it("should render all based on extraInfo prop", () => {
		render(
			<UserInfoExtra
				errors={{}}
				handleChange={jest.fn()}
				values={{}}
				isConfirming
				extraInfo={{
					birthDate: true,
					birthPlace: true,
					passport: {
						dateIssue: true,
						expirity: true,
						locationIssue: true,
					},
					residence: {
						address: true,
						city: true,
						country: true,
					},
				}}
			/>
		);

		[
			"residenceAddress",
			"residenceCity",
			"residenceCountry",
			"birthDate",
			"birthPlace",
			"passportDateIssue",
			"passportLocationIssue",
			"passportExpirity",
		].forEach((field) => {
			const renderedField = screen.getByTestId(field);
			expect(renderedField).toBeTruthy();
		});
	});
});
