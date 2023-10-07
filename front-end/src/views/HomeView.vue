<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import ArtigoHome from "@/components/artigoHome.vue";
export default {
	components: {
		Header,
		ArtigoHome,
		Footer,
	},
};
</script>

<template>
	<Header />

	<main><ArtigoHome /></main>
	<Footer />
</template>
