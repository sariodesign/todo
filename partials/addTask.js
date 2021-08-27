import createTask from "./createTask";

const addTask = (inputText, inputPriority, todoContainer) => {
  let classNameList = [];
  inputPriority.checked
    ? classNameList.push("todo__item", "todo__item--priority")
    : classNameList.push("todo__item");

  if(inputText) {
    console.log(inputText.value);
    todoContainer.appendChild(createTask(inputText.value, classNameList));
    inputText.value = null;
    inputPriority.checked = false;
  }
};

export default addTask;
