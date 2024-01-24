<template>
	<header>
		<nav class="flex items-center justify-between px-10 py-7 bg-info opacity-40">
			<router-link to="/livros">
				<a href="#">
					<img class="h-8 w-auto"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
						alt="logo" />
				</a>
			</router-link>
				<router-link to="/livros">
					<a href="#" class="text-sm font-semibold text-white">Leitura diária</a>
				</router-link>
				<router-link to="/artigo-semanal">
					<a href="#" class="text-sm font-semibold text-white">Artigo semanal</a>
				</router-link>
				<router-link to="/home">
					<a href="#" class="text-sm font-semibold text-white">Home</a>
				</router-link>
				<router-link to="/login">
					<a href="#" class="text-sm font-semibold text-white" @click="logout()">Sair</a>
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
