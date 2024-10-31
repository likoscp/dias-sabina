document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    console.log("Текущий пользователь:", currentUser);

    if (currentUser) {
        const registerLink = document.getElementById("registerLink");
        const loginLink = document.getElementById("loginLink");
        const accountLink = document.getElementById("accountLink"); // Обновите ID, если нужно

        // Удаляем ссылку на регистрацию
        if (registerLink) {
            registerLink.remove();
            console.log("Ссылка 'Register' удалена");
        }

        // Удаляем ссылку на вход в систему
        if (loginLink) {
            loginLink.textContent = currentUser.nickname;  
            loginLink.href = "accountPage.html";  
            console.log("Ссылка 'Log in' заменена на никнейм пользователя");
        }

        // Удаляем (или скрываем) другие элементы, если это необходимо
        if (accountLink) {
            accountLink.remove(); // Убедитесь, что этот элемент существует
            console.log("Ссылка 'Account' удалена");
        }

        // Перенаправление на страницу аккаунта

    } else {
        console.log("Ошибка: Пользователь не найден в localStorage");
    }
});
