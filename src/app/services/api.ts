import axios from "axios";

export const apiUrl = "https://app.fakejson.com/q";
export const secondaryApiUrl = "https://api.mocki.io/v1"

export const ApiService = axios.create({
	baseURL: apiUrl,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const SecondaryApiService = axios.create({
	baseURL: secondaryApiUrl,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
})