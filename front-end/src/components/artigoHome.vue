<template>
	<div id="artigoHome">
		<div>
			<h2>
				Uma vida com Deus
			</h2>
			<p>
				Ouça a palavra de Deus de uma maneira leve, diversos artigos para
				meditar e refletir.
			</p>
		</div>
	<div class="dropdown mb-2">
		<div tabindex="0" role="button" class="btn m-1">
			Theme
			<svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
		</div>
		<ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
			<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
			<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
			<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
			<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
			<li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
		</ul>
</div>
		<div class="cards">
			<article v-for="item in this.data.data" :key="item.id">
				<router-link to="/artigo-semanal">
					<img :src="item.imagem"	alt="teste"	class="cards-imagem"/>
				</router-link>
				<div class="cards-titulo">
					<span>
						<h3>
							<a href="/artigo-semanal">
								{{ item.titulo }}
							</a>
						</h3>
						<div>
							<img :src="item.autorImagem" alt="Minha Imagem"/>
						{{ item.autor }}
						</div>
					</span>
				</div>
			</article>
		</div>
		</div>
</template>

<script>
import { StoreApi } from "@/stores/apiArtigos";
import { artigosStore } from "@/stores/storeArtigo";

export default {
	name: "ArtigoHome",
	components: {},
	data() {
		return {
			data: [],
			storeApi: [],
			store: [],
		};
	},

	async mounted() {
		// store
		this.store = artigosStore();
		this.storeApi = StoreApi();

		// data
		this.data = await this.storeApi.load();
	},
};
</script>
<style scoped postcss>
#artigoHome{
	@apply h-full w-full p-10 bg-base-100;
	div{
		@apply text-center;
		h2{
			@apply text-4xl font-bold;
		}
		p{
			@apply mt-2 text-lg text-base-content;
		}
	}
	.cards{
		@apply h-full grid md:grid-cols-3 grid-cols-1 gap-5 p-2;
		@apply sm:p-10;
		article{
			@apply h-80 relative isolate flex flex-col px-2;
			.cards-imagem{
				@apply h-full w-11/12 absolute inset-0 -z-10 object-cover;
				@apply sm:w-full;
			}
			.cards-titulo{
				@apply w-full flex flex-col items-end justify-center text-sm text-base-100 pr-10;
				@apply sm:pr-0;
				span{
				@apply absolute bottom-20;
				@apply sm:bottom-10;
					h3{
					@apply text-lg font-semibold text-base-100;
					}
					div{
						@apply absolute right-0 -bottom-8 flex justify-between gap-2;
					}
					img{
						@apply h-6 w-6 rounded-full bg-base-100;
					}
				}
			}
		}
	}
}
</style>
