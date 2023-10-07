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

const imagens = [
	tempoRefletir,
	escolhas,
	amanhecer,
	coracaoQuebrantado,
	olhosdeDeus,
	ansiedade,
	aflicoes,
];
export const artigosStore = defineStore({
	id: "artigos",
	state: () => ({
		artigos: [
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 02, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O tempo nunca para !",
				conteudo:
					"O relógio da vida só para uma vez e homem algum tem poder	mesmo de imaginar, quando os ponteiros vão deixar de girar.	Cedo ou tarde? Impossível saber, agora é o único tempo que tendes à mão. Não confieis no amanhã, pois o relógio poderá	estar parado então.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 03, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Que tipo de escolhas você tem feito?",
				conteudo:
					"Todo ser humano nasce livre. As escolhas fazem a diferença.Uns escolhem para o bem, outros para o mal. No verso de hoje,	Salomão coloca a responsabilidade da vitória ou da derrota nas			mãos da própria pessoa. É verdade que existem muitas explicações para a derrota. O clima, as circunstâncias, a falta de oportunidades, os problemas, enfim. Difícil é aceitar	o fato de que a maioria das derrotas tem raízes nas decisões	erradas que tomamos.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 04, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "O plano de Deus para você",
				conteudo:
					"Não queira tentar garantir seu futuro com seus próprios  planos. Ele, em Sua infinita sabedoria, sabe e deseja o que é  melhor para você. Por isso, deseje estar no centro dos planos  de Deus destinados ao seu bem, com a certeza de que Ele lhe  dará todo o necessário para lidar com o que vem pela frente. Quando orar, confesse a Deus os seus temores e suas dúvidas e  peça ao bondoso Pai celestial que Ele o fortaleça para que  você persevere sempre. Lembre-se de que Deus “é capaz de fazer  infinitamente mais do que tudo o que pedimos ou pensamos, de  acordo com o Seu poder que atua em nós” (Ef 3:20). Mantenha os  olhos fixos no Senhor, e Ele o guardará em perfeita paz  enquanto o conduz ao futuro que preparou especialmente para  você. Na primeira carta escrita por Pedro, encontramos esta  preciosidade: “Humilhai-vos, portanto, sob a poderosa mão de  Deus, para que Ele, em tempo oportuno, vos exalte, lançando  sobre Ele toda a vossa ansiedade, porque Ele tem cuidado de  vós” (5:6 e 7). Lance todos os seus cuidados sobre o Senhor,  sabendo que Ele cuida de você e não o deixará cair. O Senhor  deseja segurar a sua mão hoje para que você ande ao lado dEle  em direção ao futuro que Ele mesmo lhe preparou.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 05, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Muitas são as aflições do justo, o Senhor de todas o livra",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 06, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo:
					" Opiniões conflitantes tornam-se campos de batalha entre indivíduos. ",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 07, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Como enxergar com os olhos de Deus?",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 08, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Uma questão do coração",
				conteudo:
					"Salmo 119:11 – Guardei no coração a Tua palavra para não pecar contra Ti. O Salmo 119 é um poema com 22 estrofes, e cada uma dessas estrofes leva como título uma das 28 letras do alfabeto hebraico. O título da primeira estrofe é Aleph, a primeira letra do alfabeto, e assim todas as estrofes são nomeadas com o restante das letras. No maior livro da Bíblia, o maior capítulo exalta e celebra a lei, a Palavra de Deus. A Bíblia é chamada pelo salmista como “Tua Palavra”. A Bíblia pode ser, na estante, o livro mais importante ou pode ser como qualquer outro livro. A diferença está na quantidade de tempo que lhe dedicamos e para que a usamos. Uma das coisas fascinantes na Bíblia é que ela é um livro para gente jovem. Verso 9 – Como pode o jovem manter pura a sua conduta? Nesse verso está a pergunta mais difícil a ser respondida por um jovem: Como pode se manter puro diante de tanta imoralidade aberta e disponível a qualquer hora? Já que tem tanta energia e hormônios à flor da pele, como o jovem pode ser e se manter puro? Como podemos salvar o coração, a mente e o corpo do jovem? Seria bom que essa pergunta fizesse parte de sua oração: “Como posso manter puro meu coração?” A resposta é clara. A Bíblia deve ser nosso guia e devemos cuidar para exercitar vigilância, para que nossa vida esteja de acordo com o que Deus pede. Verso 11 – Guardei no coração a Tua palavra. Que lugar melhor existiria ou que solo seria mais fértil para a Bíblia do que um novo coração? Vamos esconder, entesourar, guardar dentro do coração renovado a Palavra de Deus! Um famoso pregador resumia o verso 11 da seguinte maneira: “A melhor coisa, no melhor lugar, para o melhor propósito.” Ou seja, a melhor coisa – a Palavra de Deus; no melhor lugar – o coração; para o melhor propósito – guardar-nos de pecar. “A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho” (Sl 119:105). A lei, ou a Palavra de Deus, não se apresenta como espelho, mas como lâmpada para nossos pés. E já que é uma lâmpada para os pés, somos capazes de andar confiantes onde antes tropeçávamos. “Uma luz, nova e preciosa, irradia de cada página. A verdade é revelada, palavras e frases se tornam claras e apropriadas para a ocasião” (Parábolas de Jesus, p. 132). A Bíblia é mesmo a Palavra de Deus! Vamos orar e pedir que Deus nos ajude a separar tempo para estudá-la? Querido Deus, muitas vezes corremos o dia todo atrás do urgente e deixamos de lado aquilo que é importante. Ajuda-nos a passarmos mais tempo contigo, com a Tua Palavra. Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 11, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Substitua a ansiedade",
				conteudo: "vazio",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 12, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Sua verdadeira identidade",
				conteudo:
					"Quando alguém pergunta “Quem é você?”, provavelmente sua primeira resposta será “Meu nome é…”. Se você der também o sobrenome, posso chegar mais perto ainda de sua identidade. Se eu for visitar uma universidade e fizer a mesma pergunta, ouvirei muitas respostas: “Sou novato”, “faço Administração”, “toco na banda”, “canto no coral”, etc.\n\nHá outro grupo que encontra sua identidade no trabalho e vai responder: sou médico, advogado, professor, empresário, tenho meu próprio negócio, etc. Outros, ainda, encontram sua identidade se referindo ao lugar de nascimento: sou nordestino, paulista, gaúcho, etc. Para alguns, você nem precisa perguntar “Quem é você?”, porque, quando vêm falar com você, têm um crachá com o nome e a função que exercem. Sua identidade fica resumida à identificação que têm naquele pedaço de plástico.\n\nDepois de tudo isso que você leu/ouviu, pergunto: O que torna você mais você? Você está contente com a pessoa que é? Que outras características pessoais você quer ter? Há alguma coisa sobre você que o faz diferente de todos os demais e o torna especial? Você está contente com a pessoa em que se tornou?\n\nHoje o mundo utiliza diferentes padrões para avaliar nossa identidade. Um deles está relacionado com posses. Você se sentiria uma pessoa mais importante se tivesse uma BMW ou um Uno Mille? Se em lugar de um Casio tivesse um Rolex? Depois de se preocupar com o que tem, sua reação pode ser igual à declaração de alguém que disse: “Levo minha vida comprando coisas que eu não preciso, com dinheiro que eu não tenho, para impressionar pessoas de quem eu não gosto.”\n\nQuando nossa identidade está em Cristo, já não vamos nos preocupar pelo fato de sermos medidos de acordo com os padrões do mundo. Quanto mais eu ensaiar quem sou em Cristo, mais perto vou chegar da identidade que Deus deseja que eu tenha.\n\nQuem somos nós? Sal da terra e luz do mundo (Mt 5:13, 14), e amigos de Cristo (Jo 15:15). Fomos redimidos e perdoados de todos os nossos pecados (Cl 1:14). Nada pode nos separar do amor de Deus (Rm 8:39). Podemos todas as coisas em Cristo, que nos fortalece (Fp 4:13).\n\nO melhor que Jesus pode dizer sobre a nova identidade é que somos uma nova criação: “Se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas” (2Co 5:17).\n\nReflita sobre isso no dia de hoje e ore comigo agora:\n\nQuerido Deus, obrigado pela escolha que fizestes em salvar a nossa vida do pecado e pelo privilégio da vida eterna. Somos teus filhos! Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 13, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Confiança e felicidade",
				conteudo:
					"A vida é uma rosa cheia de espinhos. Há problemas, todos os dias. Diante deles, o ser humano tem apenas duas alternativas: ou confia em Deus e segue as instruções divinas ou confia no próprio entendimento e tenta encontrar a saída para seus problemas nas próprias forças.\n\nConfiar é condição necessária para desenvolver qualquer relacionamento. Não há como viver sem confiar. Tudo que fazemos envolve confiança. Confiamos no padeiro, no motorista de ônibus, no piloto do avião… Muitas vezes, a confiança é traída. Por mais que o ser humano seja bom e tente cumprir suas promessas, está limitado pela sua própria humanidade. Por exemplo: Eu prometo dar uma bicicleta para meu neto no final do ano, e o que acontece se eu morrer dentro de um mês?\n\nPromessas humanas são falíveis, por serem humanas. Intenções humanas, com frequência, são egoístas e mentirosas. Nascem de um coração contaminado pelo vírus do pecado. Projetos humanos são passageiros e limitados, por causa da temporalidade da criatura.\n\nPor isso, o conselho de Salomão é: “O que confia no Senhor, esse é feliz.” É loucura confiar em Deus e, ao mesmo tempo, procurar a solução para os problemas da vida no esforço humano. “Confiar no Senhor” significa entrega, submissão e obediência. Essas atitudes não são próprias da natureza humana, mas são a única garantia de vitória. Por isso, o texto diz: “Atenta para o ensino [e] acha o bem.”\n\nComo todo dia, hoje também é um dia de decisões. Você está vivo. Viver é decidir. Para o bem ou para o mal, para a tristeza ou para a alegria. Dê a Deus a chance de ser o seu guia. Afinal de contas, o Criador conhece o caminho melhor do que a criatura. Ele é Deus. Suas promessas nunca falham.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 14, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Rendição e confiança",
				conteudo:
					"A vida pode ser cruel, mas Deus não é. A vida pode não ser justa, mas Deus é! Confiar não significa que entendo ou que aceito o que está acontecendo. Confiar não significa que eu goste do que está acontecendo ou que aquilo seja justo. Não significa que as experiências sejam justas ou que eu as mereço. Confiar não significa que eu acredito que Deus tenha sido a causa do que estou passando. Confiar significa que entendo que Deus me ama, e que Ele vai guiar-me através desta experiência. Significa que, apesar do que está acontecendo, ainda tenho confiança em Deus. Significa que descanso em Seu cuidado e amor, embora não entenda. Confiar significa que creio que Ele não me deseja nenhum mal. Ele é meu amigo.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 15, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Por que agimos desse modo?",
				conteudo:
					"Você ora tanto quanto Deus deseja? Tem reservado diariamente um tempo para meditar em Sua Palavra? Se a resposta é não, peça a Deus que lhe renove o entusiasmo de passar tempo com Ele. Restabeleça a paixão e o significado de estar na presença de Deus. Podemos orar sobre isso, agora? Pai Santo, ajuda-me a nunca ser descuidado em relação aos Teus caminhos ou à Tua Palavra. Capacita-me a não permitir que qualquer coisa relacionada à minha adoração a Ti torne-se sem vida ou se transforme num ritual sem profundidade. Mantém frescas e vivas em meu coração as disciplinas da oração, do louvor e da leitura da Tua Palavra. Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 16 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Graça sem fronteiras",
				conteudo:
					"Naamã era comandante do exército da Síria, ele sofria de lepra. Na casa dele trabalhava uma garota israelita que fora capturada numa das incursões a Israel, quem sabe liderada pelo próprio Naamã. Essa garota se tornou agente de boas-novas e fez saber por meio da esposa de Naamã que ele poderia ser curado se fosse a Israel se encontrar com o profeta Eliseu.Naamã, como estava acostumado à pompa e circunstância, salas VIP e honrarias, exibição de poder, esperava uma cura ostentosa, uma ocasião de grande espetáculo. Mas ficou chocado pela recepção fria e pela atitude de indiferença do profeta. Eliseu não enviou senão uma receita para o tratamento: se quisesse sarar da lepra, Naamã teria que mergulhar sete vezes nas lamacentas águas do rio Jordão. O ego de Naamã despertou-lhe o patriotismo e ele argumentou que os rios de Damasco eram melhores. Mas, com a ajuda de seus assessores, o bom senso prevaleceu. Ele resolveu mergulhar sete vezes e o milagre aconteceu. Ele foi curado! Fisicamente, se tornou nova pessoa. A narrativa está ali por alguma razão, mostrando que o perdão, a salvação e a vida nova vêm pela graça de Deus, independentemente de riqueza, posição, nacionalidade, e está ao seu alcance agora. Não são necessárias peregrinações nem caravanas; ela está ao seu alcance agora. Onde você está: na sala, no quarto, no escritório, no ambiente de trabalho. “Aspergirei água pura sobre vocês e ficarão puros; Eu os purificarei de todas as suas impurezas” (Ez 36:25).",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 17 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Em todo tempo",
				conteudo:
					"É comum louvar a Deus quando o coração transborda de alegria e gratidão. É também comum procurá-Lo quando as coisas parecem escapar do controle e você sente que não tem mais forças para continuar resistindo aos furacões da vida. Não falo de furacões como o Katrina ou o Vilma, que arrasaram tudo, mas pelo menos deixaram a esperança da reconstrução. Refiro-me àqueles vendavais emocionais que levam embora até a vontade de continuar vivendo.O humanismo de nossos dias concentra a atenção do homem no próprio homem. “Busque a solução dentro de você”, afirma. “Tire a energia interior”, declara. A teologia bíblica é teocêntrica. Segundo ela, todos os caminhos e intenções humanas devem convergir para Deus. A Bíblia ensina que Deus está no Céu, mas quer estar na vida da criatura. Todos os dias e em todos os momentos.Abra o coração a Jesus. Abrace seus amados. Encoraje o fraco, conforte o triste e encare com segurança os desafios da vida. Ah! Não se esqueça: Do nascimento do sol até ao ocaso, louvado seja o nome do Senhor.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 18 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Irmão Saulo",
				conteudo:
					"Fernando Pessoa disse: “O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso, existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.”Um momento inesquecível na vida de Paulo foi aquele em que ele recebeu a visita de Ananias, três dias depois de sua conversão. Ao receber a incumbência de conversar com Saulo, Ananias reagiu como qualquer um de nós reagiria. Tinha suas reservas. “É isso mesmo, Senhor, que Tu queres? Ele perseguiu o Teu povo e lançou homens e mulheres na prisão!”Saulo estava orando, enquanto aguardava a visita de alguém dentre os cristãos. De repente, sem esperar, sentiu uma mão tocando-lhe o ombro. Em seguida, ouviu palavras que jamais ouvira antes: “Irmão Saulo.”Como perseguidor, ele não merecia tais boas-vindas. Ele também não esperava ser abraçado pelas pessoas a quem perseguira. Portanto, ele nunca se esqueceu daquele gesto e daquelas palavras.	Ao tocar Paulo no ombro, Ananias estava dizendo: “Eu o aceito. Estou com você. Vai dar tudo certo. Não se preocupe.”Henry Drummond escreveu certa vez: “Quantos pródigos são mantidos fora do reino pelo caráter frio, desagradável daqueles que professam estar dentro.”O evangelho nos resgata do medo de ser rejeitados. Jesus foi mestre na arte da aceitação. Somos convidados a demonstrar essa aceitação no olhar, no tom de voz, no sorriso, no toque, no aperto de mão. Hoje, como extensão de Seu ministério, a igreja deve dar boas-vindas aos Saulos, Zaqueus, Madalenas e mendigos do caminho, pois Ananias seguiu o exemplo do Mestre.Com essas duas palavras e com seu gesto de aceitação, Ananias estava plantando no coração de Paulo a semente da graça de Deus. No fim de sua vida, Paulo escreveu: Essa afirmação é fiel e digna de toda aceitação: Cristo Jesus veio ao mundo para salvar os pecadores, dos quais eu sou o pior (1Tm 1:15).",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 19 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Salvo",
				conteudo:
					"Você não precisa viver preso às suas recordações passadas. Não há motivo para viver escondido nos tenebrosos túneis da culpa. Desabroche como a flor. Amanheça como o dia. Liberte-se como a borboleta do casulo. Viva. Na cruz do Calvário, pela misericórdia e pela fidelidade de Deus, o preço de sua culpa já foi pago. Hoje, “todos os confins da Terra” precisam ver o milagre que aconteceu na sua vida",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 20 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Um novo amanhã",
				conteudo:
					"Vivemos sob constante ameaça; nuvens de incerteza cobrem nosso horizonte. Abrir um pacote, viajar de avião, trem, ou ir ao centro da cidade se tornaram eventos estressantes. Precisamos de esperança, pois muitas perguntas invadem nossa mente: Quem controla o futuro? Terão os terroristas a última palavra? Existe uma perspectiva melhor? Sim, há alguém que controla o futuro e que planeja um final feliz para o mundo. Perto do fim do Seu ministério terrestre, Jesus Cristo prometeu aos discípulos: “Mandará o Filho do homem os Seus anjos, que ajuntarão do Seu reino todos os escândalos e os que praticaram a iniquidade” (Mt 13:41). Com essas palavras, Ele garantiu vir e destruir o mal, substituindo-o pela justiça. Ele tem o futuro em Suas mãos.",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 21 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Emoções e pensamentos negativos",
				conteudo:
					"Eu nunca realizei um estudo científico sobre o assunto, mas, pelo que já vi, creio que há mais pessoas no mundo que não se sentem amadas do que as que se sentem. Isso é trágico e explica por que há tantas pessoas dominadas por emoções e pensamentos negativos. Descobri que, toda vez que eu louvava a Deus, as vozes negativas em minha cabeça eram silenciadas. Se você fizer isso toda vez que pensamentos negativos vierem à sua mente, eles, por fim, desaparecerão. O louvor e a adoração são extremamente importantes para manter uma mente sã e limpa; eles silenciarão as vozes desencaminhantes, endireitarão seu caminho e o capacitarão melhor para ouvir Deus falar ao seu coração.Pratique isso no dia de hoje e ore comigo agora: Senhor, obrigado por curares as nossas feridas quando estamos com o coração partido. Tu nos levantas quando estamos fracos e vulneráveis. Eu Te louvo e Te dou graças porque me tens dado uma mente sã. Graças Te dou porque tenho a mente de Cristo. Ajuda-me a ser renovado no espírito do meu entendimento, a fim de dissipar as emoções e os pensamentos negativos. Neste dia, ponho veste de louvor, em vez de espírito angustiado, e Te glorifico como Senhor das minhas emoções e dos meus pensamentos. Em nome de Jesus, amém!",
			},
			{
				categoria: "#autoajuda",
				imagem: getRandomImage(),
				data: "Set 22, 2023",
				autorImagem: amiltonMenezes,
				autor: "Amilton Menezes",
				titulo: "Como resistir a tentação",
				conteudo:
					"Foi no deserto que teve lugar a grande luta entre o bem e o mal. Para Adão e Eva, a luta foi travada num jardim. Hoje, esse conflito segue acontecendo na sala de aula, no quarto, no local de trabalho, etc. Temos que pensar na tentação não apenas em termos de fazer o que não devemos, mas de esquecer nossa verdadeira identidade. A tentação diz: esqueça quem você é só por cinco minutos, um dia, um fim de semana. Não há nenhuma câmera oculta registrando o que ninguém vai descobrir. É só desta vez. Outros também podem fazer isso. Não vai prejudicar ninguém.",
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
function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * imagens.length);
	return imagens[randomIndex];
}
