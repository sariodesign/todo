import createTask from "./createTask";
import counterTask from "./counterTask";

const addTask = (inputText, inputPriority, todoContainer, numberTasks) => {
  let classNameList = [];
  inputPriority.checked
    ? classNameList.push("todo__item", "todo__item--priority")
    : classNameList.push("todo__item");

  if(inputText) {
    todoContainer.appendChild(createTask(inputText.value, classNameList));
    inputText.value = "";
    inputPriority.checked = false;
  }

  counterTask(todoContainer, numberTasks);
};

export default addTask;
