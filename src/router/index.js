import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Questions from "@/views/questions.vue";
import ArtigoView from "@/views/ArtigoView.vue";
import CreateArquivo from "@/views/AdicionarArtigoView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/questionario",
			name: "questions",
			component: Questions,
		},
		{
			path: "/artigo-semanal",
			name: "ArtigoView",
			component: ArtigoView,
		},
		{
			path: "/criar-artigo",
			name: "CreateArquivo",
			component: CreateArquivo,
		},
	],
});

export default router;
