import createTask from "./createTask";

const taskInput = document.querySelector(".js-task-text");
const taskPriority = document.querySelector(".js-task-priority");

const addTask = (todoContainer) => {
  let classList = [];
  taskPriority.checked
    ? classList.push("todo__item", "todo__item--priority")
    : classList.push("todo__item");
  todoContainer.appendChild(createTask(taskInput.value, classList));
  taskInput.value = null;
  taskPriority.checked = false;

  taskInput.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      addTask(todoContainer);
    }
  });
};

export default addTask;
