const nameInput = document.getElementById("nameInput");
const surnameInput = document.getElementById("surnameInput");
const nicknameInput = document.getElementById("nicknameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirmInput = document.getElementById("passwordConfirmInput"); 
const nickHint = document.getElementById("nickHint");  
const checkTerms = document.getElementById("checkTerms");  
const emailHint = document.getElementById("emailHint");
const passHint = document.getElementById("passHint");  
const errorUser = document.getElementById("errorUser");
const regBtn = document.getElementById("regBtn");
const passEqual = document.getElementById("passEqual");
const logBtn = document.getElementById("logBtn");
const checkReg = document.getElementById("checkReg");

let symbol = /[!@#$%^&*()_\-=+*`~;:<,./|\\[\]{}']/;
let number = /[0-9]/;
let letter = /[A-Z]/;

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;

    if (password.length >= 8 && password.length <= 32) {
        if (symbol.test(password) && number.test(password) && letter.test(password)) {
            passHint.textContent = `Strong Password`;
        } else {
            passHint.textContent = `Weak Password`;
        }
    } else {
        passHint.textContent = `Weak Password`;
    }
});

emailInput.addEventListener("input", function() {
    const email = emailInput.value;

    if(email.indexOf("@") === -1){
        emailHint.textContent = `Not a valid email`;
    }
    else{
        emailHint.textContent = `Valid Email`;
    }
});

passwordConfirmInput.addEventListener("input", function(){
    const password1 = passwordInput.value;
    const password2 = passwordConfirmInput.value;

    if(password1 === password2){
        passEqual.textContent = ``;
    }
    else{
        passEqual.textContent = `Passwords not equal`;
    }
});

const playErrorSound = () => {
    let sound = new Audio("/sound/error.mp3");
    sound.play();
};

const playSuccessSound = () => {
    let sound = new Audio("/sound/success.mp3");
    sound.play();
};

regBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const nick = nicknameInput.value.trim();
    const email = emailInput.value.trim();
    const password1 = passwordInput.value;
    const password2 = passwordConfirmInput.value;

    if (!name || !surname || !nick || !email || !password1 || !password2) {
        checkReg.textContent = `Fill all gaps`;
        playErrorSound();
    } else if (password1 !== password2) {
        checkReg.textContent = `Passwords do not match`;
        playErrorSound();
    } else if(email.indexOf("@") === -1){
        checkReg.textContent = `Not a valid email`;
        playErrorSound();
    } else {
        const user = {
            name: name,
            surname: surname,
            nickname: nick,
            email: email,
            password: password1 
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.push(user);
        
        localStorage.setItem("users", JSON.stringify(users));

        checkReg.textContent = `Registration was successful`;
        playSuccessSound();

        nameInput.value = "";
        surnameInput.value = "";
        nicknameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        passwordConfirmInput.value = "";
    }
});