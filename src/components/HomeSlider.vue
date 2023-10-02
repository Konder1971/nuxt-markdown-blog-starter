<!--https://splidejs.com/integration/vue-splide/-->
<script setup>
import '/src/jquery-3.6.4.min.js';
</script>

<template>
	<h2>News category slider</h2>
  <template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="src/assets/images/f2.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="src/assets/images/f3.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>
	<div class="clearfix"></div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
} );

// export default {
// 	mounted() {
// 		this.$nextTick(function () {
				
// 		})
// 	}
// }

//export default {
//  components: {
//    Splide,
//    SplideSlide,
//  },

//  setup() {
//    const options = {
//      // rewind: true,
//      // gap   : '1rem',
//    };

//    return { options };
//  },
	
//};
</script>

<style scoped>
	h2 {
		text-align: center;
    font-weight: 500;
	}
	.splide {
		padding: 20px 0 60px;
	}

</style>