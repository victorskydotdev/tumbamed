import Swiper from 'swiper';

import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

const servicesSection = document.querySelector('.services-wrapper');
const aboutShowcase = document.querySelector('.showcase-section');

export const swiper = new Swiper(servicesSection, {
	modules: [Navigation, Autoplay],
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	speed: 3000,
	loop: true,

	autoplay: {
		delay: '-2000',
		disableOnInteraction: true,
	},
});

const triggerShowcase = () => {
	const swiper = new Swiper(aboutShowcase, {
		modules: [Navigation, Autoplay],
		slidesPerView: 'auto',

		spaceBetween: 20,

		speed: 3000,
		loop: true,

		autoplay: {
			delay: '1000',
			disableOnInteraction: false,
		},
	});

	swiper.init();
};

triggerShowcase();
