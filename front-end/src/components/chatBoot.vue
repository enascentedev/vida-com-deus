<template>
	<div class="flex flex-col h-screen">

		<div class="flex flex-col flex-1 w-full">

			<div class="chat chat-start p-5">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-header">
					Obi-Wan Kenobi
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div class="chat-bubble">You were the Chosen One!</div>
				<div class="chat-footer opacity-50">
					Delivered
				</div>
			</div>

			<div class="chat chat-end p-5">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-header">
					Anakin
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div class="chat-bubble">I hate you!</div>
				<div class="chat-footer opacity-50">
					Seen at 12:46
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
<style lang="postcss" scoped></style>
