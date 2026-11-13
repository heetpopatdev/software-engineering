let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;

  let delete_button = document.createElement("button");
  delete_button.innerText = "delete";

  li.appendChild(delete_button);
  ul.appendChild(li);
});

let delete_buttons = document.querySelectorAll(".delete");
for (delete_button of delete_buttons) {
  delete_button.addEventListener("click", function () {
    let parent = this.parentElement;
    console.log(parent);
    parent.remove();
  });
}
