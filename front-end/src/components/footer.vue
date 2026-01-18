<template>
	<footer>
		<div id="container">
			<p>&copy; 2023 , Todos os direitos reservados.</p>
			<a
				href="https://x.com/EmanuelNascente"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitter"
			>
				<i class="fab fa-twitter"></i>
			</a>
			<a
				href="https://github.com/enascentedev"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<i class="fab fa-github"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/emanuel-nascente-3b36b122a/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
			>
				<i class="fab fa-linkedin"></i>
			</a>
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
	@apply w-full flex flex-col sm:flex-row flex-wrap gap-4 place-content-center items-center p-5 text-center;
	p{
		@apply text-xs leading-5 text-gray-800;
	}
	a{
		@apply text-gray-800 hover:text-gray-500;
	}
}
</style>