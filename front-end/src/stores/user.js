import { defineStore } from "pinia";
import Cookies from "js-cookie";
import axios from "axios";

export const StoreUser = defineStore({
	id: "StoreUser",
	state: () => ({
		user: null,
		response: null,
		authToken: null,
		data: {},
	}),
	actions: {
		// Salva o token no armazenamento local

		//request para end-point
		async login(data) {
			try {
				console.log(data);
				const response = await axios.post(
					"http://localhost:8000/usuarios/login",
					data
				);
				const token = response.data.token;
				console.log(response);
				localStorage.setItem("authToken", token);
				if (response.data && response.data.token) {
					return token;
				}
				return null;

				// Atualiza o status e redireciona para a página principal ou dashboard
			} catch (error) {
				// Em caso de erro, exibe uma mensagem de erro
				console.error("Erro ao fazer login:", error);
				return null;
			}
		},

		logout() {
			// Remove o token do armazenamento local
			localStorage.removeItem("authToken");

			// Redireciona o usuário de volta para a página de login
			this.$router.push("/login");
		},
	},
});
