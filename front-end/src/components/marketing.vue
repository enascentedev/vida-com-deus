<template>
	<div class="container-marketing" :style="{ backgroundImage: 'url(' + imageBackground + ')' }">
		<img :src="logo" alt="Logo Life com Deus" />
		<div class="information">
			<span>Deus</span>
			<br />
			<span>Vida</span>
			como a sua.
		</div>
		<nav class="social"></nav>
	</div>
</template>

<script>
import imageBackground from "@/assets/imagens/amanhecer.jpg";
import backgroundImage from "@/assets/imagens/aflicoes.jpg";
import logo from "@/assets/imagens/aflicoes.jpg";

export default {
	name: "marketing",
	components: {},
	data() {
		return {
			imageBackground: imageBackground,
			logo: logo,
			backgroundImage: backgroundImage,
		};
	},
};
</script>
<style lang="postcss" scoped>
container-marketing {
	@apply h-full flex items-center flex-col  pt-16;
	img {
		@apply max-w-md object-cover;
	}
	.information {
		@apply pt-8 text-2xl text-center text-base-100;
		span {
			@apply text-accent font-semibold;
		}
	}
	.video {
		@apply my-8 w-1/2 p-2  rounded-md shadow-md bg-primary;
	}
	.social {
		@apply w-full pl-4 flex flex-col gap-1 items-center flex-wrap content-start;
		ul {
			@apply flex flex-col items-center;
		}
		a {
			@apply rounded hover:scale-125 ease-out duration-300 block text-2xl;
		}
	}
}
</style>
