import createTask from "./createTask";
import errorMessage from "./errorMessage";
import counterTask from "./counterTask";

const addTask = (inputText, inputPriority, inputDeadline, todoContainer, numberTasks) => {
  let classNameList = [];
  inputPriority.checked
    ? classNameList.push("todo__item", "todo__item--priority")
    : classNameList.push("todo__item");

  if(inputText.value.trim() && !inputDeadline.value) {
    todoContainer.appendChild(createTask(inputText.value, classNameList, false ));
    inputText.value = "";
    inputPriority.checked = false;
    if(document.querySelector(".task-input__error-msg")){
      document.querySelector(".task-input__error-msg").remove();
    }
  } else if(inputText.value.trim() && inputDeadline.value) {
      todoContainer.appendChild(createTask(inputText.value, classNameList, inputDeadline.value.split('-').reverse().join('/')));
      inputText.value = "";
      inputDeadline.value = "";
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
