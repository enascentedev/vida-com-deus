<script>
import { ref, onMounted } from "vue";
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
import amanhecer from "@/assets/imagens/amanhecer.jpg";
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
			artigosStore.criarNovoArtigo({ ...novoArtigo.value });
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
	<form @submit.prevent="criarArtigo">
		<label for="urlImagem">URL da Imagem:</label>
		<input v-model="novoArtigo.imagem" type="text" id="urlImagem" required />

		<label for="data">Data:</label>
		<input v-model="novoArtigo.data" type="text" id="data" required />

		<label for="autor">Nome do Autor:</label>
		<input v-model="novoArtigo.autor" type="text" id="autor" required />

		<label for="titulo">Título:</label>
		<input v-model="novoArtigo.titulo" type="text" id="titulo" required />

		<label for="conteudo">Conteúdo:</label>
		<textarea v-model="novoArtigo.conteudo" id="conteudo" required></textarea>

		<button type="submit">Adicionar Artigo</button>
	</form>
</template>
