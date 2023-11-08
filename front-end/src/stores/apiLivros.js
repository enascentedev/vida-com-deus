import { defineStore } from "pinia";
import axios from "axios";

export const StoreLivros = defineStore({
	id: "StoreLivros",

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
				this.request = await axios.get(
					"https://vida-com-deus.onrender.com/livros"
				);

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
