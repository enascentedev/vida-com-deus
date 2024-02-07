<template>
	<main id="main">
		<section id="register">
			<ChatRegister />
		</section>
		<section id="chat">
			<ChatBoot />
		</section>
	</main>
</template>
<script>
import ChatBoot from "@/components/chatBoot.vue";
import ChatRegister from "@/components/chatRegister.vue";

export default {
	name: "Layout",
	components: {
		ChatBoot,
		ChatRegister,
	},
};
</script>

<style lang="postcss" scoped>
#main {
	@apply flex min-h-screen;
}
#register {
	@apply w-1/3 hidden xl:block;
}
#chat {
	@apply xl:w-2/3 w-full bg-base-100;
}
</style>
