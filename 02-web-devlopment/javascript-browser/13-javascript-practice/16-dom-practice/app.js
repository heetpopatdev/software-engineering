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
