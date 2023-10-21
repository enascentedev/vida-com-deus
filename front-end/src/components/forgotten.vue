<template>
	<div class="container">
		<h1>life com deus</h1>
		<h2>Lembrar sua senha?</h2>
		<form class="formulario">
			<hr />
			<label class="labelclass" for="email">
				Usuário ou Email
				<input
					id="email"
					v-model="data.user"
					name="email"
					type="email"
					class="inputGeral"
					required />
				<font-awesome-icon :icon="['fa', 'user']" class="i" />
			</label>
			<div v-if="status === 'info'" class="alert alert-info">
				<font-awesome-icon :icon="['fasr', 'circle-exclamation']" />
				<div class="alert-load">
					<strong>Aguarde!</strong>
					Carregando
					<span class="loading loading-dots loading-xs"></span>
				</div>
			</div>
			<div v-if="status === 'warning'" class="alert alert-warning">
				<font-awesome-icon :icon="['fasr', 'triangle-exclamation']" />
				<span>
					<strong>Lembrar senha!</strong>
					Um email com instruções para recuperação de senha foi encaminhado ao
					endereço cadastrado.
				</span>
			</div>
			<div v-if="status === 'error'" class="alert alert-error">
				<font-awesome-icon :icon="['fasr', 'circle-xmark']" />
				<span>
					<strong>Usuário ou e-mail inválido!</strong>

					<a class="contact" href="#" target="_blank"> contato@contato </a>
				</span>
			</div>
			<div class="remember-password">
				<router-link to="/login">
					<font-awesome-icon :icon="['fas', 'arrow-left']" />
					Voltar para o login
				</router-link>
				<button @click="reset">Lembrar senha</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "Forgotten",

	data() {
		return {
			status: "",
			data: {
				user: "",
			},
		};
	},

	methods: {
		reset() {
			console.log("enviar senha");
			window.alert("senha enviada");
			this.$router.push("/login");
		},
	},
};
</script>
<style lang="postcss" scoped>
.container {
	@apply py-5 px-4 lg:px-12 xl:px-12 h-screen flex flex-col;

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
