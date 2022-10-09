const numbersOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: " + numbersOfCategories.length);

numbersOfCategories.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const numbersOfElements = element.querySelectorAll("li");

  console.log("Category: " + categoryName.textContent);
  console.log("Elements: " + numbersOfElements.length);
});
