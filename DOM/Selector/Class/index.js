// 1.Make the 3rd element in the list have yellow background color.:
const fruit = document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor = "yellow";

//2. Make all the elements in the list have bold font.
for (let i = 0; i < fruit.length; i++) {
  fruit[i].style.fontWeight = "bold";
}
