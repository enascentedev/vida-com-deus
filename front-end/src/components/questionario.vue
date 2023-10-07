<template>
	<div class="container mx-auto p-4">
		<h1 class="text-3xl font-bold mb-8 text-center text-blue-700">
			Questionário sobre o relacionamento com Deus
		</h1>

		<!-- Perguntas do questionário -->
		<div
			v-for="(pergunta, index) in perguntas"
			:key="index"
			class="mb-8 border rounded p-4 shadow-md">
			<h2 class="text-xl font-semibold mb-4 text-gray-800">
				{{ pergunta.texto }}
			</h2>
			<ul>
				<li
					v-for="(alternativa, aIndex) in pergunta.alternativas"
					:key="aIndex"
					class="mb-2">
					<label class="inline-flex items-center">
						<input
							type="radio"
							:value="alternativa"
							v-model="respostas[index]"
							@change="proximo(index)"
							class="form-radio text-blue-500 h-4 w-4" />
						<span class="ml-2 text-gray-700">{{ alternativa }}</span>
					</label>
				</li>
			</ul>
		</div>

		<!-- Botão para submeter -->
		<button
			class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
			@click="submeterQuestionario"
			:disabled="!questionarioConcluido">
			Submeter
		</button>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
	name: "Questionario",
	setup() {
		const router = useRouter();

		const perguntas = ref([
			{
				texto: "Com que frequência você lê a Bíblia?",
				alternativas: [
					"Nunca",
					"Uma vez por mês",
					"Uma vez por semana",
					"Diariamente",
				],
			},
			{
				texto: "Por quanto tempo você lê a Bíblia quando lê?",
				alternativas: [
					"Menos de 15 minutos",
					"15 a 30 minutos",
					"30 minutos a 1 hora",
					"Mais de 1 hora",
				],
			},
			{
				texto:
					"Você costuma fazer estudos bíblicos ou participar de grupos de estudo?",
				alternativas: ["Nunca", "Às vezes", "Com frequência", "Sempre"],
			},
			{
				texto: "Você já leu a Bíblia completa pelo menos uma vez?",
				alternativas: ["Nunca", "Sim, uma vez", "Sim, várias vezes"],
			},
			{
				texto:
					"Quais partes da Bíblia você gosta mais de ler? (Escolha até três)",
				alternativas: [
					"Gênesis",
					"Salmos",
					"Provérbios",
					"Evangelhos",
					"Atos dos Apóstolos",
					"Epístolas (Cartas)",
					"Apocalipse",
					"Outros",
				],
			},
			{
				texto: "Você costuma memorizar versículos bíblicos?",
				alternativas: ["Nunca", "Às vezes", "Com frequência", "Sempre"],
			},
			{
				texto:
					"Você participa de alguma atividade relacionada à Bíblia em sua comunidade religiosa?",
				alternativas: ["Não", "Às vezes", "Com frequência", "Sempre"],
			},
			{
				texto:
					"Como você descreveria seu entendimento das mensagens da Bíblia?",
				alternativas: [
					"Não entendo muito",
					"Entendo um pouco",
					"Entendo razoavelmente bem",
					"Tenho um profundo entendimento",
				],
			},
			{
				texto:
					"Você costuma buscar orientação na Bíblia para tomar decisões importantes em sua vida?",
				alternativas: ["Nunca", "Às vezes", "Com frequência", "Sempre"],
			},
			{
				texto: "Qual é o seu principal objetivo ao ler a Bíblia?",
				alternativas: [
					"Aprender mais sobre minha fé",
					"Crescer espiritualmente",
					"Encontrar conforto e orientação",
					"Outro",
				],
			},
		]);

		const respostas = ref([]);
		const perguntaAtual = ref(0);

		const questionarioConcluido = computed(() => {
			return perguntaAtual.value === perguntas.value.length;
		});

		const proximo = (index) => {
			if (index === perguntaAtual.value) {
				perguntaAtual.value++;
			}
		};

		const submeterQuestionario = () => {
			const rotas = {
				Nunca: "/leitoraprendiz",
				"Uma vez por mês": "/leitoraprendiz",
				"Uma vez por semana": "/leitoriniciante",
				Diariamente: "/leitorexperiente",
				"Menos de 15 minutos": "/leitoraprendiz",
				"15 a 30 minutos": "/leitoraprendiz",
				"30 minutos a 1 hora": "/leitoriniciante",
				"Mais de 1 hora": "/leitorexperiente",
				Nunca: "/leitoraprendiz",
				"Sim, uma vez": "/leitoriniciante",
				"Sim, várias vezes": "/leitorexperiente",
			};

			const rota = respostas.value.reduce((acc, resposta, index) => {
				return acc || rotas[resposta];
			}, "");

			if (rota) {
				router.push(rota);
			}
		};

		return {
			perguntas,
			respostas,
			perguntaAtual,
			questionarioConcluido,
			proximo,
			submeterQuestionario,
		};
	},
};
</script>
