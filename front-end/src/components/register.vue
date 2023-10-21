<template>
	<div class="container">
		<img
			class="w-20 h-20 mx-auto"
			src="https://cdn-icons-png.flaticon.com/512/72/72648.png"
			alt="life com deus" />

		<h2>Crie seu usuário</h2>
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
					Usuário registrado com sucesso, redirecionando...
				</span>
			</div>
			<button
				class="buttonclass"
				ref="button"
				:disabled="status === 'success'"
				accesskey="13"
				@click.prevent="signin">
				Registar
			</button>
			<router-link class="recover-password" to="/login"> Logar </router-link>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Register",

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
		async signin() {
			console.log("Iniciando registro");
			this.$refs.button.disabled = true;
			this.status = "info";

			try {
				const response = await axios.post(
					"http://localhost:8000/usuarios/register",
					this.data
				);
				this.status = "success";
				this.$router.push("/questionario");
			} catch (error) {
				console.error("Erro ao autenticar:", error);
				this.status = "warning";
				this.$refs.button.disabled = false;
			}
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
