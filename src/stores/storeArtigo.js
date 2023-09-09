// storeArtigo.js
import { ref } from "vue";
import { defineStore } from "pinia";
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
import amanhecer from "@/assets/imagens/amanhecer.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";

export const artigosStore = defineStore({
	id: "artigos",
	state: () => ({
		artigos: [
			{
				imagem: tempoRefletir,
				data: "Set 02, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O tempo nunca para !",
			},
			{
				imagem: escolhas,
				data: "Set 03, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Que tipo de escolhas você tem feito?",
			},
			{
				imagem: amanhecer,
				data: "Set 04, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O plano de Deus para você",
			},
			{
				imagem: escolhas,
				data: "Set 05, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Muitas são as aflições do justo, o Senhor de todas o livra",
			},
		],
	}),
	getters: {
		listaDeArtigos: (state) => {
			return state.artigos;
		},
	},

	actions: {
		criarNovoArtigo(artigo) {
			this.artigos.push(artigo); // Adicione o novo artigo ao estado diretamente
		},
	},
});
