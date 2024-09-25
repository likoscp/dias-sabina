import gamesDB from './gamesDB.js';
const defaultPhoto = "https://via.placeholder.com/300x200?text=No+Image";

const layouts = {
    default: (game) => `
        <div class="card">
            <img class="card-img-top"
                src="${game.photoLink || defaultPhoto}"
                alt="${game.title}">
            <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.description}</p>
                <a href="/Pages/elementPage.html" class="btn btn-secondary" style="margin-top: auto;">Play</a>
            </div>
        </div>
    `,
    detailed: (game) => `
        <h2>${game.title}</h2>
        <img src="${game.photoLink || defaultPhoto}" alt="${game.title}" >
        <p>${game.description}</p>
        <h3>Requirements:</h3>
        <ul>
            ${game.requirements.map(req => `<li>${req.requirement}: ${req.version}</li>`).join('')}
        </ul>
        <div class="gallery">
            <div id="featuredCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    ${game.gallery.map((_, index) => `
                        <li data-target="#featuredCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>
                    `).join('')}
                </ol>
                <div class="carousel-inner">
                    ${game.gallery.map((img, index) => layouts.photoGallery({ photo: img, active: index === 0 })).join('')}
                </div>
                <a class="carousel-control-prev" href="#featuredCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#featuredCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    `,
    photoGallery: ({ photo, active }) => `
        <div class="carousel-item ${active ? 'active' : ''}">
            <img class="d-block w-100" src="${photo || defaultPhoto}" alt="Gallery Image">
        </div>
    `
};

const layers = {
    resultsLayer: {
        containerId: 'resultsLayer',
        layoutType: 'default',
        games: gamesDB,
    },
    gameElement: {
        containerId: 'gameElement',
        layoutType: 'detailed',
        games: gamesDB.slice(0, 1),
    },
};

function displayGames(layerConfig) {
    const targetList = document.getElementById(layerConfig.containerId);
    targetList.innerHTML = '';
    layerConfig.games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = layouts[layerConfig.layoutType](game);
        targetList.appendChild(gameItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    Object.values(layers).forEach(layerConfig => {
        const targetList = document.getElementById(layerConfig.containerId);
        if (targetList) {
            displayGames(layerConfig);
        }
    });
});
