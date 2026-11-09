let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i]);
}

document.getElementsByTagName("p")[1].innerText = "Heet";

//we will always use this query selector which is as similar as css selector

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

// so whenever user pass value to the query selector and if there are multiple matches is there so it will check all the object which have this value and then select first object which have this particular value
console.dir(document.querySelector(".oldImg"));

// this is the way of selecting single element inside div
console.log(document.querySelector("div a"));

// if we want to select all of the elements inside div or i can say i want whole html collection

console.dir(document.querySelectorAll("div a"));

let para = document.querySelector("p");

console.dir(para);

// this shows all the visible text contained on the screen
para.innerText;

// this shows all the full text
para.innerHTML;

// this shows the full markup
para.textContent;

para.innerText = "abc";

para.innerText = "hi, I am heet!";

para.innerText = "Hi, I am <b>Heet</b>!";

para.innerHTML = "Hi, I am <b> Heet </b>!";

let heading = document.querySelector("h1");

heading.innerText;

let img = document.querySelector("img");

img.setAttribute("id", "spidermanImage");

img.setAttribute("src", "assets/creation_1.png");

img.getAttribute("class");

img.setAttribute("class", "images");

console.dir(img);

img.style;

heading.style.color = "purple";

heading.style.color = "green";

heading.style.backgroundColor = "green";

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "yellow";
}

for (link of links) {
  link.style.backgroundColor = "purple";
}

let box = document.querySelector(".box");

box.style;

// Manipulating Style

// to add new classes
document.classList.add("black");

// to remove classes
document.classList.remove("yellow");

// to check if class exists
document.classList.contains("black");

// to toggle between add & remove
//it remove if its already exist and add if it is not exist
document.classList.toggle("black");

// Navigation on page
let h4 = document.querySelector("h4");

h4.parentElement;

h4.childElementCount;

let div = document.querySelector("div");

div.childElementCount;

// let box = document.querySelector('.box');

box.childElementCount;

box.children;

let ul = document.querySelector("ul");

ul.parentElement;

ul.children;

ul.childElementCount;

ul.children[0];

ul.children[1];

ul.children[2];

document.querySelector("ul").children[2].previousElementSibling;

document.querySelector("ul").children[1].previousElementSibling;

document.querySelector("ul").children[1].nextElementSibling;

document.querySelector("img").previousElementSibling;

document.querySelector("img").previousElementSibling.style.color = "red";

// Adding Element

document.createElement("p");

let newParagraph = document.createElement("p");

console.dir(newParagraph);

// we created this paragraph to show that in our document we need to append that with the help of appendchild

let body = document.querySelector("body");

newPara.innerText = "Hi,I am a new p";

body.appendChild(newPara);

let btn = document.createElement("button");

console.dir("btn");

btn.innerText = "Click me!";

box.appendChild(btn);

newPara.append("this is new text");

newPara.append(btn);

// APPEND ALWAYS ADDS ELEMENT AT END
newPara.append("do not click this button");

// PREPEND ALWAYS ADDS ELEMENT AT FIRST

box.prepend(newPara);

// where do we want to add our element and which element
// beforebegin, afterbegin, beforeend, afterend

let btn = document.createElement("button");

btn.innerHTML = "NEW BUTTON!!";

let p = document.querySelector("p");

p.insertAdjacentElement("beforebegin", btn);

p.insertAdjacentElemetn("afterbegin", btn);

p.insertAdjacentElement("beforeend", btn);

p.insertAdjacentElement("afterend", btn);

body.removeChild(btn);

p.insertAdjacentElement("afterend", btn);

btn.remove();

p.remove();

body.remove();

// Practice questions

// Add the following elements to the container using only javascript and the dom methods.

// i) <p> with red text that says "Hey I'm red!"

let para1 = document.createElement("p");

para1.innerText = "Hey I'm red!";

document.querySelector("body").append(para1);

para1.classList.add("red");

// ii) an <h3> with blue text that says "I'm a blue h3!"

let h3 = document.createElement("h3");

h3.innerText = "I'm a blue h3!";

document.querySelector("body").append(h3);

h3.classList.add("blue");

// iii) a <div> with a black border and pink background color with the following elements inside of it:
// > another <h1> that says "I'm in a div"
// > a <p> that says "Me Too!"

let div1 = document.createElement("div1");

let h1 = document.createElement("h1");

let para2 = document.createElement("para2");

h1.innerText = "I'm in a div";

para2.innerText = "Me Too!";

div1.append(h1);

div1.append(para2);

div.classList.add("div1");

document.querySelector("body").append(div);

// Practice Questions

// Q1:- Create a new input and button element on the page using javascript only. set the text of button to "click me".

let input = document.createElement("input");

let button = document.createElement("button");

button.innerText = "Click Me";

document.querySelector("body").append(input);

// or

document.body.append("input");

document.querySelector("body").append(button);

or;

document.body.append("button");

// Q2:- Add following attributes to the element:
// - Change placeholder value of input to "username"
// - Change the id of button to "btn"

input.setAttribute("placeholder", "username");

button.setAttribute("id", "btn");

input.getAttribute("placeholder");

button.id;

// Q3:- Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");

btn.style.backgroundColor = "blue";
btn.style.color = "white";

//Q4 Create an h1 element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let heading = document.createElement("h1");

heading.innerText = "DOM Practice";

heading.style.textDecoration = "underline";

heading.style.color = "purple";

document.body.append(heading);

//Q5 Create a p tag on the page and set its text to "Apna College Delta Practice."where Delta is bold.

let para = document.createElement("p");

para.innerHTML = "heet is doing <b>javascript</b> practice.";

document.body.append(para);
