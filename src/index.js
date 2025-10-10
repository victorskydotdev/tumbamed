import './scss/main.scss';

import { renderNav } from './app/nav-template';
import { swiper } from './app/horizontal-scroll';
import { runTeamSlider } from './app/team-slider';
import { renderFooter } from './app/footer';

import { redirectToBooking } from './app/app';

import { triggerLoader } from './app/loaders';

renderNav();
swiper.init();
runTeamSlider();
renderFooter();
redirectToBooking();

triggerLoader();
