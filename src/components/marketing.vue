<template>
	<div
		class="container-marketing"
		:style="{ backgroundImage: 'url(' + imageBackground + ')' }">
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

export default {
	name: "marketing",
	components: {},
	data() {
		return {
			imageBackground: imageBackground,
			logo: logo,
		};
	},
};
</script>
