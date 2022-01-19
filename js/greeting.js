const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");
const USERNAME_KEY = "User Name";
const HIDDEN_CLASSNAME = "hidden";

function getUserName(event){
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName + 2);
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    showGreeting(userName);

}

function showGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName + 1);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", getUserName);
} else{
    showGreeting(savedUserName);
}



