const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".loginform input");
const loginBtn = document.querySelector(".loginform button");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';



function paintGreeting(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${name}'s court`;
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginBtn.classList.add(HIDDEN_CLASSNAME);
  }




function onLoginBtnClick(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  const savedUserName = localStorage.getItem(USERNAME_KEY);

  if (savedUserName === null) {
    alert("Please Write Again");    

  } 
  else{
    paintGreeting(username);
  }

  
 
}




loginBtn.addEventListener("click", onLoginBtnClick);

