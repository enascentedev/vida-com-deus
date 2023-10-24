import axioslib, { AxiosError } from "axios";

//create instancia
const axios = axioslib.create({
	baseURL: "http://localhost:8000",
	headers: {
		"Content-Type": "application/json",
	},
});

//interceptor request
axios.interceptors.request.use((config) => {
	const token = localStorage.get("authToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

//interceptor response
axios.interceptors.response.use(
	(response) => {
		if (response.headers["content-type"] !== "application/json") {
			throw new AxiosError("erro no servidor");
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

//export
export default axios;
