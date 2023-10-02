<!-- 

https://gs-shop.github.io/vue-slick-carousel/
https://proglib.io/p/kak-zanyat-pervoe-mesto-v-poiskovoy-vydache-dobavlyaem-ssr-v-vue-3-vite-prilozhenie-2022-11-24

https://vuejs.org/guide/scaling-up/ssr.html

https://vuejsexamples.com/a-performance-focused-vue-carousel-designed-for-ssr-ssg-environments/
https://vue-ssr-carousel.netlify.app/responsive/ 

https://fengyuanchen.github.io/vue-carousel/

https://vuejsexamples.com/a-powerful-and-flexible-slider-and-carousel-for-vue-js/
https://splidejs.com/documents/
https://splidejs.com/extensions/video/

https://vuejsexamples.com/vue-component-for-owl-carousel-2/
https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html

-->


<script setup>
  import SubHeader from "@/components/SubHeader.vue";
  import UnderConten from "@/components/UnderConten.vue";
  import PostBox from "@/components/PostBox.vue";
</script>

<template>
	<SubHeader msg="Post" />
	<UnderConten mgrtext="News post for you" />
  <main>
    <PostBox />
  </main>
</template>