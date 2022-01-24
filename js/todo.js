const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const todos= [];
const TODOS_KEY = "Todos";

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


function deleteTodo(event){
  //console.log("aaaa");
  const li = event.target.parentElement;
  li.remove();
}


function printTodo(todoText){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = todoText;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

}



function getTodoList(event){
  event.preventDefault();
  //console.log(todoInput.value);
  const todoText = todoInput.value;
  todoInput.value = "";
  todos.push(todoText);
  printTodo(todoText);
  saveTodos()

}

//function sayHello(item){
 // console.log("this is the turn Of", item);
//}

todoForm.addEventListener("submit", getTodoList);

const savedTodos = localStorage.getItem(TODOS_KEY);
//console.log(savedTodos);

if(savedTodos !== null){
  const parsedTodos = JSON.parse(savedTodos);
  console.log(parsedTodos);
  parsedTodos.forEach((item) => console.log("this is the turn Of", item));

}