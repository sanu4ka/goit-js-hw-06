const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
}
