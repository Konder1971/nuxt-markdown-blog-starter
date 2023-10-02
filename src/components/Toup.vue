<template>
	<div class="to-up">&uarr;</div>
</template>
<style scoped>
	.to-up {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 98;
		width: 40px;
		height: 40px;
		line-height: 36px;
		text-align: center;
		background-color: var(--green2);
		color: #fff;
		cursor: pointer;
		border-radius: 4px;
		display: none;
	}
	@media (hover: hover) {
		.to-up:hover {
			background-color: var(--green);
		}
	}
</style>