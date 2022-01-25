const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "Todos";

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


function deleteTodo(event){
  //console.log("aaaa");
  const li = event.target.parentElement;
  //console.log(li.id);
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}


function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

}



function getTodoList(event){
  event.preventDefault();
  //console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
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
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
  

}