const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanValueCounter = document.querySelector("span#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementValue);
incrementBtn.addEventListener("click", onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  spanValueCounter.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  spanValueCounter.textContent = counterValue;
}
