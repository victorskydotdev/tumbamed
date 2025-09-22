import Swiper from 'swiper/bundle';

import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

export const runTeamSlider = () => {
	const swiper = new Swiper('.team-wrap', {
		modules: [Navigation, Autoplay],
		slidesPerView: 'auto',
		spaceBetween: 20,
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	swiper.init();
};
