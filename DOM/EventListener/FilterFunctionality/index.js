let form = document.getElementsByTagName("form")[0];

const descInput = document.createElement("input");
descInput.type = "text";
descInput.id = "description";
descInput.placeholder = "Enter fruit description";

const addBtn = document.querySelector("button");
form.insertBefore(descInput, addBtn);

// add fruit to the cart
let fruititems = document.querySelector(".fruits");
let descriptionitems = document.querySelector("#description");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Ensure that a description is provided
  let fruitDescription = document.getElementById("description").value;
  // if (fruitDescription === '') {
  //     alert('Please enter a description.');
  //     return;
  // }
  const li = document.createElement("li");
  li.className = "fruit";

  li.appendChild(
    document.createTextNode(document.getElementById("fruit-to-add").value),
  );

  const descPara = document.createElement("p");
  descPara.style.fontStyle = "italic";
  descPara.textContent = fruitDescription;
  li.appendChild(descPara);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "x";
  li.appendChild(deleteBtn);
  fruititems.appendChild(li);

  // Clear input fields
  document.getElementById("fruit-to-add").value = "";
  document.getElementById("description").value = "";
});

// delete functionality
fruititems.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let buttontodelete = event.target.parentElement;
    fruititems.removeChild(buttontodelete);
  }
});

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");

  for (let i = 0; i < fruitItems.length; i++) {
    const fruitName = fruitItems[i].firstChild.textContent.toLowerCase();

    const descElement = fruitItems[i].querySelector("p");
    const fruitDesc = descElement ? descElement.textContent.toLowerCase() : "";

    if (
      fruitName.indexOf(textEntered) === -1 &&
      fruitDesc.indexOf(textEntered) === -1
    ) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});
