import completeInput from "./completeInput";
import deleteTask from "./deleteTask";

const createTask = (text, classes) => {
  let todoItem = document.createElement("li");
  if (classes) {
    for (let className in classes) {
      todoItem.classList.add(classes[className]);
    }
  }
  if(text) {
    let todoItemText = document.createElement("span")
    todoItemText.classList.add("todo__text");
    todoItemText.textContent = text;
    todoItem.appendChild(completeInput());
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(deleteTask());
    return todoItem;
  } else {
    return null;
  }
};

export default createTask;
