<template>
	<div class="container">
		<img class="w-auto h-auto mx-auto"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
			alt="life com deus" />
		<!-- <h1>Life com Deus</h1> -->
		<h2>Olá! Faça seu Login.</h2>
		<hr />
		<form class="formulario">
			<label class="labelclass" for="email">
				Usuário ou Email
				<input id="email" v-model="data.username" name="email" type="email" class="inputGeral" required />
			</label>
			<label class="labelclass" for="password">
				Senha
				<input class="inputGeral" id="password" v-model="data.password" name="password" type="password" required />
			</label>
			<div v-if="status === 'info'" class="alert alert-info rounded-md">
				<i class="fa-solid fa-exclamation"></i>
				<div class="alert-load">
					<strong>Aguarde!</strong>
					Carregando
					<p class="loading loading-dots loading-xs"></p>
				</div>
			</div>
			<div v-if="status === 'warning'" class="alert alert-warning rounded-md">
				<i class="fa-solid fa-exclamation"></i>
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
			<button class="buttonclass" ref="button" :disabled="status === 'success'" accesskey="13" @click.prevent="loginUser">
				Entrar
			</button>

			<router-link class="recover-password" to="/register">
				registre-se
			</router-link>
			<!-- <router-link class="recover-password" to="/lembrar-senha">
				lembrar senha
			</router-link> -->
		</form>
		<div class="suport">
			<p>Problemas no acesso ou ainda não usa o life com Deus?</p>
			<a href="##" target="_blank"> Fale com a nossa equipe </a>
		</div>
		<div class="copy">
			<span>Life com Deus:</span>
		</div>
	</div>
</template>

<script>
import { StoreUser } from "@/stores/user";
export default {
	name: "access",
	data() {
		return {
			status: "",
			data: {
				username: "",
				password: "",
			},
		};
	},
	async mounted() {
		// store
		this.store = StoreUser();
	},

	methods: {
		async loginUser() {
			// status
			this.status = "info";

			this.response = await this.store.login(this.data);

			// data
			this.data.username = this.data.username.trim();
			this.data.password = this.data.password.trim();

			// check
			if (this.data.username == "" || this.data.password == "") {
				this.status = "warning";
				return;
			}

			// action
			const response = await this.store.login(this.data);

			// check
			if (this.response) {
				this.status = "success";
				setTimeout(() => {
					this.$router.push("/artigo-semanal");
				}, 2000);
			} else {
				// status
				this.status = "error";
			}
		},
	},
};
</script>
<style lang="postcss" scoped>
.container {
	@apply py-5 px-4 h-screen flex flex-col;

	hr {
		@apply my-4 block;
	}

	h1 {
		@apply text-6xl text-primary font-bold text-center;
	}

	h2 {
		@apply mt-2 text-center text-2xl tracking-tight;
	}

	.formulario {
		@apply flex flex-col mx-10;

		.labelclass {
			@apply label flex flex-col items-start relative;

			.input-icon {
				@apply absolute top-12 left-5 text-primary focus:ring-transparent focus:border-primary input-bordered input;
			}

			.inputGeral {
				@apply w-full focus:ring-transparent focus:border-primary input-bordered input;
			}
		}

		.buttonclass {
			@apply mt-6 lg:w-full bg-blue-500 btn-outline btn-primary hover:bg-base-100 text-base-content btn;
		}

		.recover-password {
			@apply my-1 text-right block underline text-primary;
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
		@apply text-center mt-3 text-base-content;

		a {
			@apply block mt-1 underline font-semibold;
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
}</style>
