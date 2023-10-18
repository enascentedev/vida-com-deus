<template>
	<main id="main">
		<section id="marketing">
			<Marketing />
		</section>
		<section id="login">
			<Register />
		</section>
	</main>
</template>
<script>
import Marketing from "@/components/marketing.vue";
import Register from "@/components/register.vue";

export default {
	name: "Layout",
	components: {
		Marketing,
		Register,
	},
};
</script>

<style lang="postcss" scoped>
#main {
	@apply flex min-h-screen;
}
#marketing {
	@apply w-2/3 hidden xl:block;
}
#login {
	@apply xl:w-1/3 w-full bg-base-100;
}
</style>
