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

			// Redireciona o usuário de volta para a página de login
			this.$router.push("/login");
		},
	},
};
</script>

<template>
	<header class="bg-info opacity-40">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img
						class="h-8 w-auto"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
						alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300">
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="#" class="text-sm font-semibold leading-6 text-white"
					>Leitura diária</a
				>
				<router-link to="/artigo-semanal">
					<a href="#" class="text-sm font-semibold leading-6 text-white"
						>Artigo semanal</a
					></router-link
				>
				<router-link to="/criar-artigo">
					<a href="#" class="text-sm font-semibold leading-6 text-white"
						>Criar artigo
					</a></router-link
				>
				<a href="#" class="text-sm font-semibold leading-6 text-white"
					>Bíblia</a
				>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<router-link to="/login">
					<a href="#" class="text-sm font-semibold leading-6 text-white"
						>Área restrita<span aria-hidden="true">&rarr;</span></a
					>
				</router-link>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<router-link to="/login">
					<!-- v-show="this.storelogout.authToken" -->
					<a
						href="#"
						class="text-sm font-semibold leading-6 text-white"
						@click="logout()"
						>Sair<span aria-hidden="true">&rarr;</span></a
					>
				</router-link>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Vida livre</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="" />
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Fechar Menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Leitura diária</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Artigo semanal</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Biblía</a
							>
						</div>
						<div class="py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Àrea restrita</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
