var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)


function classChange() {
	if ($(window).width() < 1024) {
		console.log('Less than 1024');

		document.body.classList.remove('zen');
		document.body.classList.remove('animated');
		document.body.classList.remove('smooth');

		root.classList.add('scrollable');
		document.body.classList.add('scroll');

	} else {
		console.log('greater than 1024');

		document.body.classList.add('zen');
		document.body.classList.add('animated');
		document.body.classList.add('smooth');

		root.classList.remove('scrollable');
		document.body.classList.remove('scroll');
	}
}

window.onload = classChange;
window.resize = classChange;