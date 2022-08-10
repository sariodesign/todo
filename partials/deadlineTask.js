const deadlineTask = (date) => {
    let deadlineNode = document.createElement('span');
    deadlineNode.classList.add('todo__deadline');
    deadlineNode.textContent = date;
    return deadlineNode
}

export default deadlineTask;