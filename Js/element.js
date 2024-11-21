import gamesDB from './gamesDB.js';

const layouts = {
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

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayDetailedGame(game) {
    const gameElement = document.getElementById('gameElement');
    if (!game) {
        gameElement.innerHTML = '<p>Game not found!</p>';
        return;
    }

    gameElement.innerHTML = layouts.detailed(game);

    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', event => {
            event.preventDefault(); 

            const reviewerName = document.getElementById('reviewerName').value;
            const reviewText = document.getElementById('reviewText').value;
            const reviewRating = document.getElementById('reviewRating').value;

            if (reviewerName && reviewText && reviewRating) {

                game.reviews.push({
                    reviewer: reviewerName,
                    reviewText,
                    rating: reviewRating
                });

                alert('Review submitted!');
                displayDetailedGame(game); 
            } else {
                alert('Please fill in all fields!');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const gameID = getQueryParam('gameID');
    if (!gameID) {
        document.getElementById('gameElement').innerHTML = '<p>Game ID is missing in the URL!</p>';
        return;
    }

    const game = gamesDB.find(g => g.id === parseInt(gameID));
    if (!game) {
        document.getElementById('gameElement').innerHTML = '<p>Game not found!</p>';
        return;
    }

    displayDetailedGame(game);
});
