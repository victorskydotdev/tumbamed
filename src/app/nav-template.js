import brandLogo from '../media/tumbamed-logo.png';
import menuIcon from '../media/menu.png';

const headerNav = document.querySelector('.header-navbar');

const template = (callback) => {
	return `
    <div class="nav">
      <div class="nav__logo">
        <a href="/" class="nav__logo-link">
          <img src="${brandLogo}" alt="Logo">
        </a>
      </div>

      <ul class="nav__links navbar">
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
          <button class="btn book-app-btn">
            <span class="icon">
							<i class="fa-solid fa-calendar-check"></i>
            </span>
            <span class="btn-text">Book Appointment</span>
          </button>
        </div>
      </ul>

      <div class="hamburger">
        <button class="menu-btn">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  `;
};

export const renderNav = (cb) => {
	if (headerNav) {
		headerNav.innerHTML = template(cb);

		const menuButton = document.querySelector('.menu-btn');
		const mobileNav = document.querySelector('.navbar');

		if (menuButton && mobileNav) {
			menuButton.addEventListener('click', () => {
				// alert('hello world');
				mobileNav.classList.add('show-mobile-nav');
			});
		}

		const currentPosition = 100;

		window.addEventListener('scroll', () => {
			if (window.scrollY > currentPosition) {
				headerNav.classList.add('fixed-navbar');

				const bookAppBtn = document.querySelector('.book-app-btn');

				const url = `https://www.hotdoc.com.au/medical-centres/tumbarumba-NSW-2653/tumbarumba-medical-practice/doctors`;

				if (bookAppBtn) {
					bookAppBtn.addEventListener('click', (e) => {
						window.location.href = url;
					});
				}
			} else {
				headerNav.classList.remove('fixed-navbar');
			}
		});
	}
};

const observedElem = headerNav;

const buttonObserver = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		console.log(mutation);
		// const menuBtn = document.querySelector('.menu-btn');
		// const triggerButtonFunct = (e) => {
		// 	alert('button click working');
		// };
		// if (menuBtn) {
		// 	menuBtn.addEventListener('click', triggerButtonFunct);
		// }
	});
});

const config = {
	attributes: true,
	childList: true,
	subtree: true,
};

// buttonObserver.observe(observedElem, config);
