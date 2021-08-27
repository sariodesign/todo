import deleteTask from "./deleteTask";

const createTask = (text, classes) => {
  let todoItem = document.createElement("li");
  if (classes) {
    for (let className in classes) {
      todoItem.classList.add(classes[className]);
    }
  }
  if(text) {
    todoItem.textContent = text;
    todoItem.appendChild(deleteTask());
  }
  
  return todoItem;
};

export default createTask;
