import '../scss/main.scss';

//Open hamburger

const hamburger = document.querySelector('.navigation__hamburger--icon');
const navigation = document.querySelector('.navigation__list');

hamburger.addEventListener('click', () => {
  navigation.style.top = '10%';
});
