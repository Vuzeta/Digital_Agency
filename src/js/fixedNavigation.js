const fixedNavigation = () => {
  const navigation = document.querySelector('.navigation');
  const scrollValue = document.documentElement.scrollTop;
  let rightResolution = false;
  let navigationActive = false;

  if (window.screen.availWidth > 1023) {
    rightResolution = true;
  } else {
    rightResolution = false;
  }

  if (scrollValue > 200) {
    navigationActive = true;
  } else if (scrollValue === 0) {
    navigationActive = false;
  }

  if (rightResolution && navigationActive) {
    navigation.classList.add('navigation--active');
  } else {
    navigation.classList.remove('navigation--active');
  }
};

export default fixedNavigation;
