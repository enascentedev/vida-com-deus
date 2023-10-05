<template>
	<div class="container">
		<h1>Life com Deus</h1>
		<h2>Olá! Faça seu Login.</h2>
		<hr />
		<form>
			<label for="email">
				Usuário ou Email
				<input
					id="email"
					v-model="data.user"
					name="email"
					type="email"
					required />
				<font-awesome-icon :icon="['fas', 'user']" class="input-icon" />
			</label>
			<label for="password">
				Senha
				<input
					id="password"
					v-model="data.password"
					name="password"
					type="password"
					required />
				<font-awesome-icon :icon="['fas', 'lock']" class="input-icon" />
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
				<font-awesome-icon :icon="['fasr', 'circle-xmark']" />
				<span>
					<strong>Erro!</strong>
					Usuário não encontrado ou senha incorreta. Para recuperar a senha,
					<router-link class="underline" to="/login/recuperar-senha">
						clique aqui.
					</router-link>
				</span>
			</div>
			<div v-if="status === 'success'" class="alert alert-success rounded-md">
				<font-awesome-icon :icon="['fasr', 'circle-check']" />
				<span>
					<strong>Autenticado!</strong>
					Usuário validado com sucesso, redirecionando...
				</span>
			</div>
			<button
				ref="button"
				:disabled="status === 'success'"
				accesskey="13"
				@click.prevent="signin">
				Entrar
			</button>
			<router-link class="recover-password" to="/login/recuperar-senha">
				Esqueceu sua senha?
			</router-link>
		</form>
		<div class="suport">
			<p>Problemas no acesso ou ainda não usa o life com Deus?</p>
			<a href="##" target="_blank"> Fale com a nossa equipe </a>
		</div>
		<div class="copy">
			<span>Life com Deus:</span>
			<img class="max-w-[142px]" :src="logo" alt="life com deus" />
		</div>
	</div>
</template>

<script>
import logo from "@/assets/logo.svg";
import { useAuthenticationStore } from "@/stores/auth";
export default {
	name: "access",
	data() {
		return {
			status: "",
			logo: logo,
			data: {
				user: "",
				password: "",
			},
		};
	},

	methods: {
		async signin() {
			console.log("Iniciando login");
			const authenticationStore = useAuthenticationStore();

			// start
			this.$refs.button.disabled = true;
			this.status = "info";
			await new Promise((r) => setTimeout(r, 2000));

			authenticationStore.login(this.data);

			if (authenticationStore.isAuthenticated) {
				this.status = "success";
				await new Promise((r) => setTimeout(r, 2000));

				this.$router.push("/painel-sistema");

				this.status = "";
				this.$refs.button.disabled = false;
			} else {
				this.status = "error";
				this.$refs.button.disabled = false;
			}
		},
	},
};
</script>
<style>
.container {
	@apply py-20 px-4 lg:px-12 xl:px-12 h-screen;

	hr {
		@apply my-4 block;
	}
	h1 {
		@apply text-6xl text-primary font-bold text-center;
	}

	h2 {
		@apply mt-2 text-center text-2xl  tracking-tight;
	}

	form {
		@apply flex flex-col mx-auto xl:max-w-2xl sm:max-w-sm;

		label {
			@apply flex flex-col items-start relative px-0;

			.input-icon {
				@apply absolute top-12 left-5 text-primary;
			}

			input {
				@apply w-full pl-11;
			}
		}

		button {
			@apply mt-6  lg:w-full;
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
	/* link com svg voltar login style exclusivo forgotten */

	.remember-password {
		@apply flex flex-col-reverse;
		a {
			@apply flex flex-1 items-center pt-5 font-medium text-sky-600 text-sm  gap-1 hover:text-gray-500;
			svg {
				@apply w-4 h-4 text-sky-500;
			}
		}
	}
}
/* compartilhando style para componente marketing */
:deep(.container-marketing) {
	@apply h-full flex items-center flex-col  pt-16;

	img {
		@apply max-w-md object-cover;
	}

	.information {
		@apply pt-8 text-2xl text-center text-base-100;

		span {
			@apply text-accent font-semibold;
		}
	}

	.video {
		@apply my-8 w-1/2 p-2  rounded-md shadow-md bg-primary;
	}

	.social {
		@apply w-full pl-4 flex flex-col gap-1 items-center flex-wrap content-start;
		ul {
			@apply flex flex-col items-center;
		}

		a {
			@apply rounded hover:scale-125 ease-out duration-300 block text-2xl;
		}
	}
}
</style>
