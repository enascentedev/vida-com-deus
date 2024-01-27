<template>
	<footer>
		<div id="container">
			<p>&copy; 2023 , Todos os direitos reservados.</p>
			<a href="#"><i class="fab fa-facebook"></i></a>
			<a href="#"><i class="fab fa-twitter"></i></a>
			<a href="#"><i class="fab fa-github"></i></a>
			<a href="#"><i class="fab fa-youtube"></i></a>
		</div>
	</footer>
</template>
<script>
export default {
	name: "Footer",
	setup() {},
};
</script>
<style scoped postcss>
#container{
	@apply w-full flex gap-10 place-content-center p-5;
	p{
		@apply text-xs leading-5 text-gray-800;
	}
	a{
		@apply text-gray-800 hover:text-gray-500;
	}
}
</style>