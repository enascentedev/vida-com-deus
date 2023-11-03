<script>
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
import amanhecer from "@/assets/imagens/amanhecer.jpg";

import { artigosStore } from "@/stores/storeArtigo";
export default {
	name: "Artigo",
	data() {
		const store = artigosStore();
		const artigos = store.listaDeArtigos;
		const img = {
			tempoRefletir,
			amiltonMenezes,
			escolhas,
			amanhecer,
		};
		return {
			tempoRefletir,
			amiltonMenezes,
			escolhas,
			amanhecer,
			artigos,
			store: null,
		};
	},
};
</script>

<template>
	<div class="bg-white py-5 sm:py-10">
		<!-- <div class="flex justify-end pr-40">
			<div class="indicator">
				<div class="indicator-item indicator-bottom">
					<router-link to="/questionario">
						<button>Acessar</button></router-link
					>
				</div>
				<div class="card border">
					<div class="card-body">
						<h2 class="card-title">Questionário</h2>
						<p>Responda perguntas , para conhecermos melhor você</p>
					</div>
				</div>
			</div>
		</div> -->
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uma vida com Deus
				</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					Ouça a palavra de Deus de uma maneira leve, diversos artigos para
					meditar e refletir.
				</p>
				<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					<article
						v-for="(artigo, index) in artigos"
						:key="index"
						class="relative isolate flex flex-col gap-8 lg:flex-row">
						<div
							class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
							<img :src="tempoRefletir" alt="Minha Imagem" />
							<img
								:src="artigo.imagem"
								alt="Minha Imagem"
								class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
							<div
								class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
						</div>
						<div>
							<div class="flex items-center gap-x-4 text-xs">
								<time :datetime="artigo.data" class="text-gray-500">{{
									artigo.data
								}}</time>
								<!-- aqui coloco # q conforme o vídeo-->
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
									>{{ artigo.categoria }}</a
								>
							</div>
							<div class="group relative max-w-xl">
								<h3
									class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href="#">
										<span class="absolute inset-0"></span>
										{{ artigo.titulo }}
									</a>
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									{{ artigo.conteudo }}
								</p>
							</div>
							<div class="mt-6 flex border-t border-gray-900/5 pt-6">
								<div class="relative flex items-center gap-x-4">
									<img
										:src="amiltonMenezes"
										alt="amilton"
										class="h-10 w-10 rounded-full bg-gray-50" />
									<div class="text-sm leading-6">
										<p class="font-semibold text-gray-900">
											<a href="#">
												<span class="absolute inset-0"></span>
												{{ artigo.autor }}
											</a>
										</p>
										<p class="text-gray-600">Pastor</p>
									</div>
								</div>
							</div>
						</div>
					</article>

					<!-- More posts... -->
				</div>
			</div>
		</div>
	</div>
</template>
