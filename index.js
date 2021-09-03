import "./stylesheets/style.scss";
import addTask from "./partials/addTask";
import removeSelector from "./partials/removeSelector";
import counterTask from "./partials/counterTask";

const toDoList         = document.querySelector(".js-todo-list");
const completeList     = document.querySelector(".js-complete-list");
const addToDoBtn       = document.querySelectorAll(".js-add-task");
const taskInput        = document.querySelectorAll(".js-task-text");
const taskPriority     = document.querySelectorAll(".js-task-priority");
const addTaskModal     = document.querySelector(".js-modal");
const updateTaskModal  = document.querySelector(".js-modal-update");
const openModalBtn     = document.querySelector(".js-open-modal");
const taskDescription  = document.querySelector(".js-task-description");
const closeModalBtn    = document.querySelectorAll(".js-close-modal");
const counterProgress  = document.querySelector(".js-progress-count");
const counterComplete  = document.querySelector(".js-complete-count");
const countNavComplete = document.querySelector(".js-nav-complete-count");
const countNavTotal    = document.querySelector(".js-nav-total-count");
const dashboardCounter = document.querySelector(".js-dashboard-counter");
const deleteTask       = document.querySelector(".js-modal-delete");
const completeTask     = document.querySelector(".js-modal-complete");
const isMobile         = window.matchMedia("(max-width: 1023px)").matches;

let modalVisible;

// Open modal
openModalBtn.addEventListener("click", () => {
  modalVisible = true;
  addTaskModal.classList.add("is-visible");
});

// Close modal
closeModalBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    removeSelector(addTaskModal, 'is-visible');
    removeSelector(updateTaskModal, 'is-visible');
  })
});

// Add task with 'ADD' button
addToDoBtn.forEach( (btn, index) => {
  btn.addEventListener("click", () => {
    let taskTextValue = taskInput[index].value;
    addTask(taskInput[index], taskPriority[index], toDoList, counterProgress);
    if(modalVisible && taskTextValue.trim() != ""){
      removeSelector(addTaskModal, 'is-visible');
    }
    
    let totalTask = toDoList.children.length + completeList.children.length;
    if(totalTask > 0) {
      countNavTotal.textContent = totalTask;
      dashboardCounter.classList.remove("is-empty");
    }
  });
});

// Add task with enter key
taskInput.forEach( (input, index) => {
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      let taskTextValue = taskInput[index].value;
      addTask(taskInput[index], taskPriority[index], toDoList, counterProgress);
      if(modalVisible && taskTextValue.trim() != ""){
        removeSelector(addTaskModal, 'is-visible');
      }
      
      let totalTask = toDoList.children.length + completeList.children.length;
      if(totalTask > 0) {
        countNavTotal.textContent = totalTask;
        dashboardCounter.classList.remove("is-empty");
      }
    }
  });
});

// Delete or complete task on progress list
toDoList.addEventListener("click", (e) => {
  if(e.target.classList.contains("js-delete")){
    // Delete task from progress list
    e.target.closest(".todo__item").remove();
    let totalTask = toDoList.children.length + completeList.children.length;
    countNavTotal.textContent = totalTask;
    counterTask(toDoList, counterProgress);
  } else if(e.target.classList.contains("js-complete")){
    // Move task to done list
    let taskComplete = e.target.closest(".todo__item");
    taskComplete.remove();
    taskComplete.classList.add("todo__item--completed");
    completeList.appendChild(taskComplete);
    counterTask(toDoList, counterProgress);
    counterTask(completeList, counterComplete);
    counterTask(completeList, countNavComplete);
  } else {
    if(isMobile){
      let todoList = document.querySelectorAll(".todo__list .todo__item");
      todoList.forEach( (item) => {
        item.classList.remove("is-selected");
      });
      let taskSelected = e.target.closest(".todo__item");
      taskSelected.classList.add("is-selected");
      let taskText = taskSelected.querySelector(".todo__text").textContent;
      taskDescription.textContent = taskText;
      updateTaskModal.classList.add("is-visible");
    }
  }
});

// Delete task from modal on mobile
deleteTask.addEventListener("click", () => {
  let taskToDelete = document.querySelector(".is-selected");
  taskToDelete.remove();
  counterTask(toDoList, counterProgress);
  removeSelector(updateTaskModal, 'is-visible');
});

// Complete task from modal on mobile
completeTask.addEventListener("click", () => {
  let taskCompleted = document.querySelector(".is-selected");
  taskCompleted.classList.add("todo__item--completed");
  completeList.appendChild(taskCompleted);
  counterTask(toDoList, counterProgress);
  counterTask(completeList, counterComplete);
  removeSelector(updateTaskModal, 'is-visible');
});