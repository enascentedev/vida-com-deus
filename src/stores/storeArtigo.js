import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const artigosStore = defineStore({
	id: "artigos",
	state: () => ({
		artigos: [],
	}),
	getters: {
		//  getters para acessar os artigos, se necessário.
	},
	mutations: {
		adicionarArtigo(state, artigo) {
			state.artigos.unshift(artigo);
		},
	},
	actions: {
		//  ações para criar e adicionar novos artigos.
		criarNovoArtigo({ commit }, artigo) {
			commit("adicionarArtigo", artigo);
		},
	},
});
