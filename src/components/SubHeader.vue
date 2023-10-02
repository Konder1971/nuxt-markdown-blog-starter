<script setup>
	defineProps({
		msg: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="sub-header">
		<h1>{{ msg }}</h1>
	</div>
</template>

<style scoped>
.sub-header {
	background-color: var(--green);
	text-align: center;
}
.sub-header-category {
	background-color:#ff9e16;
}
.sub-header h1 {
	color: var(--white);
	font-weight: 500;
	text-transform:uppercase;
}
@media (min-width: 768px) {
	.sub-header {
	 padding: 32px 20px 105px;
	}
	.sub-header h1 {
		font-size: 30px;
	}
}
@media (max-width: 767.98px) {
	.sub-header {
		padding: 15px 40px 37px;
	}
	.sub-header h1 {
		font-size: 22px;
	}
}
</style>
