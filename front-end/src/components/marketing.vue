<template>
	<div class="container-marketing" >
		<img :src="logo" alt="Logo Life com Deus" class="img" />
	</div>
</template>

<script>
import logo from "@/assets/imagens/aflicoes.jpg";

export default {
	name: "marketing",
	components: {},
	data() {
		return {
			logo: logo,
		};
	},
};
</script>
<style lang="postcss" scoped>
.container-marketing {
	@apply h-screen w-full flex items-center;
	.img {
		@apply w-full h-full;
	}
}
</style>
