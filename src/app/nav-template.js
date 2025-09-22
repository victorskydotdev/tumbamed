import brandLogo from '../media/tumbamed-logo.png';
import menuIcon from '../media/menu.png';

const headerNav = document.querySelector('.header-navbar');

const template = (callback) => {
	return `
    <div class="nav">
      <div class="nav__logo">
        <a href="#" class="nav__logo-link">
          <img src="${brandLogo}" alt="Logo">
        </a>
      </div>

      <ul class="nav__links">
        <div class="wrap">
          <li class="nav__link">
            <a href="/">Home</a>
          </li>
          <li class="nav__link">
            <a href="/about">About</a>
          </li>
          <li class="nav__link">
            <a href="/#services">Services</a>
          </li>
          <li class="nav__link">
            <a href="/#our-team">Our team</a>
          </li>
          <li class="nav__link">
            <a href="/contact">Contact</a>
          </li>
        </div>

        <div class="nav__appointment">
          <button class="btn">
            <span class="icon">
							<i class="fa-solid fa-calendar-check"></i>
            </span>
            <span class="btn-text">Book Appointment</span>
          </button>
        </div>
      </ul>

      <div class="hamburger">
        <button class="menu-btn">
          <img src="${menuIcon}" alt="menu button" />
        </button>
      </div>
    </div>
  `;
};

export const renderNav = (cb) => {
	if (headerNav) {
		headerNav.innerHTML = template(cb);

		const currentPosition = 250;

		window.addEventListener('scroll', () => {
			if (window.scrollY > currentPosition) {
				headerNav.classList.add('fixed-navbar');
			} else {
				headerNav.classList.remove('fixed-navbar');
			}
		});
	}
};
