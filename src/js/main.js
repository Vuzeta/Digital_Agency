import '../scss/main.scss';
import animationFacts from './animationFacts';
import animationProgress from './animationProgress';
import fixedNavigation from './fixedNavigation';
import slideNavigation from './slideNavigation';
import hamburger from './hamburger';

//HAMBURGER MENU
const hamburgerElement = document.querySelector('.navigation__hamburger');

hamburgerElement.addEventListener('click', () => hamburger(hamburgerElement));
window.addEventListener('load', () => slideNavigation());
document.addEventListener('scroll', () => animationFacts());
document.addEventListener('scroll', () => animationProgress());
document.addEventListener('scroll', () => fixedNavigation());
