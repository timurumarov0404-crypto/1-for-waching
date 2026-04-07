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


document.querySelector( "#budget").addEventListener('change', function handleSelectChange(event) {
  let otherInput = document.querySelector(".form__other-input")
  if (event.target.value === 'other') {
    let formContainer =document.createElement("div")
    formContainer.classList.add("form__group")
    formContainer.classList.add("form__other-input")
    let input = document.createElement("input")
    input.placeholder=("Введите ваш вариант")
    input.type=("number")
    formContainer.appendChild(input)
    let form = document.querySelector(".form form")
    let button = document.querySelector(".form__submit");
    form.insertBefore(formContainer,button)
  }
  if (event.target.value !== 'other' && Boolean(otherInput)) {
   form = document.querySelector(".form form")
   form.removeChild(otherInput)
  }
});
