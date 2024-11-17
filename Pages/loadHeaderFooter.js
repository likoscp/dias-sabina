
function loadHTML(url, elementId) {
    return fetch(url) 
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('./Pages/header.html', 'header');


document.addEventListener('DOMContentLoaded', function() {

    loadHTML('./Pages/footer.html', 'footer').then(() => {

        const modal = document.getElementById("contactModal");
        const contactLink = document.querySelector('a[href="#contactModalWindow"]');
        const closeButton = document.querySelector('.modal .close');

        if (contactLink && modal && closeButton) {
            contactLink.addEventListener('click', function(event) {
                event.preventDefault();
                modal.style.display = "block";
            });

            closeButton.addEventListener('click', function() {
                modal.style.display = "none";
            });

            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        } else {
            console.error("error");
        }
    });
});
