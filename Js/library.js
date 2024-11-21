
const gameList = document.getElementById("gameList");

function displayGames(games) {
   
    gameList.innerHTML = "";

    games.forEach(game => {

        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const title = document.createElement("h3");
        title.textContent = game.name;

        const description = document.createElement("p");
        description.textContent = game.deck || "No description available";

        const image = document.createElement("img");
        image.src = game.image?.icon_url || "placeholder-image.jpg";
        image.alt = game.name;

        gameCard.appendChild(image);
        gameCard.appendChild(title);
        gameCard.appendChild(description);

        gameList.appendChild(gameCard);
    });
}

fetch('https://www.giantbomb.com/api/search/?api_key=7ae0984fdf3c28a7b072f981bac8238974d93ad8&format=json&query=minecraft&resources=game')
    .then(response => response.json())
    .then(data => {
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
