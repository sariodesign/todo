import createTask from "./createTask";
import errorMessage from "./errorMessage";
import counterTask from "./counterTask";

const addTask = (inputText, inputPriority, todoContainer, numberTasks) => {
  let classNameList = [];
  inputPriority.checked
    ? classNameList.push("todo__item", "todo__item--priority")
    : classNameList.push("todo__item");

  if(inputText.value.trim()) {
    todoContainer.appendChild(createTask(inputText.value, classNameList));
    inputText.value = "";
    inputPriority.checked = false;
    if(document.querySelector(".task-input__error-msg")){
      document.querySelector(".task-input__error-msg").remove();
    }     
  } else {
    let parentInput = inputText.parentNode;
    parentInput.insertBefore(errorMessage("Add some text..."), inputText);
    inputText.value = "";
    inputPriority.checked = false;
  }

  counterTask(todoContainer, numberTasks);
};

export default addTask;
