const gamesDB = [
    {
        id: 1,
        name: "Undertale",
        platform: "PC",
        price: 4.99,
        image: "https://shared.akamai.steamstatic.com//store_item_assets/steam/apps/391540/header.jpg?t=1579096091"
    },
    {
        id: 2,
        name: "Hollow Knight",
        platform: "PC",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com//store_item_assets/steam/apps/367520/header.jpg?t=1695270428"
    },
    {
        id: 3,
        name: "Celeste",
        platform: "PC",
        price: 11.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525"
    },
    {
        id: 4,
        name: "Minecraft",
        platform: "PC",
        price: 14.99,
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a"
    }
];

const gamesContainer = document.getElementById("gamesContainer");
const totalPriceElement = document.getElementById("totalPrice");

let totalPrice = 0;

function renderGames() {
    gamesContainer.innerHTML = "";

    gamesDB.forEach((game) => {
        const gameElement = document.createElement("div");
        gameElement.className = "game_window";
        gameElement.innerHTML = `
            <figure>
                <img src="${game.image}" width="400" height="200" alt="${game.name}">
            </figure>
            <div class="game_info">
                <h2>${game.name}</h2>
                <p>${game.platform} <br> Price: ${game.price.toFixed(2)}$</p>
                <div class="buttons">
                    <button class="btn btn-primary" onclick="buyGame(${game.id})">Buy</button>
                    <button class="btn btn-danger" onclick="removeGame(${game.id})">Remove</button>
                </div>
            </div>
        `;
        gamesContainer.appendChild(gameElement);
    });
}

function updateTotalPrice() {
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeGame(id) {
    const index = gamesDB.findIndex((game) => game.id === id);
    if (index !== -1) {
        gamesDB.splice(index, 1); 
        renderGames(); 
    }
}

function buyGame(id) {
    const game = gamesDB.find((game) => game.id === id);
    if (game) {
        totalPrice += game.price; 
        updateTotalPrice(); 
    }
}

renderGames();
