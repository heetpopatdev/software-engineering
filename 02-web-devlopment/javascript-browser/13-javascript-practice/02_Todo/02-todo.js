let todo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("-----------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-----------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let index = prompt("please enter the task index which you want to remove");
    todo.splice(index, 1);
    console.log("task removed");
  } else {
    console.log("wrong request");
  }

  req = prompt("please enter your request");
}
