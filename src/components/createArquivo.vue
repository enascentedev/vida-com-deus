<script>
import { ref } from "vue";
import { artigosStore } from "@/stores/storeArtigo";

export default {
	name: "createArtigo",
	setup() {
		const novoArtigo = ref({
			imagem: "",
			data: "",
			autor: "",
			titulo: "",
			conteudo: "",
		});

		const artigoStore = artigosStore();
		const criarArtigo = () => {
			artigoStore.criarNovoArtigo({ ...novoArtigo.value });
			// Limpe o formulário após adicionar o artigo
			novoArtigo.value = {
				imagem: "",
				data: "",
				autor: "",
				titulo: "",
				conteudo: "",
			};
		};

		return {
			novoArtigo,
			criarArtigo,
		};
	},
};
</script>

<template>
	<div class="bg-blue-800">
		<main>
			<!-- Settings forms -->
			<div class="w-3/4 mx-auto py-20">
				<form @submit.prevent="criarArtigo">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
						alt=""
						class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover" />

					<div class="mt-2 w-3/4">
						<label
							for="urlImagem"
							class="block text-sm font-medium leading-6 text-white"
							>URL da Imagem</label
						>
						<div class="mt-2 w-full">
							<input
								v-model="novoArtigo.imagem"
								type="text"
								id="urlImagem"
								required
								class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
						</div>
					</div>

					<div class="mt-2 w-3/4">
						<label
							for="data"
							class="block text-sm font-medium leading-6 text-white"
							>Data</label
						>
						<div class="mt-2 w-48">
							<input
								v-model="novoArtigo.data"
								type="date"
								id="data"
								required
								class="px-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
						</div>
					</div>

					<div class="mt-2 w-3/4">
						<label
							for="autor"
							class="block text-sm font-medium leading-6 text-white"
							>Nome do Autor</label
						>
						<div class="mt-2 w-full">
							<input
								v-model="novoArtigo.autor"
								type="text"
								id="autor"
								required
								class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
						</div>
					</div>

					<div class="mt-2 w-3/4">
						<label
							for="titulo"
							class="block text-sm font-medium leading-6 text-white"
							>Título</label
						>
						<div class="mt-2 w-full">
							<input
								v-model="novoArtigo.titulo"
								type="text"
								id="titulo"
								required
								class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
						</div>
					</div>

					<div class="mt-2 w-3/4">
						<label
							for="conteudo"
							class="block text-sm font-medium leading-6 text-white"
							>Conteúdo</label
						>
						<div class="mt-2 w-full">
							<textarea
								v-model="novoArtigo.conteudo"
								id="conteudo"
								required
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
						</div>
					</div>

					<div class="mt-8 flex">
						<button
							type="submit"
							class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Adicionar Artigo
						</button>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
