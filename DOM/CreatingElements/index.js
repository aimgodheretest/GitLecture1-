// Write your code below:
//1.Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
const h3 = document.createElement("h3");
const subHeading = document.createTextNode(
  "Buy high quality organic fruits online",
);
h3.appendChild(subHeading);

const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
const secondDiv = divs[1];

//2.Make the sub-heading text italic.
firstDiv.appendChild(h3);
h3.style.fontStyle = "italic";

//3.Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4". On this paragraph tag set an id of "fruits-total".
const para = document.createElement("p");
para.id = "fruits-total";
const paraText = document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
// //inserBefore secondDiv
const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para, fruits);
