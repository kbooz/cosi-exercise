import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserInfo from "./UserInfo";

const user = {
	flight: "FLIGHT",
	lastName: "de Souza",
	firstName: "Lucas",
};

const changeNationalitySelect = (nationality: string) => {
	fireEvent.change(screen.getByTestId("nationality"), {
		target: { value: nationality },
	});
};

const validateMultipleFields = (fields: string[]) => {
	fields.forEach((field) => {
		expect(screen.getByTestId(field)).toBeTruthy();
	});
};

describe("User Info form", () => {
	it("should render", () => {
		const user = {
			flight: "FLIGHT",
			lastName: "de Souza",
			firstName: "Lucas",
		};
		render(<UserInfo user={user} />);
		// eslint-disable-next-line no-useless-escape
		expect(screen.getByText(/\#FLIGHT/)).toBeTruthy();
		expect(screen.getByTestId("lastName")).toHaveValue(user.lastName);
		expect(screen.getByTestId("firstName")).toHaveValue(user.firstName);
	});

	it("should fail validation and disable confimation", async () => {
		const user = {
			flight: "FLIGHT",
			lastName: "de Souza",
			firstName: "Lucas",
		};
		render(<UserInfo user={user} />);

		const fieldData = { target: { value: "Test" } };
		fireEvent.change(screen.getByTestId("phone"), fieldData);
		fireEvent.change(screen.getByTestId("passport"), fieldData);

		fireEvent.click(screen.getByTestId("submit"));

		await waitFor(() => fireEvent.click(screen.getByTestId("submit")));

		await waitFor(() =>
			expect(screen.getByTestId("message")).toHaveTextContent(
				user.lastName
			)
		);
	});

	it("should enter confirm mode and submit", async () => {
		const onSubmit = jest.fn();
		render(<UserInfo user={user} onSubmitConfimation={onSubmit} />);

		const userInfo = {
			email: "lucas@test.com",
			phone: "+55219999999",
			passport: "ABCDEF",
		};

		fireEvent.change(screen.getByTestId("email"), {
			target: { value: userInfo.email },
		});
		fireEvent.change(screen.getByTestId("phone"), {
			target: {
				value: userInfo.phone,
			},
		});
		fireEvent.change(screen.getByTestId("passport"), {
			target: { value: userInfo.passport },
		});

		const nationality = screen.getByTestId("nationality");
		const nationalityOptions = screen.getAllByTestId("nationality-option");

		fireEvent.change(nationality, {
			target: { value: nationalityOptions[0].getAttribute("value") },
		});

		fireEvent.click(screen.getByTestId("terms"));

		await waitFor(() => fireEvent.click(screen.getByTestId("submit")));

		await waitFor(() =>
			expect(screen.getByTestId("message")).toHaveTextContent("review")
		);

		await waitFor(() => fireEvent.click(screen.getByTestId("submit")));

		await waitFor(() => expect(onSubmit).toBeCalled());
	});

	it("should display Austria extra fields", async () => {
		render(<UserInfo user={user} />);
		changeNationalitySelect("AT");
		validateMultipleFields([
			"residenceCountry",
			"residenceCity",
			"passportExpirity",
		]);
	});
	it("should display Belgium extra fields", async () => {
		render(<UserInfo user={user} />);
		changeNationalitySelect("BE");
		validateMultipleFields([
			"birthDate",
			"residenceCountry",
			"residenceCity",
			"residenceAddress",
		]);
	});
	it("should display France extra fields", async () => {
		render(<UserInfo user={user} />);

		changeNationalitySelect("FR");
		validateMultipleFields([
			"birthDate",
			"birthPlace",
			"residenceCountry",
			"residenceCity",
		]);
	});
	it("should display Greece extra fields", async () => {
		render(<UserInfo user={user} />);

		changeNationalitySelect("GR");
		validateMultipleFields([
			"passportDateIssue",
			"passportLocationIssue",
			"passportExpirity",
		]);
	});
	it("should display Spain extra fields", async () => {
		render(<UserInfo user={user} />);

		changeNationalitySelect("ES");
		validateMultipleFields(["residenceAddress"]);
	});
});
