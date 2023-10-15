const nameForm = document.querySelector("#name-form-box");
const nameBtn = document.querySelector("#name-btn button");
const nameInput = document.querySelector("#name-input input");
const signInDiv = document.querySelector("#signIn-wrap");
const greetingDiv = document.querySelector("#greeting-wrap");
const todoDiv = document.querySelector("#todo-wrap");
const greetingNameText = greetingDiv.querySelector("span")

const signOutBtn = document.querySelector("#signOutBox button")

const NAME_KEY = "userName"
let localName = localStorage.getItem(NAME_KEY)

const HIDDEN_CLASS = "hidden";
const SHOW_CLASS = "show";

window.onload = hiding()
function hiding() {
  signInDiv.classList.toggle(HIDDEN_CLASS);
  greetingDiv.classList.toggle(HIDDEN_CLASS)
  todoDiv.classList.toggle(HIDDEN_CLASS)
}

if (localName === null) {
  let localName = localStorage.getItem(NAME_KEY)
  signInDiv.classList.toggle(HIDDEN_CLASS)
  signInDiv.classList.toggle(SHOW_CLASS)
} else {
  greeting(localName)
};

nameForm.addEventListener("submit", savingName)

function savingName(event) {
  event.preventDefault();
  let name = nameInput.value;
  nameInput.value = "";
  localStorage.setItem(NAME_KEY, name);
  signInDiv.classList.toggle(HIDDEN_CLASS);
  greeting(name);

}

function greeting(name) {
  greetingDiv.classList.toggle(HIDDEN_CLASS);
  greetingDiv.classList.toggle(SHOW_CLASS);
  greetingNameText.innerText = name;
}

greetingDiv.addEventListener("click", makingTodo)

function makingTodo() {
  greetingDiv.classList.toggle(SHOW_CLASS);
  greetingDiv.classList.toggle(HIDDEN_CLASS);
  todoDiv.classList.toggle(HIDDEN_CLASS);
  todoDiv.classList.toggle(SHOW_CLASS);
};

// 로그아웃
signOutBtn.addEventListener("click", signOut)

function signOut() {
  let localName = localStorage.getItem(NAME_KEY)
  if (localName === null) {
    alert("Please sign in first.");
    console.log("test")
  } else {
    if (localStorage.getItem("todos") !== null) {
      localStorage.removeItem("todos");
    }
    localStorage.removeItem(NAME_KEY);
    location.reload();
  }
}