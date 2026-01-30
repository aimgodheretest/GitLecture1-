// 1.QuerySelector is used to grab only single element:
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.borderRadius = "5px";

// 2.QuerySelectorAll is used to grab all the elements with same class/tag:
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "white";
  fruitItems[i].style.padding = "10px";
  fruitItems[i].style.margin = "10px";
  fruitItems[i].style.borderRadius = "5px";
  fruitItems[i].style.listStyleType = "none";
}
const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}
