<template>
	<div class="bg-white py-10 h-full w-full">
		<div class="mx-10 px-6">
			<div class="mx-10 text-center">
				<h2 class="text-4xl font-bold ">
					Uma vida com Deus
				</h2>
				<p class="mt-2 text-lg text-gray-600">
					Ouça a palavra de Deus de uma maneira leve, diversos artigos para
					meditar e refletir.
				</p>
			</div>
			<div class="mx-10 mt-16 grid grid-cols-3 gap-5 h-full">
				<article v-for="item in this.data.data" :key="item.id" class="relative isolate flex flex-col px-2 h-80">
					<router-link to="/artigo-semanal">
						<img :src="item.imagem"	alt="teste"	class="absolute inset-0 -z-10 h-full w-full object-cover" />
					</router-link>
					<div class="flex flex-col items-end justify-end text-sm text-white">
						<div class="absolute bottom-10">
							<h3 class="text-lg font-semibold text-white">
								<a href="/artigo-semanal">
									{{ item.titulo }}
								</a>
							</h3>
							<div class="flex justify-between gap-2 absolute right-0 -bottom-8">
								<img :src="item.autorImagem" alt="Minha Imagem"	class="h-6 w-6 rounded-full bg-white" />
							{{ item.autor }}
							</div>
						</div>
					</div>
				</article>
			</div>
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
#artigo{

}
</style>
