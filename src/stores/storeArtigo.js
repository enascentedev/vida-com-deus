// storeArtigo.js
import { ref } from "vue";
import { defineStore } from "pinia";
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
import amanhecer from "@/assets/imagens/amanhecer.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import coracaoQuebrantado from "@/assets/imagens/coracaoQuebrantado.jpg";
import olhosdeDeus from "@/assets/imagens/olhosdeDeus.jpg";
import ansiedade from "@/assets/imagens/ansiedade.jpg";
import aflicoes from "@/assets/imagens/aflicoes.jpg";

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
				imagem: aflicoes,
				data: "Set 05, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Muitas são as aflições do justo, o Senhor de todas o livra",
			},
			{
				imagem: coracaoQuebrantado,
				data: "Set 06, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo:
					" Opiniões conflitantes tornam-se campos de batalha entre indivíduos. ",
			},
			{
				imagem: olhosdeDeus,
				data: "Set 07, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Como enxergar com os olhos de Deus?",
			},
			{
				imagem: ansiedade,
				data: "Set 08, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Substitua a ansiedade",
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
		async carregarArtigos() {
			try {
				// Fazer uma solicitação para carregar os artigos do JSON
				const response = await fetch("@/data/artigos.json");
				const data = await response.json();
				this.artigos = data.artigos;
			} catch (error) {
				console.error("Erro ao carregar artigos:", error);
			}
		},
	},
});
