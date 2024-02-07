import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/lembrar-senha",
			name: "forgottenName",
			component: () => import("@/views/forgottenView.vue"),
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/views/registerView.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/loginView.vue"),
		},
		{
			path: "/",
			component: () => import("@/views/HomeView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/HomeView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/artigo-semanal",
			name: "ArtigoView",
			component: () => import("@/views/ArtigoView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/livros",
			name: "livrosView",
			component: () => import("@/views/livrosView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/chatboot",
			name: "chatBoot",
			component: () => import("@/views/chatbootView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	// Obtém o token atual do localStorage
	const currentToken = localStorage.getItem("authToken");

	if (to.matched.some((route) => route.meta.requiresAuth)) {
		if (currentToken) {
			next();
		} else {
			console.log("O usuário não está autenticado");
			next("/login");
		}
	} else {
		next();
	}
});

export default router;
