const nicknameInput = document.getElementById("nicknameInput"); 
const passwordInput = document.getElementById("passwordInput");
const errorUser = document.getElementById("errorUser");
const logBtn = document.getElementById("logBtn");
const emailInput = document.getElementById("emailInput");

// При нажатии на кнопку логина
logBtn.addEventListener("click", function() {
    const nick = nicknameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Поиск пользователя и проверка
    const foundUser = users.find(user => 
        (user.nickname === nick || user.email === email) && user.password === password
    );

    if (foundUser) {
        errorUser.textContent = `Login successful!`;
        errorUser.style.color = "green";

        // Сохранение авторизованного пользователя в localStorage
        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        // Очистка полей ввода
        nicknameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        // Обновление страницы или перенаправление на другую
        window.location.reload();
    } else {
        errorUser.textContent = `Invalid username, email, or password.`;
        errorUser.style.color = "red";
    }
});

// Функция для добавления администратора, если он еще не создан
function createAdminAccount() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = users.some(user => user.role === "admin");

    if (!adminExists) {
        // Создаем нового пользователя с ролью "admin"
        const adminAccount = {
            nickname: "admin",
            email: "admin@example.com",
            password: "admin123",
            role: "admin"
        };

        // Добавляем аккаунт в массив пользователей и сохраняем в localStorage
        users.push(adminAccount);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Admin account created successfully.");
    }
}

// Вызываем функцию создания администратора один раз при загрузке страницы
window.onload = createAdminAccount;
