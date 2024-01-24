<template>
	<header id="header">
		<nav>
			<router-link to="/home">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
					alt="logo" />
			</router-link>
				<router-link to="/livros">
					Leitura diária
				</router-link>
				<router-link to="/artigo-semanal" >
					Artigo semanal
				</router-link>
				<router-link to="/home">
					Home
				</router-link>
				<router-link to="/login" @click="logout()">
					Sair
				</router-link>
		</nav>
	</header>
</template>
<script>
import { StoreUser } from "@/stores/user";
export default {
	name: "Header",
	data() {
		return {
			store: null,
			authToken: null,
		};
	},
	async mounted() {
		// store
		this.storelogout = StoreUser();
	},
	methods: {
		logout() {
			if (this.store) {
				this.storelogout.logout();
			}
			localStorage.removeItem("authToken");
			this.$router.push("/login");
		},
	},
};
</script>
<style scoped postcss>
#header{
	nav {
		@apply flex items-center justify-between px-10 py-7 bg-info opacity-40;
		img{
			@apply h-8 w-auto;
		}
		a {
			@apply text-sm font-semibold text-white;
		}
	}
}
</style>
