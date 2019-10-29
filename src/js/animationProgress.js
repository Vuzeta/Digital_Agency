const percentsItems = [...document.querySelectorAll('.best__percent')];

let percents = [];
percentsItems.forEach(item => percents.push(item.textContent));

const AnimationFacts = () => {
	const scrollValue = document.documentElement.scrollTop;
	const progressBoxs = [...document.querySelectorAll('.best__progress')];
	const progressWrapper = document.querySelector('.best__information');

	const progressWrapperFromTop = progressWrapper.offsetTop;
	const progressWrapperHeight = progressWrapper.offsetHeight;

	if (scrollValue > progressWrapperFromTop - progressWrapperHeight / 2) {
		progressBoxs.forEach((progress, index) => (progress.style.width = percents[index]));
	}

	if (scrollValue < 100) {
		progressBoxs.forEach(progress => (progress.style.width = '0%'));
	}
};

export default AnimationFacts;
