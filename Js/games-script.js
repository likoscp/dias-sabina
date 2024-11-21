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
                <a href="/dias-sabina/docs/elementPage.html?gameID=${game.id}" class="btn btn-secondary" style="margin-top: auto;">Play</a>
            </div>
        </div>
    `};


const layers = {
    resultsLayer: {
        containerId: 'resultsLayer',
        layoutType: 'default',
        games: gamesDB,
    }
};



function displayGames(games) {
    const targetList = document.getElementById('resultsLayer');
    targetList.innerHTML = '';
    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = layouts.default(game);
        targetList.appendChild(gameItem);
    });
}

function filterGames() {
    const searchTerm = document.querySelector('input[type="text"]').value;
    const priceRange = document.getElementById('price').value;
    const company = document.querySelector('select[name="company"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const released = document.getElementById('flexSwitchCheckDefault').checked;
    const selectedTags = Array.from(document.querySelectorAll('.tags input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.id);
    let filteredGames = gamesDB;
    if (searchTerm) {
        filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    filteredGames = filteredGames.filter(game => game.priceRange <= priceRange);
    if (company !== "Company") {
        filteredGames = filteredGames.filter(game => game.company === company);
    }
    if (year !== "Year") {
        filteredGames = filteredGames.filter(game => game.year == year);
    }

    if (released) {
        filteredGames = filteredGames.filter(game => game.released);
    }
    if (selectedTags.length > 0) {
        filteredGames = filteredGames.filter(game => 
            selectedTags.every(tag => game.tags.includes(tag)) 
        );
    }
    displayGames(filteredGames);
}

function saveFilterSettings() {
    const searchTerm = document.querySelector('input[type="text"]').value;
    const priceRange = document.getElementById('price').value;
    const company = document.querySelector('select[name="company"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const released = document.getElementById('flexSwitchCheckDefault').checked;

    const selectedTags = Array.from(document.querySelectorAll('.tags input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.id);

    localStorage.setItem('filterSettings', JSON.stringify({
        searchTerm,
        priceRange,
        company,
        year,
        released,
        selectedTags
    }));
}

function loadFilterSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('filterSettings'));
    if (!savedSettings) return;

    document.querySelector('input[type="text"]').value = savedSettings.searchTerm || '';
    document.getElementById('price').value = savedSettings.priceRange || 10000;
    document.querySelector('select[name="company"]').value = savedSettings.company || 'Company';
    document.querySelector('select[name="year"]').value = savedSettings.year || 'Year';
    document.getElementById('flexSwitchCheckDefault').checked = savedSettings.released || false;


    document.querySelectorAll('.tags .btn-light').forEach(btn => {
        btn.classList.toggle('active', savedSettings.selectedTags.includes(btn.id));
    });
}


document.querySelector('input[type="text"]').addEventListener('input', saveFilterSettings);
document.getElementById('price').addEventListener('change', saveFilterSettings);
document.querySelector('select[name="company"]').addEventListener('change', saveFilterSettings);
document.querySelector('select[name="year"]').addEventListener('change', saveFilterSettings);
document.getElementById('flexSwitchCheckDefault').addEventListener('change', saveFilterSettings);
document.querySelectorAll('.tags .btn-light').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active'); 
        saveFilterSettings();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadFilterSettings();
    displayGames(gamesDB);
    document.querySelector('.btn-danger').addEventListener('click', filterGames);
    document.getElementById('resetButton').addEventListener('click', () => {
        document.querySelector('form').reset();
        displayGames(gamesDB); 
    });

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Delete') {
            event.preventDefault(); 
            document.querySelector('form').reset(); 
            displayGames(gamesDB); 
        }
    });
});

    const checkboxes = document.querySelectorAll('.section-search .hide-checkbox');

    function toggleLabelClass(checkbox) {
        if (checkbox.checked) {
            checkbox.parentNode.classList.add('active');
        } else {
            checkbox.parentNode.classList.remove('active');
        }
    }
    checkboxes.forEach(function(checkbox) {
        toggleLabelClass(checkbox);
        checkbox.addEventListener('change', function() {
            toggleLabelClass(checkbox);
        });
    });
