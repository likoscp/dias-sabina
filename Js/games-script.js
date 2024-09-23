import gamesDB from './gamesDB.js';
const defaultPhoto = "https://via.placeholder.com/300x200?text=No+Image";

const layouts = {
    default: (game) => `
 
        <img src="${game.photoLink || defaultPhoto}" alt="${game.title}" 
            >
        <li><h2>${game.title}</h2></li>
        <p>${game.description}</p><button
            class="btn_change">Play</button><br>

        
    `,
    detailed: (game) => `
        <h2>${game.title}</h2>
        <img src="${game.photoLink || defaultPhoto}" alt="${game.title}">
        <p>${game.description}</p>
        <h3>Requirements:</h3>
        <ul>
            ${game.requirements.map(req => `<li>${req.requirement}: ${req.version}</li>`).join('')}
        </ul>
        <div class="gallery">
            ${game.gallery && game.gallery.length > 0
                ? game.gallery.map(img => `<img src="${img || defaultPhoto}" alt="${game.title} image" class="gallery-image">`).join('')
                : `<img src="${defaultPhoto}" alt="No images available" class="gallery-image">`}
        </div>
    `,
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
    }


};

function displayGames(layerConfig) {
    console.log(document.getElementById('resultsLayer'));

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

