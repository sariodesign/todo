const completeInput = () => {
    let classes = ["todo__check", "js-complete"];
    let completeNode = document.createElement("input");
    completeNode.setAttribute("type","checkbox");
    completeNode.classList.add(...classes);
    return completeNode;
}

export default completeInput;