import { defineStore } from "pinia";
import Cookies from "js-cookie";
import axios from "axios";

export const auth = defineStore({
	id: "auth",
	state: () => ({
		authenticated: false,
		user: null,
		request: null,
		data: [],
	}),
	actions: {
		async auth(user) {
			try {
				this.request = await axios.post("API", user);
				this.data = this.request.data;
				if (this.data.status == "success") {
					this.authenticated = true;
					Cookies.set("token", this.data.token);
					return user;
				} else {
					console.log("Falha no login");
					return false;
				}
			} catch (error) {
				console.error("Erro durante o login:", error);
				return false;
			}
		},

		logout() {
			this.authenticated = false;
			this.user = null;
			this.token = null;
			Cookies.remove("token");
		},
	},
});
