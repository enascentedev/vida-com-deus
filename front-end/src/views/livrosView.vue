<script>
import livros from "@/components/livros.vue";
import Header from "@/components/header.vue";
export default {
	components: {
		livros,
		Header,
	},
};
</script>

<template>
	<Header />
	<main><livros /></main>
</template>
