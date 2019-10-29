const animationFacts = () => {
  const scrollValue = document.documentElement.scrollTop;
  const factsBox = [...document.querySelectorAll('.facts__box')];
  const boxFromTop = factsBox[0].offsetTop;
  const boxOuterHeight = factsBox[0].offsetHeight;

  if (window.screen.availWidth > 1023) {
    if (scrollValue > boxFromTop + boxOuterHeight / 2) {
      factsBox.forEach(el => {
        el.classList.add('facts__box--active');
      });
    }

    if (scrollValue < 100) {
      factsBox.forEach(el => {
        el.classList.remove('facts__box--active');
      });
    }
  }
};

export default animationFacts;
