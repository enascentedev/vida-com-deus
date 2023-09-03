<script>
import { ref, reactive } from "vue";
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
export default {
	name: "Artigo",
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
	<div class="bg-white py-5 sm:py-10">
		<div class="flex justify-end pr-40">
			<div class="indicator">
				<div class="indicator-item indicator-bottom">
					<router-link to="/questionario">
						<button class="btn btn-primary">Acessar</button></router-link
					>
				</div>
				<div class="card border">
					<div class="card-body">
						<h2 class="card-title">Questionário</h2>
						<p>Responda perguntas , para conhecermos melhor você</p>
					</div>
				</div>
			</div>
		</div>
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
					<article class="relative isolate flex flex-col gap-8 lg:flex-row">
						<div
							class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
							<img :src="tempoRefletir" alt="Minha Imagem" />
							<img
								:src="tempoRefletir"
								alt="Minha Imagem"
								class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
							<div
								class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
						</div>
						<div>
							<div class="flex items-center gap-x-4 text-xs">
								<time datetime="2020-03-16" class="text-gray-500"
									>Set 02, 2023</time
								>
								<!-- aqui coloco # q conforme o vídeo-->
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
									>Auto ajuda</a
								>
							</div>
							<div class="group relative max-w-xl">
								<h3
									class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href="#">
										<span class="absolute inset-0"></span>
										O tempo nunca para !
									</a>
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									O relógio da vida só para uma vez e homem algum tem poder
									mesmo de imaginar, quando os ponteiros vão deixar de girar.
									Cedo ou tarde? Impossível saber, agora é o único tempo que
									tendes à mão. Não confieis no amanhã, pois o relógio poderá
									estar parado então.
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
												Amilton Menezes
											</a>
										</p>
										<p class="text-gray-600">Pastor</p>
									</div>
								</div>
							</div>
						</div>
					</article>

					<article class="relative isolate flex flex-col gap-8 lg:flex-row">
						<div
							class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
							<img :src="escolhas" alt="Minha Imagem" />
							<img
								:src="escolhas"
								alt="Minha Imagem"
								class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
							<div
								class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
						</div>
						<div>
							<div class="flex items-center gap-x-4 text-xs">
								<time datetime="2020-03-16" class="text-gray-500"
									>Set 03, 2023</time
								>
								<!-- aqui coloco # q conforme o vídeo-->
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
									>Auto ajuda</a
								>
							</div>
							<div class="group relative max-w-xl">
								<h3
									class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href="#">
										<span class="absolute inset-0"></span>
										Que tipo de escolhas você tem feito?
									</a>
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									Todo ser humano nasce livre. As escolhas fazem a diferença.
									Uns escolhem para o bem, outros para o mal. No verso de hoje,
									Salomão coloca a responsabilidade da vitória ou da derrota nas
									mãos da própria pessoa. É verdade que existem muitas
									explicações para a derrota. O clima, as circunstâncias, a
									falta de oportunidades, os problemas, enfim. Difícil é aceitar
									o fato de que a maioria das derrotas tem raízes nas decisões
									erradas que tomamos.
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
												Amilton Menezes
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
