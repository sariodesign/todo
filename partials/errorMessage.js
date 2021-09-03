const errorMessage = (text) => {
    let errorMsgNode = document.createElement("div");
    errorMsgNode.classList.add("task-input__error-msg", "js-error-message");
    errorMsgNode.textContent = text;
    return errorMsgNode;
}

export default errorMessage;