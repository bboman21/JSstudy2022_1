const title = document.querySelector(".hello h1");

console.log(title);


function clickTitle(){
    title.style.color = "red";
    title.innerText = "Clicked";
}

title.addEventListener("click", clickTitle);


//Event

const h1 = document.querySelector(".headTitle h1")

function handleMouseClick(){
    h1.innerText = "Mouse Clicked~"
    h1.style.color = "yellow"
};

function handleMouseEnter(){
    h1.innerText = "Mouse Enter~"
    h1.style.color = "red"
};

function handleMouseLeave(){
    h1.innerText = "Mouse Leave~"
    h1.style.color = "black"
};

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
};

function handleWindowCopy(){
    alert("Success!");
};

function handleWifiOff(){
    alert("WIFI disconnected!");
};

function handleWifiOn(){
    alert("WIFI connected!");
};

h1.addEventListener("click", handleMouseClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWifiOff);
window.addEventListener("online", handleWifiOn);


//Event2

const h1 = document.querySelector(".headTitle h1")

function handleMouseClick(){
    const correntColor = h1.style.color;
    let newColor;
    if (correntColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}


h1.addEventListener("click", handleMouseClick);

//Event3
const h1 = document.querySelector(".headTitle h1")


 function handleMouseClick (){
     const clickedClass = "active";
     if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
        console.log(h1.className);
     } else {
         h1.classList.add(clickedClass);
         console.log(h1.className);
     }
 }

h1.addEventListener("click", handleMouseClick);

//Event4
const h1 = document.querySelector(".headTitle h1")


 function handleMouseClick (){
     h1.classList.toggle("active");
 }

h1.addEventListener("click", handleMouseClick);


// Gretting UserName
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "User Name";

function getUserName(event){
    event.preventDefault();
    console.log(loginInput.value);
    const type_userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, type_userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingMessage(type_userName);
    
}

function greetingMessage(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY)
console.log(savedUserName);

if (savedUserName === null){
    loginForm.addEventListener("submit", getUserName);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
} else {
    greetingMessage(savedUserName);

}

//clock
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(4, "0");
    const seconds = String(date.getSeconds()).padStart(4, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);



//Quotes
const quotes = [
    {
        quote: "01 ahsdfnlkjsdlfsja asdfasdfasdfasdf sdf asdfasd",
        author: "ajsdflds",
    },
    {
        quote: "02 aagalkjsdlfsja asdfasdfasdfasdf sdf asdfasd",
        author: "ajsdflds",
    },
    {
        quote: "03 jghg ae avsew asdf sdf asdfasd",
        author: "msgfbvd",
    },
    {
        quote: "04 gbsdf gbvccasdffasdf asdfasf fasd",
        author: "vdscvsd d",
    },
    {
        quote: "05 etg nb gfsf sfsdffasdsafassafa asfdsf  asf ",
        author: "xvcasdv flds",
    },
    {
        quote: "06 nstrh afs gfhsdfasdf swfsczxsf dcafdf",
        author: "reg flds",
    },
    {
        quote: "07 lkjhngfb43 wfaht retasdfasvzx dafawe f",
        author: "wefxcb lds",
    },
    {
        quote: "08 aver dlfsja asdxdfsefasabfzvzsvcswecewc",
        author: "sdaf lds",
    },
    {
        quote: "09 eyjiuio lfsja asdf asdsa fssfSFcv fasd",
        author: "jhsfdc ds",
    },
    {
        quote: "10 fkhg g dsvdfa asdfasdfasdfascvbzres eawf aw",
        author: "xcvr lds",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
//const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(quote);
console.log(author);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



//Background
const images = ["background01.jpg", "background02.jpg", "background03.jpg",];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//TO DO list

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  //console.log("aaaaa");
  const li = event.target.parentElement;
  li.remove();
}


function printToDo(newToDo){
  //console.log("my todo is ", event);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  //console.log(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  //console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //console.log(newToDo);
  printToDo(newToDo);
}


toDoForm.addEventListener("submit", handleToDoSubmit);


<form id="todo-form">
        <input type="text" placeholder="Write a To DO and Press Enter" required />
      </form>
      <ul id="todo-list">
      </ul>
