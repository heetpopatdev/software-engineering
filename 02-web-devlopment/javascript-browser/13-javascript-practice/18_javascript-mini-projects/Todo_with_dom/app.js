let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;

  let delete_button = document.createElement("button");
  delete_button.innerText = "delete";

  li.appendChild(delete_button);
  ul.appendChild(li);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  }
});

/* let delete_buttons = document.querySelectorAll(".delete");
for (delete_button of delete_buttons) {
  delete_button.addEventListener("click", function () {
    let parent = this.parentElement;
    console.log(parent);
    parent.remove();
  });
} */
