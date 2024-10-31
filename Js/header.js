document.addEventListener("DOMContentLoaded", function() {
    updateHeader();
    window.addEventListener("storage", function(event) {
        if (event.key === "currentUser") {
            updateHeader();
        }
    });   
});

function updateHeader(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); 
    console.log("Текущий пользователь:", currentUser);

    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    const accountLink = document.getElementById("accountPage");
    const firstList = document.getElementById("firstList");
    const secondList = document.getElementById("secondList");
    const thirdList = document.getElementById("firstList");

    if (currentUser) {
        if (registerLink) {
            firstList.style.display = "none";
            console.log("Ссылка 'Register' удалена");
        }

        if (accountLink) {
            secondList.style.display = "none";
            console.log("Ссылка 'Account' удалена");
        }
        if(loginLink){
            loginLink.textContent = currentUser.nickname; 
            loginLink.href = "accountPage.html"; 
            console.log("Ссылка 'Log in' заменена на никнейм пользователя");
        }
    } else {
        console.log("Ошибка: Пользователь не найден в localStorage");
    }
}

function login(nickname) {
    const user = { nickname };
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateHeader();
}
