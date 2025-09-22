const footer = document.querySelector('.footer-section');

const footerTemplate = () => {
	return `
    <div class="container">
				<div class="brand-wrap">
					<h4 class="heading">Get better healthcare in Tumbarumba</h4>

					<p class="text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
						cum, non distinctio aut omnis esse voluptatem laboriosam enim eos
						facilis?
					</p>

					<div class="wrap">
						<button class="btn">
							<span class="icon">
								<i class="fa-solid fa-calendar-check"></i>
							</span>
							<span class="btn-text">Book Appointment</span>
						</button>
					</div>
				</div>

				<div class="quick-links">
					<h4 class="heading">Quick links</h4>

					<ul class="links-wrap">
						<li><a href="#" class="link">Home</a></li>
						<li><a href="#" class="link">About</a></li>
						<li><a href="#" class="link">Contact</a></li>
						<li><a href="#" class="link">Book Appointment</a></li>
						<li><a href="#" class="link">Call us today</a></li>
					</ul>
				</div>

				<div class="social-media-wrap">
					<h4 class="heading">Engage with us</h4>

					<div class="wrap">
						<a href="#">Facebook</a>
						<a href="#">Instagram</a>
						<a href="#">YouTube</a>
					</div>
				</div>
			</div>
  `;
};

export const renderFooter = () => {
	footer.innerHTML += footerTemplate();
};
