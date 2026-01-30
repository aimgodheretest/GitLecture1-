// 1. Change the color of 5th "li" tag (one with "Mango" written inside it) to red.
const listItems = document.getElementsByTagName("li");
listItems[4].style.color = "red";

// 2. Make all the "li" tags italic.
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = "italic";
}
