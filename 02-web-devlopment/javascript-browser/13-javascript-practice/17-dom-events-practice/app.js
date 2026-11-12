// let buttons = document.querySelectorAll("button");
// this are mouse/pointer events
// for (let btn of buttons) {
// just click on button and see the message
/* btn.onclick = sayHello;
  btn.onclick = sayName; */

// here i used Eventlistener because it allows to multiple independent functions to a single event on the exact same element without overriding anything.
/* btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName); */
/* btn.addEventListener("dblclick", function () {
    console.log("You double clicked me");
  });
}

function sayHello() {
  alert("Hello!");
}

function sayName() {
  alert("by heet");
}
 */
/*  btn.onclick = function () {
    alert("Button clicked!");
  };
*/
// just hover on button and see the message
/*  btn.onmouseenter = function () {
    console.log("you entered a button");
  };  

}
*/

/* let button = document.querySelector("button");

button.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("Color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
 */

/* let p = document.querySelector("p");

p.addEventListener("click", function () {
  console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});
 */

// let btn = document.querySelector("button");

/* let p = document.querySelector("p");

let h1 = document.querySelector("h1");

let h3 = document.querySelector("h3");

function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "brown";
}
 */
// btn.addEventListener("click", changeColor);
/* 
p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);
 */

// Mouse Events
/* let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("button clicked");
});
btn.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("button clicked");
});
 */
//Keyboard events
/* let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log("code = ", event.code); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
  if (event.code == "KeyU") {
    console.log("character moves forward");
  } else if (event.code == "KeyD") {
    console.log("character moves backward");
  } else if (event.code == "KeyL") {
    console.log("Character moves left");
  } else if (event.code == "KeyR") {
    console.log("character moves right");
  } */
/* console.log(event.key);
  console.log(event.code); */
//   console.log("Key was pressed");
// });

/* inp.addEventListener("keyup", function () {
  console.log("Key was released");
}); */

//Form Events

/* let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form); */

/*  let inp = document.querySelector("input");
  console.dir(inp);
  console.log(inp.value); */

/* let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`); */
/* 
  let user = this.elements[0];
  let pass = this.elements[1];

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
 */
// });

/* let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log("input changed");
  console.log("final value =", user.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value =", user.value);
});
 */
/* 
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
 */

//Practice Questions

/* Q1:- Try out following events in Event Listener on your own:
- mouseout
- keypress
- Scroll
- load
[Use MDN for help]
 */
let box = document.querySelector("div");

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "green";
});

let para = document.querySelector("p");

para.addEventListener("keydown", function (event) {
  console.log("You pressed: ", event.key);
});
