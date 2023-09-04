import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Questions from "@/views/questions.vue";
import ArtigoView from "@/views/ArtigoView.vue";

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
			path: "/artigosemanal",
			name: "ArtigoView",
			component: ArtigoView,
		},
	],
});

export default router;
