<template>
	<div class="container">
		<h1>Life com Deus</h1>
		<h2>Olá! Faça seu Login.</h2>
		<hr />
		<form class="formulario">
			<label class="labelclass" for="email">
				Usuário ou Email
				<input
					id="email"
					v-model="data.user"
					name="email"
					type="email"
					class="inputGeral"
					required />
			</label>
			<label class="labelclass" for="password">
				Senha
				<input
					class="inputGeral"
					id="password"
					v-model="data.password"
					name="password"
					type="password"
					required />
			</label>
			<div v-if="status === 'info'" class="alert alert-info rounded-md">
				<font-awesome-icon :icon="['fasr', 'circle-exclamation']" />
				<div class="alert-load">
					<strong>Aguarde!</strong>
					Carregando
					<p class="loading loading-dots loading-xs"></p>
				</div>
			</div>
			<div v-if="status === 'warning'" class="alert alert-warning rounded-md">
				<font-awesome-icon :icon="['fasr', 'triangle-exclamation']" />
				<span>
					<strong>Erro!</strong>
					Digite corretamente usuário e senha!
				</span>
			</div>
			<div v-if="status === 'error'" class="alert alert-error rounded-md">
				<span>
					<strong>Erro!</strong>
					Usuário não encontrado ou senha incorreta. Para recuperar a senha,
					<router-link class="underline" to="/login/recuperar-senha">
						clique aqui.
					</router-link>
				</span>
			</div>
			<div v-if="status === 'success'" class="alert alert-success rounded-md">
				<span>
					<strong>Autenticado!</strong>
					Usuário validado com sucesso, redirecionando...
				</span>
			</div>
			<button
				class="buttonclass"
				ref="button"
				:disabled="status === 'success'"
				accesskey="13"
				@click.prevent="login">
				Entrar
			</button>

			<router-link class="recover-password" to="/register">
				registre-se
			</router-link>
		</form>
		<div class="suport">
			<p>Problemas no acesso ou ainda não usa o life com Deus?</p>
			<a href="##" target="_blank"> Fale com a nossa equipe </a>
		</div>
		<div class="copy">
			<span>Life com Deus:</span>
			<img
				class="w-auto h-auto"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
				alt="life com deus" />
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "access",
	data() {
		return {
			status: "",

			data: {
				user: "",
				password: "",
			},
		};
	},

	methods: {
		async login() {
			try {
				// Efetua a requisição ao endpoint de login
				const response = await axios.post(
					"http://localhost:8000/usuarios/login",
					this.data
				);

				// Salva o token no armazenamento local
				const token = response.data.token;
				localStorage.setItem("authToken", token);

				// Atualiza o status e redireciona para a página principal ou dashboard
				this.status = "success";
				this.$router.push("/home"); // Redireciona para a rota desejada após o login
			} catch (error) {
				// Em caso de erro, exibe uma mensagem de erro
				console.error("Erro ao fazer login:", error);
				this.status = "error";
			}
		},
		logout() {
			// Remove o token do armazenamento local
			localStorage.removeItem("authToken");

			// Redireciona o usuário de volta para a página de login
			this.$router.push("/login");
		},
	},
};
</script>
<style lang="postcss" scoped>
.container {
	@apply py-20 px-4 lg:px-12 xl:px-12 h-screen flex flex-col;

	hr {
		@apply my-4 block;
	}
	h1 {
		@apply text-6xl text-primary font-bold text-center;
	}

	h2 {
		@apply mt-2 text-center text-2xl  tracking-tight;
	}

	.formulario {
		@apply flex flex-col mx-auto xl:max-w-2xl sm:max-w-sm;
		.labelclass {
			@apply label flex flex-col items-start relative px-0;

			.input-icon {
				@apply absolute top-12 left-5 text-primary focus:ring-transparent focus:border-primary input-bordered input;
			}

			.inputGeral {
				@apply w-full pl-11 focus:ring-transparent focus:border-primary input-bordered input;
			}
		}

		.buttonclass {
			@apply mt-6  lg:w-full bg-blue-500 btn-outline btn-primary hover:bg-primary  text-base-content btn;
		}
		.recover-password {
			@apply my-4 text-right block underline text-primary;
		}

		.alert-load {
			@apply flex gap-1 items-end;
		}

		.alert {
			span {
				@apply max-w-[45ch];
			}
		}
	}

	.suport {
		@apply text-center mt-7 text-base-content;

		a {
			@apply block mt-1 text-primary-focus underline font-semibold;
		}
	}

	.copy {
		@apply flex items-center justify-center gap-2 flex-col mt-6;

		span {
			@apply text-xs;
		}

		img {
			@apply max-w-[142px];
		}
	}
	/* link com svg voltar login style exclusivo register */
}
.alert {
	@apply rounded-md;
}
</style>
