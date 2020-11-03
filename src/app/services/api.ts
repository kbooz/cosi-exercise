import axios from "axios";

export const ApiService = axios.create({
	baseURL: "",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
