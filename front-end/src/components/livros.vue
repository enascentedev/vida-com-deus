<template>
	<div class="bg-gray-50">
		<main class="py-24">
			<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
				<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
					<h1
						class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
						Encontre seu verso em algum livro
					</h1>
					<p class="mt-2 text-sm text-gray-500">
						Alguns insigths de livros que contém algum passagem que vale uma
						reflexão mais profunda.
					</p>
				</div>
			</div>

			<section aria-labelledby="recent-heading" class="mt-16">
				<h2 id="recent-heading" class="sr-only">Recent orders</h2>
				<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
					<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
						<div
							class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
							<h3 class="sr-only">
								Order placed on <time datetime="2021-07-06">Jul 6, 2021</time>
							</h3>

							<div
								class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
								<div class="relative flex justify-end lg:hidden">
									<div class="flex items-center"></div>

									<div
										class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-0-button"
										tabindex="-1">
										<div class="py-1" role="none">
											<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
											<a
												href="#"
												class="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												tabindex="-1"
												id="menu-0-item-0"
												>View</a
											>
											<a
												href="#"
												class="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												tabindex="-1"
												id="menu-0-item-1"
												>Invoice</a
											>
										</div>
									</div>
								</div>

								<div
									class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"></div>
							</div>

							<!-- Products -->
							<h4 class="sr-only">Items</h4>
							<ul role="list" class="divide-y divide-gray-200">
								<li class="p-4 sm:p-6">
									<div v-if="currentItem">
										<div class="flex items-center sm:items-start">
											<div
												class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
												<img
													src="https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/l/i/livro_as_25_leis_b_blicas_do_sucesso.jpg"
													alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
													class="h-full w-full object-cover object-center" />
											</div>
											<div class="ml-6 flex-1 text-sm">
												<div
													class="font-medium text-gray-900 sm:flex sm:justify-between">
													<h5>{{ currentItem.title }}</h5>
												</div>
												<p class="hidden text-gray-500 sm:mt-2 sm:block">
													{{ currentItem.insights }}
												</p>
											</div>
										</div>
									</div>

									<div class="mt-6 sm:flex sm:justify-between">
										<div class="flex items-center">
											<svg
												class="h-5 w-5 text-green-500"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true">
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
													clip-rule="evenodd" />
											</svg>
											<p class="ml-2 text-sm font-medium text-gray-500">
												<time datetime="2021-07-12">novembro, 2014</time>
											</p>
										</div>

										<div
											class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
											<div class="flex flex-1 justify-center">
												<button
													class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
													@click="previousItem"
													:disabled="currentIndex === 0">
													Anterior
												</button>
											</div>
											<div class="flex flex-1 justify-center pl-4">
												<button
													class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
													@click="nextItem"
													:disabled="
														currentIndex >= dataLivros.data.length - 1
													">
													Próximo
												</button>
											</div>
										</div>
									</div>
								</li>

								<!-- More products... -->
							</ul>
						</div>

						<!-- More orders... -->
					</div>
				</div>
			</section>
		</main>
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
