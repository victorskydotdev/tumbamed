const bookingLink = `https://www.hotdoc.com.au/medical-centres/tumbarumba-NSW-2653/tumbarumba-medical-practice/doctors`;

const bodyElement = document.querySelector('.dom-body');

export const redirectToBooking = () => {
	if (!bodyElement) return;

	bodyElement.addEventListener('click', function (e) {
		const btn = e.target.closest('.book-app-btn');
		if (btn) {
			e.preventDefault();
			window.open(bookingLink, '_blank').focus();
		}
	});
};
