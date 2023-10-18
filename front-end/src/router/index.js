import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Questions from "@/views/questions.vue";
import ArtigoView from "@/views/ArtigoView.vue";
import CreateArquivo from "@/views/AdicionarArtigoView.vue";
import loginView from "@/views/loginView.vue";
import registerView from "@/views/registerView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/register",
			name: "register",
			component: registerView,
		},
		{
			path: "/login",
			name: "login",
			component: loginView,
		},
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
