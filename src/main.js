import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import '@/assets/css/bootstrap.css';
import './assets/css/lightbox.min.css';
import './assets/main.css';


// Default theme
import '@splidejs/vue-splide/css';
// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
// or only core styles
import '@splidejs/vue-splide/css/core';
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App);

app.use(router);
app.use( VueSplide );

app.mount('#app');

// top logo navigation start
let top = document.querySelector('.top')
let logo = document.querySelector('.logo')
logo.onclick = function(e) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  nav.scrollTop = 0;
	e.preventDefault()
	if( top.classList.contains('navigationActive') ) {
		top.classList.remove('navigationActive')
	}
}
let nav = document.querySelector('nav')
	nav.onclick = function() {
	top.classList.remove('navigationActive')
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  nav.scrollTop = 0;
};
// top logo navigation stop


// navigationsFixed start
document.addEventListener('DOMContentLoaded', () => {
	let navigationsFixed = document.querySelector('body');
	window.onscroll = function () {
		if (window.pageYOffset > 138) {
			navigationsFixed.classList.add('navigationsFixed')
		} else {
			navigationsFixed.classList.remove('navigationsFixed')
		}
	}
});
// navigationsFixed stop


// back to top start
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll)
function checkScroll() {
	let scrollPos = window.scrollY;
	let toTopBtn = document.querySelector('.to-up');
	if (scrollPos > 300) {
		toTopBtn.style.display = 'block'
	} else {
		toTopBtn.style.display = 'none'
	}
	toTopBtn.addEventListener('click', function () {
		window.scrollBy({
			top: -document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	});
};
// back to top stop  