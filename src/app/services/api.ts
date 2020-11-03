import axios from "axios";

export const ApiService = axios.create({
	baseURL: "https://app.fakejson.com/q",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const SecondaryApiService = axios.create({
	baseURL: "https://api.mocki.io/v1",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
})