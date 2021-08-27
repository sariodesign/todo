import addTask from "./partials/addTask";
import "./stylesheets/style.scss";

const toDoList = document.querySelector(".js-todo-list");
const addToDoBtn = document.querySelector(".js-add-task");
const taskInput = document.querySelector(".js-task-text");
const taskPriority = document.querySelector(".js-task-priority");

addToDoBtn.addEventListener("click", () => {
  addTask(taskInput, taskPriority, toDoList);
});

taskInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addTask(taskInput, taskPriority, toDoList);
  }
})

toDoList.addEventListener("click", (e) => {
  if(e.target.classList.contains("js-delete")){
    e.target.closest(".todo__item").remove();
  };
});