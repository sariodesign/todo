const completeInput = () => {
    let completeNode = document.createElement("input");
    completeNode.setAttribute("type","checkbox");
    completeNode.classList.add("todo__check","js-complete");
    return completeNode;
}

export default completeInput;