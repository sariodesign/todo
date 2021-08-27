import * as icon from "./icons";

const deleteItem = (tag, classes) => {
  let deleteNode = document.createElement(tag);
  deleteNode.insertAdjacentHTML("beforeend", icon.delete);
  return deleteNode;
};

export default deleteItem;
