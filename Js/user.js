const userNicknameElement = document.getElementById("userNickName");
const userEmailElement = document.getElementById("userEmail");
const newEmailInput = document.getElementById("newEmailInput");
const newPasswordInput = document.getElementById("newPasswordInput");
const changeEmailBtn = document.getElementById("changeEmailBtn");
const changePasswordBtn = document.getElementById("changePasswordBtn");
const logout = document.getElementById("logout");


function displayUserData() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {
        userNicknameElement.textContent = currentUser.nickname;
        userEmailElement.textContent = currentUser.email;
    } else {
        console.log("No user is currently logged in.");
    }
}

logout.addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    
    window.location.href = "logIN.html"; //
});

window.addEventListener("DOMContentLoaded", displayUserData);

