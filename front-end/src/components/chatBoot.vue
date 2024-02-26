<template>
	<div id="chatBoot">

		<div class="container-avatar">
			<!-- usuário -->
			<div class="chat chat-start p-5">
				<div class="chat-image avatar">
					<figure class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</figure>
				</div>
				<div class="chat-header">
					Usuário X
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div class="chat-bubble">mensagem usuário</div>
				<div class="chat-footer opacity-50">
					enviado
				</div>
			</div>

			<!-- Robô -->
			<div class="chat chat-end p-5">
				<div class="chat-image avatar">
					<figure class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</figure>
				</div>

				<div class="chat-header">
					Robô
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div class="chat-bubble">mensagem robô</div>
				<div class="chat-footer opacity-50">
				visualizado 12:46
				</div>
			</div>

		</div>

		<div class="w-full flex items-end my-20">
			<input type="text" placeholder="Inicie a conversa aqui " class="input input-bordered w-11/12 mx-10" />
		</div>

	</div>
</template>

<script>

export default {
	name: "chatBoot",
	data() {
		return {
		};
	},


};
</script>
<style lang="postcss" scoped>
#chatBoot {
@apply flex flex-col h-screen;
.container-avatar{
	@apply flex flex-col flex-1 w-full;
}
}
</style>
