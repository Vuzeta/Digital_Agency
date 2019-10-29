const navigation = document.querySelector('.navigation__list');

const hamburger = element => {
  if (element.classList.contains('fa-bars')) element.classList.replace('fa-bars', 'fa-arrow-up');
  else element.classList.replace('fa-arrow-up', 'fa-bars');

  navigation.classList.toggle('navigation__list--open');
};

export default hamburger;
