const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

const existingFruits = document.querySelectorAll(".fruit");
existingFruits.forEach((fruit) => {
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";

  const deleteBtn = fruit.querySelector(".delete-btn");
  deleteBtn.insertAdjacentElement("afterend", editBtn);
});
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  newLi.className = "fruit";

  newLi.innerHTML =
    fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';

  fruits.appendChild(newLi);
});
fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDeleted = event.target.parentElement;
    fruits.removeChild(fruitToDeleted);
  }
});
