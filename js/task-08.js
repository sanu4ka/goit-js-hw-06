const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Всі поля повинні бути заповнені!");
  }

  const userFormDataValue = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();

  console.log(userFormDataValue);
});
