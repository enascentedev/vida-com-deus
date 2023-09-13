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
					"O relógio da vida só para uma vez e homem algum tem poder	mesmo de imaginar, quando os ponteiros vão deixar de girar.	Cedo ou tarde? Impossível saber, agora é o único tempo que tendes à mão. Não confieis no amanhã, pois o relógio poderá	estar parado então.",
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
				titulo: "Uma questão do coração",
				conteudo:
					"Salmo 119:11 – Guardei no coração a Tua palavra para não pecar contra Ti. O Salmo 119 é um poema com 22 estrofes, e cada uma dessas estrofes leva como título uma das 28 letras do alfabeto hebraico. O título da primeira estrofe é Aleph, a primeira letra do alfabeto, e assim todas as estrofes são nomeadas com o restante das letras. No maior livro da Bíblia, o maior capítulo exalta e celebra a lei, a Palavra de Deus. A Bíblia é chamada pelo salmista como “Tua Palavra”. A Bíblia pode ser, na estante, o livro mais importante ou pode ser como qualquer outro livro. A diferença está na quantidade de tempo que lhe dedicamos e para que a usamos. Uma das coisas fascinantes na Bíblia é que ela é um livro para gente jovem. Verso 9 – Como pode o jovem manter pura a sua conduta? Nesse verso está a pergunta mais difícil a ser respondida por um jovem: Como pode se manter puro diante de tanta imoralidade aberta e disponível a qualquer hora? Já que tem tanta energia e hormônios à flor da pele, como o jovem pode ser e se manter puro? Como podemos salvar o coração, a mente e o corpo do jovem? Seria bom que essa pergunta fizesse parte de sua oração: “Como posso manter puro meu coração?” A resposta é clara. A Bíblia deve ser nosso guia e devemos cuidar para exercitar vigilância, para que nossa vida esteja de acordo com o que Deus pede. Verso 11 – Guardei no coração a Tua palavra. Que lugar melhor existiria ou que solo seria mais fértil para a Bíblia do que um novo coração? Vamos esconder, entesourar, guardar dentro do coração renovado a Palavra de Deus! Um famoso pregador resumia o verso 11 da seguinte maneira: “A melhor coisa, no melhor lugar, para o melhor propósito.” Ou seja, a melhor coisa – a Palavra de Deus; no melhor lugar – o coração; para o melhor propósito – guardar-nos de pecar. “A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho” (Sl 119:105). A lei, ou a Palavra de Deus, não se apresenta como espelho, mas como lâmpada para nossos pés. E já que é uma lâmpada para os pés, somos capazes de andar confiantes onde antes tropeçávamos. “Uma luz, nova e preciosa, irradia de cada página. A verdade é revelada, palavras e frases se tornam claras e apropriadas para a ocasião” (Parábolas de Jesus, p. 132). A Bíblia é mesmo a Palavra de Deus! Vamos orar e pedir que Deus nos ajude a separar tempo para estudá-la? Querido Deus, muitas vezes corremos o dia todo atrás do urgente e deixamos de lado aquilo que é importante. Ajuda-nos a passarmos mais tempo contigo, com a Tua Palavra. Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: ansiedade,
				data: "Set 11, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Substitua a ansiedade",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: ansiedade,
				data: "Set 12, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Sua verdadeira identidade",
				conteudo:
					"Quando alguém pergunta “Quem é você?”, provavelmente sua primeira resposta será “Meu nome é…”. Se você der também o sobrenome, posso chegar mais perto ainda de sua identidade. Se eu for visitar uma universidade e fizer a mesma pergunta, ouvirei muitas respostas: “Sou novato”, “faço Administração”, “toco na banda”, “canto no coral”, etc.\n\nHá outro grupo que encontra sua identidade no trabalho e vai responder: sou médico, advogado, professor, empresário, tenho meu próprio negócio, etc. Outros, ainda, encontram sua identidade se referindo ao lugar de nascimento: sou nordestino, paulista, gaúcho, etc. Para alguns, você nem precisa perguntar “Quem é você?”, porque, quando vêm falar com você, têm um crachá com o nome e a função que exercem. Sua identidade fica resumida à identificação que têm naquele pedaço de plástico.\n\nDepois de tudo isso que você leu/ouviu, pergunto: O que torna você mais você? Você está contente com a pessoa que é? Que outras características pessoais você quer ter? Há alguma coisa sobre você que o faz diferente de todos os demais e o torna especial? Você está contente com a pessoa em que se tornou?\n\nHoje o mundo utiliza diferentes padrões para avaliar nossa identidade. Um deles está relacionado com posses. Você se sentiria uma pessoa mais importante se tivesse uma BMW ou um Uno Mille? Se em lugar de um Casio tivesse um Rolex? Depois de se preocupar com o que tem, sua reação pode ser igual à declaração de alguém que disse: “Levo minha vida comprando coisas que eu não preciso, com dinheiro que eu não tenho, para impressionar pessoas de quem eu não gosto.”\n\nQuando nossa identidade está em Cristo, já não vamos nos preocupar pelo fato de sermos medidos de acordo com os padrões do mundo. Quanto mais eu ensaiar quem sou em Cristo, mais perto vou chegar da identidade que Deus deseja que eu tenha.\n\nQuem somos nós? Sal da terra e luz do mundo (Mt 5:13, 14), e amigos de Cristo (Jo 15:15). Fomos redimidos e perdoados de todos os nossos pecados (Cl 1:14). Nada pode nos separar do amor de Deus (Rm 8:39). Podemos todas as coisas em Cristo, que nos fortalece (Fp 4:13).\n\nO melhor que Jesus pode dizer sobre a nova identidade é que somos uma nova criação: “Se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas” (2Co 5:17).\n\nReflita sobre isso no dia de hoje e ore comigo agora:\n\nQuerido Deus, obrigado pela escolha que fizestes em salvar a nossa vida do pecado e pelo privilégio da vida eterna. Somos teus filhos! Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: ansiedade,
				data: "Set 13, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Confiança e felicidade",
				conteudo:
					"A vida é uma rosa cheia de espinhos. Há problemas, todos os dias. Diante deles, o ser humano tem apenas duas alternativas: ou confia em Deus e segue as instruções divinas ou confia no próprio entendimento e tenta encontrar a saída para seus problemas nas próprias forças.\n\nConfiar é condição necessária para desenvolver qualquer relacionamento. Não há como viver sem confiar. Tudo que fazemos envolve confiança. Confiamos no padeiro, no motorista de ônibus, no piloto do avião… Muitas vezes, a confiança é traída. Por mais que o ser humano seja bom e tente cumprir suas promessas, está limitado pela sua própria humanidade. Por exemplo: Eu prometo dar uma bicicleta para meu neto no final do ano, e o que acontece se eu morrer dentro de um mês?\n\nPromessas humanas são falíveis, por serem humanas. Intenções humanas, com frequência, são egoístas e mentirosas. Nascem de um coração contaminado pelo vírus do pecado. Projetos humanos são passageiros e limitados, por causa da temporalidade da criatura.\n\nPor isso, o conselho de Salomão é: “O que confia no Senhor, esse é feliz.” É loucura confiar em Deus e, ao mesmo tempo, procurar a solução para os problemas da vida no esforço humano. “Confiar no Senhor” significa entrega, submissão e obediência. Essas atitudes não são próprias da natureza humana, mas são a única garantia de vitória. Por isso, o texto diz: “Atenta para o ensino [e] acha o bem.”\n\nComo todo dia, hoje também é um dia de decisões. Você está vivo. Viver é decidir. Para o bem ou para o mal, para a tristeza ou para a alegria. Dê a Deus a chance de ser o seu guia. Afinal de contas, o Criador conhece o caminho melhor do que a criatura. Ele é Deus. Suas promessas nunca falham.",
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
