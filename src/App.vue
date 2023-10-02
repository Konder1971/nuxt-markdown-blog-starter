<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import FooterView from "@/components/Footer.vue";
import ToUp from "@/components/Toup.vue";
</script>

<template>
	<HeaderView />
	<Navigation />
	<RouterView />
	<FooterView />
	<ToUp />
</template>