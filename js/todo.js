const frmToDo = document.querySelector(".todo-form");
const toDo = frmToDo.querySelector("input");
const toDoList = frmToDo.querySelector(".todo-list");


let arrToDos = [];

function saveToDo() {
    localStorage.setItem("todos", JSON.stringify(arrToDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();

    arrToDos = arrToDos.filter(element => element.id !== parseInt(li.id));
    saveToDo();
    
}

function listUpToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    const newToDo = {
        id: Date.now(),
        text: toDo.value
    };
    toDo.value = "";
    
    arrToDos.push(newToDo);

    listUpToDo(newToDo);

    saveToDo();
}

frmToDo.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    arrToDos = parsedToDos;
    parsedToDos.forEach(element => listUpToDo(element));
}