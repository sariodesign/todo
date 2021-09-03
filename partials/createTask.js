import completeInput from "./completeInput";
import deleteTask from "./deleteTask";

const createTask = (text, classes) => {
  let todoItem = document.createElement("li");
  if (classes) {
    for (let className in classes) {
      todoItem.classList.add(classes[className]);
    }
  }
  if(text.trim() != "") {
    let todoItemText = document.createElement("span")
    todoItemText.classList.add("todo__text");
    todoItemText.textContent = text.trim();
    todoItem.appendChild(completeInput());
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(deleteTask());
    return todoItem;
  }
};

export default createTask;
