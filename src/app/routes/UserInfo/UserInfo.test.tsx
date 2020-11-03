import { renderExtraInfo } from "./UserInfo.data";

describe("User Info utils", () => {
	it("should return Austria extra rules", () => {
		expect(renderExtraInfo("AT")).toStrictEqual({
			residence: {
				country: true,
				city: true,
			},
			passport: {
				expirity: true,
			},
		});
	});
	it("should return Belgium extra rules", () => {
		expect(renderExtraInfo("BE")).toStrictEqual({
			birthDate: true,
			residence: {
				country: true,
				city: true,
				address: true,
			},
		});
	});
	it("should return France extra rules", () => {
		expect(renderExtraInfo("FR")).toStrictEqual({
			birthDate: true,
			birthPlace: true,
			residence: {
				country: true,
				city: true,
			},
		});
	});
	it("should return Greece extra rules", () => {
		expect(renderExtraInfo("GR")).toStrictEqual({
			passport: {
				dateIssue: true,
				locationIssue: true,
				expirity: true,
			},
		});
	});
	it("should return Spain extra rules", () => {
		expect(renderExtraInfo("ES")).toStrictEqual({
			residence: {
				address: true,
			},
		});
	});

	it("should return no extra rules", () => {
		expect(renderExtraInfo("CE")).toStrictEqual({});
	});
});
