import addTask from "./partials/addTask";
import "./stylesheets/style.scss";

const toDoList = document.querySelector(".js-todo-list");
const addToDoBtn = document.querySelector(".js-add-task");

addToDoBtn.addEventListener("click", () => {
  addTask(toDoList);
});

toDoList.addEventListener("click", (e) => {
  e.target.closest(".task-item").remove();
});