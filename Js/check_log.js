const nicknameInput = document.getElementById("nicknameInput"); 
const passwordInput = document.getElementById("passwordInput");
const errorUser = document.getElementById("errorUser");
const logBtn = document.getElementById("logBtn");
const emailInput = document.getElementById("emailInput");

logBtn.addEventListener("click", function() {
    const nick = nicknameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => 
        (user.nickname === nick || user.email === email) && user.password === password
    );

    if (foundUser) {
        errorUser.textContent = `Login successful!`;
        errorUser.style.color = "green";

        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        nicknameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        window.location.reload();
    } else {
        errorUser.textContent = `Invalid username, email, or password.`;
        errorUser.style.color = "red";
    }
});

function createAdminAccount() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = users.some(user => user.role === "admin");

    if (!adminExists) {
        const adminAccount = {
            nickname: "admin",
            email: "admin@example.com",
            password: "admin123",
            role: "admin"
        };

        users.push(adminAccount);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Admin account created successfully.");
    }
}

window.onload = createAdminAccount;
