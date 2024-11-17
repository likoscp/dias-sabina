// Элемент для отображения списка игр
const gameList = document.getElementById("gameList");

// Функция для отображения данных игр
function displayGames(games) {
    // Очищаем список перед добавлением новых элементов
    gameList.innerHTML = "";

    games.forEach(game => {
        // Создаем карточку для игры
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Добавляем название игры
        const title = document.createElement("h3");
        title.textContent = game.name;

        // Добавляем описание или альтернативный текст
        const description = document.createElement("p");
        description.textContent = game.deck || "No description available";

        // Добавляем изображение игры
        const image = document.createElement("img");
        image.src = game.image?.icon_url || "placeholder-image.jpg"; // Фон, если изображения нет
        image.alt = game.name;

        // Добавляем элементы в карточку
        gameCard.appendChild(image);
        gameCard.appendChild(title);
        gameCard.appendChild(description);

        // Добавляем карточку в список игр
        gameList.appendChild(gameCard);
    });
}

// Получение данных из API
fetch('https://www.giantbomb.com/api/search/?api_key=7ae0984fdf3c28a7b072f981bac8238974d93ad8&format=json&query=minecraft&resources=game')
    .then(response => response.json())
    .then(data => {
        // Проверяем, есть ли данные
        if (data.results && data.results.length > 0) {
            displayGames(data.results);
        } else {
            gameList.innerHTML = "<p>No games found.</p>";
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        gameList.innerHTML = "<p>Failed to load games.</p>";
    });
