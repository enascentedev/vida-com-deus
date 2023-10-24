import { defineStore } from "pinia";
import axios from "axios";

export const StoreApi = defineStore({
	id: "StoreApi",

	state: () => ({
		// System
		error: null,
		request: null,

		// Data
		data: [],
	}),

	actions: {
		async load() {
			try {
				// request
				this.request = await axios.get("http://localhost:8000/artigos");

				//pinia
				this.data = this.request;
			} catch (error) {
				this.error = error.message;
			}

			// return
			return this.data;
		},
	},
});
