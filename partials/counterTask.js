const counterTask = (list, counter) => {
    console.log(list);
    console.log(counter);
    counter.textContent = list.children.length;
}

export default counterTask;