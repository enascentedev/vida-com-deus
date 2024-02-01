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
		if (!localStorage.getItem("apiLivros")) {
			try {
				// request
				this.request = await axios.get(
					"https://vida-com-deus.onrender.com/livros"
				);

				// Cache
				localStorage.setItem(
					"apiLivros",
					JSON.stringify(this.request.data.data)
				);

				//pinia
				this.data = this.request;
			} catch (error) {
				this.error = error.message;
			}

		} else {
			this.data = JSON.parse(localStorage.getItem("apiLivros"));
		}
			// return
			return this.data;
		},
	},
});
