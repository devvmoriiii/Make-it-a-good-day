const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input input")
const todoBtn = document.querySelector("#todo-btn button")
const todoUl = document.querySelector("#todoList-ulBox ul")
let todoArray = [];

const delAllBtn = document.querySelector("#todoList-btnBox button");

const TODOS_KEY = "todos"

// 
window.onload = loadingTodo;

function loadingTodo() {
  let savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos !== null) {
    let todoArray = JSON.parse(savedTodos);
    todoArray.forEach(element => {
      makingTodoList(element);
    });
  } 
}

todoForm.addEventListener("submit", submitTodo)

function submitTodo(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todoInput.value = "";
  savingTodo(newTodo);
}

function savingTodo(newTodo) {
  const todoObj = {
    text : newTodo,
    id : Date.now()
  }
  todoArray.push(todoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
  makingTodoList(todoObj);
}

function makingTodoList(todoObj) {
  const newTodoLi = document.createElement("li");
  newTodoLi.classList.toggle("newLi")
  newTodoLi.id = todoObj.id

  const newTodoTextDiv = document.createElement("div");
  newTodoTextDiv.classList.toggle("newLiTextDiv")
  const newTodoText = document.createElement("span");
  newTodoText.innerText = todoObj.text;

  const newTodoDelDiv = document.createElement("div");
  newTodoDelDiv.classList.toggle("newLiDelDiv");
  const newTodoDel = document.createElement("span");
  newTodoDel.innerText = "X";
  newTodoDel.addEventListener("click", deletingTodo)

  newTodoTextDiv.appendChild(newTodoText);
  newTodoDelDiv.appendChild(newTodoDel);
  newTodoLi.appendChild(newTodoTextDiv);
  newTodoLi.appendChild(newTodoDelDiv);
  todoUl.appendChild(newTodoLi);
}

const todoDel = document.querySelector(".newLiDelDiv span");


function deletingTodo(event) {
  event.preventDefault();
  let savedTodos = localStorage.getItem(TODOS_KEY);
  let todoArray = JSON.parse(savedTodos);
  const spanDiv = event.target.parentElement;
  const delLi = spanDiv.parentElement;
  
  const delLiId = parseInt(delLi.id)
  todoArray = todoArray.filter((item) => item.id !== delLiId);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));

  delLi.remove();
}


// 전체 삭제
delAllBtn.addEventListener("click", deletingAll)

function deletingAll() {
  localStorage.removeItem(TODOS_KEY);
  todoUl.replaceChildren();
}

