import '../scss/main.scss';

//HAMBURGER MENU
const hamburger = document.querySelector('.navigation__hamburger--icon');
const navigation = document.querySelector('.navigation__list');
const hamburgerIcon = document.querySelector('.navigation__hamburger--icon');

hamburger.addEventListener('click', () => {
	if (hamburgerIcon.classList.contains('fa-bars'))
		hamburgerIcon.classList.replace('fa-bars', 'fa-arrow-up');
	else hamburgerIcon.classList.replace('fa-arrow-up', 'fa-bars');

	navigation.classList.toggle('navigation__list--open');
});
