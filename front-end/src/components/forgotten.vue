<template>
	<div id="container">
		<h1>WebPrice</h1>
		<h2>Esqueceu sua senha?</h2>
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

					<a
						class="contact"
						href="https://webprice.com.br/#contato"
						target="_blank">
						contato@contato
					</a>
				</span>
			</div>
			<div class="remember-password">
				<router-link to="/login/acesso">
					<font-awesome-icon :icon="['fas', 'arrow-left']" />
					Voltar para o login
				</router-link>
				<button @click.prevent="reset" :disabled="status === 'warning'">
					Lembrar senha
				</button>
			</div>
		</form>
		<ComponentLoginSuport />
	</div>
</template>

<script>
import ComponentLoginSuport from "@/components/login/suport.vue";

export default {
	name: "ComponentLoginForgotten",
	components: { ComponentLoginSuport },

	data() {
		return {
			status: "",
			data: {
				user: "",
			},
		};
	},

	methods: {
		async reset() {
			this.status = "info";
			await new Promise((r) => setTimeout(r, 2000));
			if (
				!this.data.user ||
				this.data.user.length < 4 ||
				this.data.user.length > 40
			)
				if (Math.random() > 0.5) {
					this.status = "error";
					return null;
				}
			this.status = "warning";
			this.$refs.button.disabled = true; // Desabilita o botão
			await new Promise((r) => setTimeout(r, 2000));
			this.$router.push("/login/resetar-senha");
		},
	},
};
</script>
<style lang="postcss" scoped></style>
