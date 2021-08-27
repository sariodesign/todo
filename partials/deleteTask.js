import * as icon from "./icons";

const deleteItem = () => {
  let deleteNode = document.createElement('div');
  deleteNode.classList.add("todo__icon","js-delete");
  deleteNode.insertAdjacentHTML("beforeend", icon.delete);
  return deleteNode;
};

export default deleteItem;
