import './scss/main.scss';

import { renderNav } from './app/nav-template';
import { swiper } from './app/horizontal-scroll';
import { runTeamSlider } from './app/team-slider';
import { renderFooter } from './app/footer';

renderNav();
swiper.init();
runTeamSlider();
renderFooter();
