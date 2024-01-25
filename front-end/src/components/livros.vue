<template>
	<div>
		<div class="p-8">
			<h2 class="font-bold tracking-tight text-gray-900 text-3xl">
				Encontre seu verso em algum livro
			</h2>
			<p class="mt-2 text-base ">
				Alguns insigths de livros que contém algum passagem que vale uma
				reflexão mais profunda.
			</p>
		</div>
		<section class="w-full h-1/2 px-10 ">
			<article class="shadow-md p-4 border-t-2 border-gray-100 rounded-md">
				<div v-if="currentItem" class="flex items-center">
					<figure class="h-80 w-80 flex-shrink-0">
						<img
							src="https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/l/i/livro_as_25_leis_b_blicas_do_sucesso.jpg"
							alt="imagem do livro"
							class="h-auto w-auto object-cover object-center" />
							<p class="relative text-center mt-2 ">
								<cite>Wiliam Douglas</cite>
							</p>
					</figure>
					<div class="flex flex-col text-sm gap-5">
						<h2 class="font-bold text-2xl">{{ currentItem.title }}</h2>
						<p class="text-base">
							{{ currentItem.insights }}
						</p>
					</div>
				</div>
				<div class="flex justify-center mt-6">
					<div class="flex items-center">
					</div>
					<div class="flex items-center gap-2">
						<div class="flex flex-1 justify-center">
							<button	class="hover:bg-sky-500" @click="previousItem" :disabled="currentIndex === 0">
								Anterior
							</button>
						</div>
						<div class="flex flex-1 justify-center">
							<button	class="hover:bg-sky-500" @click="nextItem" :disabled="currentIndex>= dataLivros.data.length">
								Próximo
							</button>
						</div>
					</div>
				</div>
			</article>
		</section>
	</div>
</template>
<script>
import { StoreLivros } from "@/stores/apiLivros";

export default {
	name: "livros",
	data() {
		return {
			dataLivros: { data: [] },
			currentIndex: 0,
		};
	},
	computed: {
		currentItem() {
			return this.dataLivros.data[this.currentIndex];
		},
	},
	methods: {
		nextItem() {
			if (this.currentIndex < this.dataLivros.data.length - 1) {
				this.currentIndex++;
			}
		},
		previousItem() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
		},
	},
	async mounted() {
		this.storeLivros = StoreLivros();
		this.dataLivros = await this.storeLivros.load();
	},
};
</script>
