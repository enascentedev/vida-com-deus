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
	<div class="w-full h-full mx-10 py-10 px-8 bg-white">
		<div class="w-full">
			<h2 class="text-4xl font-bold">
				Uma vida com Deus
			</h2>
			<p class="mt-2 text-lg">
				Ouça a palavra de Deus de uma maneira leve, diversos artigos para
				meditar e refletir.
			</p>
			<div class="mt-20 space-y-20">
				<article
					v-for="(artigo, index) in artigos"
					:key="index"
					class="relative isolate gap-8 flex justify-between">
					<div
						class="relative">
						<img :src="tempoRefletir" alt="Minha Imagem" />
						<img
							:src="artigo.imagem"
							alt="Minha Imagem"
							class="absolute inset-0 h-full w-full" />
						
					</div>

					<div class="w-full mx-20 ">
						<div class="flex items-center gap-4 text-xs">
							<time :datetime="artigo.data">{{artigo.data}}</time>
							<a href="#" class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 ">{{ artigo.categoria }}</a>
						</div>
						<div class="w-full">
							<h3
								class="mt-3 text-lg font-semibold">
								<a href="#">
									<span class="w-full"></span>
									{{ artigo.titulo }}
								</a>
							</h3>
							<p class="mt-5 text-sm">
								{{ artigo.conteudo }}
							</p>
						</div>
						<div class="mt-6 flex border-t pt-6">
							<div class="relative flex items-center gap-4">
								<img
									:src="amiltonMenezes"
									alt="amilton"
									class="h-10 w-10 rounded-full" />
								<div class="text-sm leading-6">
									<p class="font-semibold">
										<a href="#">
											<span class="absolute inset-0"></span>
											{{ artigo.autor }}
										</a>
									</p>
									<p>Pastor</p>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</div>
	
</template>
