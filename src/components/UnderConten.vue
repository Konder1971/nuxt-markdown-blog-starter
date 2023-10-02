<script setup>
	defineProps({
		mgrtext: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="under-content">
		<div class="under-text">
			<p>{{ mgrtext }}</p>
		</div>
	</div>
</template>

<style scoped>
.under-content {
	margin: 0 auto;
}
.under-text {
	background-color: var(--blue3);
	text-align: center;
	margin: 0 auto;
}
.under-content p {
	color:#fff;
}
@media (min-width: 768px) {
	.under-content {
    padding: 0 40px;
    margin: -74px auto 40px;
	}
	.under-text {
		padding: 31px 40px 37px;
		max-width: 1055px;
	}
	.under-content p {
		font-size: 26px;
		line-height: 34px;
	}
}
@media (max-width: 767.98px) {
	.under-content {
    margin: -23px 20px 30px;
	}
	.under-text {
    padding: 16px 20px 20px;
	}
	.under-content p {
		font-size: 18px;
		line-height: 30px;
	}
}
</style>
