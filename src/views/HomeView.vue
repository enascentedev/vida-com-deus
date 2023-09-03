<script>
import Header from "@/components/header.vue";
import Artigo from "@/components/artigo.vue";
export default {
	components: {
		Header,
		Artigo,
	},
};
</script>

<template>
	<header>
		<Header />
	</header>
	<main><Artigo /></main>
</template>
