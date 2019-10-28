import '../scss/main.scss';
import AnimationFacts from './animationFacts';

//HAMBURGER MENU
const hamburger = document.querySelector('.navigation__hamburger');
const navigation = document.querySelector('.navigation__list');

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('fa-bars'))
    hamburger.classList.replace('fa-bars', 'fa-arrow-up');
  else hamburger.classList.replace('fa-arrow-up', 'fa-bars');

  navigation.classList.toggle('navigation__list--open');
});

document.addEventListener('scroll', () => AnimationFacts());
