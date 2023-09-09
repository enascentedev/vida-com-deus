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
				categoria: "#autoajuda",
				imagem: tempoRefletir,
				data: "Set 02, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O tempo nunca para !",
				conteudo:
					"O relógio da vida só para uma vez e homem algum tem poder	mesmo de imaginar, quando os ponteiros vão deixar de girar.				Cedo ou tarde? Impossível saber, agora é o único tempo que				tendes à mão. Não confieis no amanhã, pois o relógio poderá	estar parado então.",
			},
			{
				categoria: "#autoajuda",
				imagem: escolhas,
				data: "Set 03, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Que tipo de escolhas você tem feito?",
				conteudo:
					"Todo ser humano nasce livre. As escolhas fazem a diferença.Uns escolhem para o bem, outros para o mal. No verso de hoje,	Salomão coloca a responsabilidade da vitória ou da derrota nas			mãos da própria pessoa. É verdade que existem muitas explicações para a derrota. O clima, as circunstâncias, a falta de oportunidades, os problemas, enfim. Difícil é aceitar	o fato de que a maioria das derrotas tem raízes nas decisões	erradas que tomamos.",
			},
			{
				categoria: "#autoajuda",
				imagem: amanhecer,
				data: "Set 04, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O plano de Deus para você",
				conteudo:
					"Não queira tentar garantir seu futuro com seus próprios  planos. Ele, em Sua infinita sabedoria, sabe e deseja o que é  melhor para você. Por isso, deseje estar no centro dos planos  de Deus destinados ao seu bem, com a certeza de que Ele lhe  dará todo o necessário para lidar com o que vem pela frente. Quando orar, confesse a Deus os seus temores e suas dúvidas e  peça ao bondoso Pai celestial que Ele o fortaleça para que  você persevere sempre. Lembre-se de que Deus “é capaz de fazer  infinitamente mais do que tudo o que pedimos ou pensamos, de  acordo com o Seu poder que atua em nós” (Ef 3:20). Mantenha os  olhos fixos no Senhor, e Ele o guardará em perfeita paz  enquanto o conduz ao futuro que preparou especialmente para  você. Na primeira carta escrita por Pedro, encontramos esta  preciosidade: “Humilhai-vos, portanto, sob a poderosa mão de  Deus, para que Ele, em tempo oportuno, vos exalte, lançando  sobre Ele toda a vossa ansiedade, porque Ele tem cuidado de  vós” (5:6 e 7). Lance todos os seus cuidados sobre o Senhor,  sabendo que Ele cuida de você e não o deixará cair. O Senhor  deseja segurar a sua mão hoje para que você ande ao lado dEle  em direção ao futuro que Ele mesmo lhe preparou.",
			},
			{
				categoria: "#autoajuda",
				imagem: aflicoes,
				data: "Set 05, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Muitas são as aflições do justo, o Senhor de todas o livra",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: coracaoQuebrantado,
				data: "Set 06, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo:
					" Opiniões conflitantes tornam-se campos de batalha entre indivíduos. ",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: olhosdeDeus,
				data: "Set 07, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Como enxergar com os olhos de Deus?",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: ansiedade,
				data: "Set 08, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Substitua a ansiedade",
				conteudo: "vazio",
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
