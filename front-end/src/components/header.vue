<template>
	<header id="header">
		<nav id="desktop">
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
		<div id="hamburguer">
			<div>
				<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZyM4aHP8joG0N3qfTkMp-L5jyPK5GBkzpQ&usqp=CAU"
				alt="logo" class="h-20 w-20"/>
			</div>
			<label class="swap swap-rotate">
				<input @click="toogle" type="checkbox" />
					<svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
				<svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
			</label>
		</div>
		<div :class="{ hidden: !mobile }" id="mobile">
			<nav id="mobile-access">
				<ul >
					<li>
						<router-link to="/livros">
							Leitura diária
						</router-link>
					</li>
					<li>
						<router-link to="/artigo-semanal">
							Artigo Semanal
						</router-link>
					</li>
					<li>
						<router-link to="/home">
							Home
						</router-link>
					</li>
					<li>
						<router-link to="/login" @click="logout()">
							Sair
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
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
			mobile: false,
		};
	},
	async mounted() {
		// store
		this.store = StoreUser();
	},
	methods: {
		logout() {
			if (this.store) {
				this.store.logout();
			}
			localStorage.removeItem("authToken");
			this.$router.push("/login");
		},
		toogle() {
			this.mobile = !this.mobile;
		},
	},
};
</script>
<style scoped postcss>
#header{
	#desktop {
		@apply items-center justify-between px-10 py-7 bg-primary hidden md:flex;
		img{
			@apply h-20 w-auto;
		}
		a {
			@apply text-sm font-semibold text-base-100;
		}
	}
	#hamburguer {
			@apply flex justify-between px-5;
			@apply md:hidden;
			img{
				@apply flex flex-1;
			}
			input {
				@apply hidden;
			}

		}
		#mobile {
		@apply w-full p-4 pl-0 text-base-content;
		@apply md:hidden;

		#mobile-access ul {
			@apply flex flex-col gap-4 p-4 bg-primary text-base-100;
		}
		.i {
			@apply pr-1 text-primary;
		}
	}
}
</style>
