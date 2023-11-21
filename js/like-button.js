favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

updateFavoriteCount();

document.addEventListener('DOMContentLoaded', () => {
    let buttons_like = document.getElementsByClassName('like-container');

    for (let i = 0; i < buttons_like.length; i++) {
        let button = buttons_like[i];

        let buttonId = button.dataset.id;
        
        let isLiked = localStorage.getItem('likeButton_' + buttonId);
        
        if (isLiked === 'true') {
            button.style.backgroundColor = 'red';
        }

        button.addEventListener('click', function() {
            toggleLike(button);
            addToFavorites(button);
        });
    }
});

function toggleLike(button) {
    if (button.style.backgroundColor === '') {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = '';
    }

    let buttonId = button.dataset.id;

    let isLiked = button.style.backgroundColor === 'red';

    localStorage.setItem('likeButton_' + buttonId, JSON.stringify(isLiked));
}

function addToFavorites(button) {
    let itemName = button.parentElement.querySelector(".description h2").innerText;

    let itemIndex = favoriteItems.indexOf(itemName);

    if (itemIndex === -1) {
        favoriteItems.push(itemName);
    } else {
        favoriteItems.splice(itemIndex, 1);
    }
    
    updateFavoriteCount();

    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}

function updateFavoriteCount() {
    let countElement = document.getElementById("favoriteCount");
    
    countElement.innerText = favoriteItems.length;
}