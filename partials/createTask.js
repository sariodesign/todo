import matchMobile from "./utilities";
import completeInput from "./completeInput";
import deadlineTask from "./deadlineTask";
import editTask from "./editTask";
import deleteTask from "./deleteTask";

const createTask = (text, classes, deadline) => {
  let todoIcon;
  let todoItem = document.createElement("li");
  let todoItemAside = document.createElement("div");
  todoItemAside.classList.add("todo__aside");
  
  if (classes) {
    todoItem.classList.add(...classes);
  }

  matchMobile.matches ? todoIcon = editTask() : todoIcon = deleteTask();
  
  if(text.trim() != "") {
    let todoItemText = document.createElement("span")
    todoItemText.classList.add("todo__text");
    todoItemText.textContent = text.trim();
    todoItem.appendChild(completeInput());
    todoItem.appendChild(todoItemText);
    if(deadline) {
      todoItemAside.appendChild(deadlineTask(deadline));
      todoItemAside.appendChild(todoIcon);
      todoItem.appendChild(todoItemAside);
    } else {
      todoItem.appendChild(todoIcon);
    }
    return todoItem;
  }
};

export default createTask;
