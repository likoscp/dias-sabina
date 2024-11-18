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
<div class="row p-5">
    <div class="col-lg-6">
        
        <img src="${game.photoLink || defaultPhoto}" alt="${game.title}" style="width: 500px;">
    </div>
    <div class="col-lg-6">
    <br>
    <h2><a href="${game.link}" >${game.title}</a></h2>
        <p>${game.description}</p>
        <h3>Requirements:</h3>
        <ul>
            ${game.requirements.map(req => `<li>${req.requirement}: ${req.version}</li>`).join('')}
        </ul>
    </div>
</div>
<div class="gallery">
    <div id="featuredCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            ${game.gallery.map((_, index) => `
            <li data-target="#featuredCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}">
            </li>
            `).join('')}
        </ol>
        <div class="carousel-inner">
            ${game.gallery.map((img, index) => layouts.photoGallery({ photo: img, active: index === 0
            })).join('')}
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
<div class="reviews p-5">
    <h3>User Reviews</h3>
    <ul>
        ${game.reviews.map(review => `
            <li>
                <strong>${review.reviewer}</strong>: 
                <span>${review.reviewText}</span> 
                <em>Rating: ${review.rating} ⭐</em>
            </li>
        `).join('')}
    </ul>
</div>
<h4>Submit Your Review</h4>
    <form id="reviewForm">
        <div class="mb-3">
    <input type="text" class="form-control" id="reviewerName" placeholder="Enter your name" required>
</div>
<div class="mb-3">
    <textarea class="form-control" id="reviewText" rows="3" placeholder="Write your review here..." required></textarea>
</div>

        <div class="mb-3">
            <label for="reviewRating" class="form-label">Rating</label>
            <select class="form-select" id="reviewRating" required>
                <option value="">Choose a rating...</option>
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐</option>
                <option value="3">3 ⭐</option>
                <option value="4">4 ⭐</option>
                <option value="5">5 ⭐</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit Review</button>
    </form>
</div>

    `,
    photoGallery: ({ photo, active }) => `
        <div class="carousel-item ${active ? 'active' : ''}">
            <img class="d-block w-100" src="${photo || defaultPhoto}" alt="Gallery Image" >
        </div>
    `
};


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

    const selectedTags = Array.from(document.querySelectorAll('.tags .btn-light.active'))
    .map(button => button.textContent.trim()); 
    
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
            selectedTags.some(tag => game.tags.includes(tag)) 
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

    const selectedTags = Array.from(document.querySelectorAll('.tags .btn-light.active')).map(btn => btn.id);

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
document.querySelectorAll('.tags .btn-light').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active'); 
        filterGames(); 
    });
});