import '../scss/main.scss';
import animationFacts from './animationFacts';
import animationProgress from './animationProgress';
import fixedNavigation from './fixedNavigation';
import slideNavigation from './slideNavigation';
import hamburger from './hamburger';
import jump from 'jump.js';

const hamburgerElement = document.querySelector('.navigation__hamburger');
const navLinks = document.querySelectorAll('.navigation__link');

hamburgerElement.addEventListener('click', () => hamburger(hamburgerElement));
window.addEventListener('load', () => slideNavigation());
document.addEventListener('scroll', () => animationFacts());
document.addEventListener('scroll', () => animationProgress());
document.addEventListener('scroll', () => fixedNavigation());
navLinks.forEach(link =>
  link.addEventListener('click', function(e) {
    jump(`${e.target.hash}`, {
      duration: 1000,
      offset: -110,
    });
    if (window.screen.availWidth < 641) {
      hamburger(hamburgerElement);
    }
  }),
);
