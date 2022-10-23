const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  input.classList.add("invalid");

  input.value.length === Number(input.dataset.length)
    ? input.classList.replace("invalid", "valid")
    : input.classList.replace("valid", "invalid");
});
