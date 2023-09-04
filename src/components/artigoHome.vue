<script>
import { ref, reactive } from "vue";
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
export default {
	name: "ArtigoHome",
	setup() {
		return {
			tempoRefletir,
			amiltonMenezes,
			escolhas,
		};
	},
};
</script>

<template>
	<div class="bg-white py-24 sm:py-14">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uma vida com Deus
				</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					Ouça a palavra de Deus de uma maneira leve, diversos artigos para
					meditar e refletir.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
					<img
						:src="tempoRefletir"
						alt="Minha Imagem"
						class="absolute inset-0 -z-10 h-full w-full object-cover" />
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
					<div
						class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

					<div
						class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
						<time datetime="2020-03-16" class="mr-8">Set 02, 2023</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg
								viewBox="0 0 2 2"
								class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
								<circle cx="1" cy="1" r="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<img
									:src="amiltonMenezes"
									alt="Minha Imagem"
									class="h-6 w-6 flex-none rounded-full bg-white/10" />
								Amilton Menezes
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
						<a href="#">
							<span class="absolute inset-0"></span>
							O tempo nunca para !
						</a>
					</h3>
				</article>
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
					<img
						:src="escolhas"
						alt="Minha Imagem"
						class="absolute inset-0 -z-10 h-full w-full object-cover" />
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
					<div
						class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

					<div
						class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
						<time datetime="2020-03-16" class="mr-8">Set 03, 2023</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg
								viewBox="0 0 2 2"
								class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
								<circle cx="1" cy="1" r="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<img
									:src="amiltonMenezes"
									alt="Minha Imagem"
									class="h-6 w-6 flex-none rounded-full bg-white/10" />
								Amilton Menezes
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
						<a href="#">
							<span class="absolute inset-0"></span>
							Que tipo de escolhas você tem feito?
						</a>
					</h3>
				</article>
				<!-- More posts... -->
			</div>
		</div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				<!-- More posts... -->
			</div>
		</div>
	</div>
</template>
