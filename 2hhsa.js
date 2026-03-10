const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
        if (i === endNumber) {
      element.innerText = i + '+';
        return;
    } else {
      element.innerText = i;
    }
    let nextI = i + 100;
    if (nextI > endNumber) {
      nextI = endNumber;
    }

    setTimeout(function() {
      increaseNumberAnimationStep(nextI, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  const element = document.querySelector('.features__clients-count');
  increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();