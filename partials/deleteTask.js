import * as icon from "./icons";

const deleteItem = () => {
  let deleteNode = document.createElement('div');
  let classes = ["todo__icon","js-delete"];
  deleteNode.classList.add(...classes);
  deleteNode.insertAdjacentHTML("beforeend", icon.deleteIcon);
  return deleteNode;
};

export default deleteItem;
