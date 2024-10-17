const nicknameInput = document.getElementById("nicknameInput");
const passwordInput = document.getElementById("passwordInput");
const errorUser = document.getElementById("errorUser");
const logBtn = document.getElementById("logBtn");
const emailInput = document.getElementById("emailInput");

logBtn.addEventListener("click", function(){
    const nick = nicknameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    if(nick === "admin" && email === "diaszakir25@gmail.com" && password === "admin"){
        errorUser.textContent = `Login succesful`;
    }
    else{
        errorUser.textContent = `Error`;
    }
});