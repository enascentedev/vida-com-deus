<template>
	<div id="livros">
		<div class="titulo">
			<h2>
				Encontre seu verso em algum livro
			</h2>
			<p>
				Alguns insights de livros que contém alguma passagem que vale uma
				reflexão mais profunda.
			</p>
		</div>
		<section>
			<article>
				<div v-if="currentItem" class="container-artigo">
					<figure>
						<img
							src="https://m.media-amazon.com/images/I/81TZ3vaz6IL._AC_UF894,1000_QL80_.jpg"
							alt="imagem do livro"
						/>
						<p>
							<cite>Wiliam Douglas</cite>
						</p>
					</figure>
					<div class="container-insigth">
						<h2>{{ currentItem.title }}</h2>
						<p>{{ currentItem.insights }}</p>
					</div>
				</div>
			</article>
		</section>
		<div class="container-button">
			<button @click="previousItem">Anterior</button>
			<button @click="nextItem">Próximo</button>
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
			return this.dataLivros.data[this.currentIndex] || null;
		},
	},
	methods: {
		// Botão "Próximo" com comportamento circular
		nextItem() {
			this.currentIndex = (this.currentIndex + 1) % this.dataLivros.data.length;
		},
		// Botão "Anterior" com comportamento circular
		previousItem() {
			this.currentIndex =
				(this.currentIndex - 1 + this.dataLivros.data.length) % this.dataLivros.data.length;
		},
	},
	async mounted() {
		try {
			this.storeLivros = StoreLivros();
			this.dataLivros = await this.storeLivros.load();
			if (this.dataLivros.data.length === 0) {
				console.warn("Nenhum dado encontrado.");
			}
		} catch (error) {
			console.error("Erro ao carregar os dados:", error);
		}
	},
};
</script>

<style scoped postcss>
#livros {
	.titulo {
		@apply px-4 md:px-10 py-5;
		h2 {
			@apply font-bold tracking-tight text-base-content text-3xl;
		}
		p {
			@apply mt-2 text-base text-base-content;
		}
	}
	section {
		@apply w-full h-full px-4 md:px-10;
		article {
			@apply shadow-md border-t-2 border-base-200 rounded-md;
			.container-artigo {
				@apply flex flex-col md:flex-row items-center p-5 gap-4;
				figure {
					@apply h-full w-full md:w-80 md:mx-5 flex-shrink-0;
					img {
						@apply w-full h-32 object-cover object-center md:h-80;
					}
					p {
						@apply relative text-center mt-2 text-base-content;
					}
				}
				.container-insigth {
					@apply flex flex-col text-sm gap-5 text-center md:text-left;
					h2 {
						@apply font-bold text-2xl text-base-content;
					}
					p {
						@apply text-base text-base-content;
					}
				}
			}
		}
	}
	.container-button {
		@apply flex justify-center gap-2 my-5;
		button {
			@apply hover:bg-sky-500 text-base-content;
		}
	}
}
</style>
