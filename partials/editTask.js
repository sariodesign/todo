import * as icon from "./icons";

const editTask = () => {
  let deleteNode = document.createElement('div');
  let classes = ["todo__icon","js-edit"];
  deleteNode.classList.add(...classes);
  deleteNode.insertAdjacentHTML("beforeend", icon.editIcon);
  return deleteNode;
};

export default editTask;
