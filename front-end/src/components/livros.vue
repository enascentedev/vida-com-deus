<template>
	<div id="livros">
		<div class="titulo">
			<h2>
				Encontre seu verso em algum livro
			</h2>
			<p>
				Alguns insigths de livros que contém algum passagem que vale uma
				reflexão mais profunda.
			</p>
		</div>
		<section>
			<article>
				<div v-if="currentItem" class="container-artigo">
					<figure>
						<img
							src="https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/l/i/livro_as_25_leis_b_blicas_do_sucesso.jpg"
							alt="imagem do livro"
						 />
							<p>
								<cite>Wiliam Douglas</cite>
							</p>
					</figure>
					<div class="container-insigth">
						<h2>{{ currentItem.title }}</h2>
						<p>
							{{ currentItem.insights }}
						</p>
					</div>
					
				</div>
			</article>
		</section>
		<div class="container-button">
			<button @click="previousItem" :disabled="currentIndex === 0">Anterior</button>
			<button @click="nextItem" :disabled="currentIndex>= dataLivros.data.length">Próximo</button>
		</div>
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
<style scoped postcss>
#livros {
.titulo {
	@apply p-10;
	h2 {
		@apply font-bold tracking-tight text-base-content text-3xl;
	}
	p {
		@apply mt-2 text-base text-base-content;
	}
}
	section {
		@apply w-full h-1/2 px-10;
		article{
			@apply shadow-md border-t-2 border-base-200 rounded-md;
			.container-artigo{
				@apply flex items-center p-10;
				figure{
					@apply h-80 w-80 flex-shrink-0;
					img{
						@apply h-auto w-auto object-cover object-center;
					}
					p{
						@apply relative text-center mt-2 text-base-content;
					}
				}
				.container-insigth{
					@apply flex flex-col text-sm gap-5;
					h2{
						@apply font-bold text-2xl text-base-content;
					}
					p{
						@apply text-base text-base-content;
					}
				}
			}
		}
	}
	.container-button{
		@apply flex justify-center gap-2 mt-5;
		button{
			@apply hover:bg-sky-500 text-base-content;
		}
	}
}
</style>