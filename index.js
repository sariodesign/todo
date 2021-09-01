import "./stylesheets/style.scss";
import addTask from "./partials/addTask";
import removeSelector from "./partials/removeSelector";

const toDoList = document.querySelector(".js-todo-list");
const addToDoBtn = document.querySelectorAll(".js-add-task");
const taskInput = document.querySelectorAll(".js-task-text");
const taskPriority = document.querySelectorAll(".js-task-priority");
const addTaskModal = document.querySelector(".js-modal");
const openModalBtn = document.querySelector(".js-open-modal");
const closeModalBtn = document.querySelector(".js-close-modal");
const counterProgress = document.querySelector(".js-progress-count");

let modalVisible;

openModalBtn.addEventListener("click", () => {
  modalVisible = true;
  addTaskModal.classList.add("is-visible");
  return modalVisible;
});

closeModalBtn.addEventListener("click", () => {
  removeSelector(addTaskModal, 'is-visible');
});

addToDoBtn.forEach( (btn, index) => {
  btn.addEventListener("click", () => {
    addTask(taskInput[index], taskPriority[index], toDoList, counterProgress);
    if(modalVisible){
      removeSelector(addTaskModal, 'is-visible');
    }
  });
});

taskInput.forEach( (input, index) => {
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      addTask(taskInput[index], taskPriority[index], toDoList, counterProgress);
      if(modalVisible){
        removeSelector(addTaskModal, 'is-visible');
      }
    }
  });
});


toDoList.addEventListener("click", (e) => {
  if(e.target.classList.contains("js-delete")){
    e.target.closest(".todo__item").remove();
  };
});