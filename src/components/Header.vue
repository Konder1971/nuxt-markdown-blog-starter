<script setup>
</script>

<template>
	<header>
		<div class="header">
			<div class="logo_block">
				<div class="logo__img">
					<RouterLink to="/"><img alt="" src="@/assets/images/fox.svg" /></RouterLink>
				</div>
				<div class="logo__content">
					<h1>News across the country</h1>
					<p>Read and watch the latest.<br />Always be aware.</p>
				</div>
			</div>
			<div class="logos__block">
					<img alt="" src="@/assets/images/icon-amazon.png" />
					<img alt="" src="@/assets/images/app_store.png" />
					<img alt="" src="@/assets/images/google_play.png" />
					<img alt="" src="@/assets/images/roku.png" />
			</div>
		</div>
	</header>
</template>

<style scoped>
header {
	padding: 18px 40px 20px 30px;
  background-color: #edf0f7;
}
.header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	max-width: 1356px;
}
h1 {
	color: #004a87;
	font-size: 30px;
	line-height: 1;
	font-weight: 600;
	margin-bottom: 2px;
}
.logo_block {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	padding-right: 20px;
	width: calc(100% - 280px);
}
p {
	color: #0d3955; 
	font-weight: 600;
}
.logo__img,
.logo__img img {
	width: 100px;
}
.logo__img a:hover {
	opacity: .8;
}
.logo__content {
	width: calc(100% - 130px);
	padding-left: 20px;
}
.logos__block {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	width: 280px;
}
.logos__block img {
	border: 1px solid #000;
	border-radius: 5px;
	padding: 2px;
	background-color: var(--white);
}

@media (min-width: 768px) {
	header {
		height: 138px;
		}
		p {
			line-height: 25px;
		}
}
@media (min-width: 768px) and (max-width: 860px) {
	.logo_block {
		padding-right: 0;
	}
	h1 {
		font-size: 24px;
	}
	p {
		font-size: 16px;
	}
}
@media (max-width: 767.98px) {
	header {
    border-bottom: 3px solid var(--black222);
		padding: 20px 20px 25px;
	}
	.header,
	.logo_block {
		display: block;
	}
	.header {
		text-align: center;
	}
	.logo_block,
	.logo__content {
		width: 100%;
	}
	.logo_block {
		padding-right: 0;
	}
	.logos__block img:nth-child(3),
	.logos__block img:nth-child(4) {
		display: none;
	}
	.logo__img {
		display: none;
	}
	.logo__img img {
		margin-bottom: 14px;
	}
	h1 {
		display: none;
	}
	p {
		margin-bottom: 15px;
		line-height: 30px;
	}
	.logos__block {
		margin: 0 auto;
	}
}
</style>
