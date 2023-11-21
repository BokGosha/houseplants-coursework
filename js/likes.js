document.addEventListener('DOMContentLoaded', displayFavorites);

function displayFavorites() {
    favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

    let countElement = document.getElementById("favoriteCount");
    
    countElement.innerText = favoriteItems.length;
    
    let favoritesContainer = document.getElementById('gallery-container');
    
    favoriteItems.forEach(function(item) {
        let imageContainer = document.createElement('div');
        
        imageContainer.classList.add('image');
    
        let image = document.createElement('img');
        image.classList.add('image_i');

        switch(item) {
            case 'Замиокулькас':
                image.setAttribute('src', '543.750x0.jpg');
                break;
            case 'Антуриум':
                image.setAttribute('src', 'anthurium-210827_1920.jpg');
                break;
            case 'Гипоэстес':
                image.setAttribute('src', '1-58.jpg');
                break;
            case 'Колеус':
                image.setAttribute('src', '1650526944_37-vsegda-pomnim-com-p-kak-viglyadit-tsvetok-koleus-foto-38.jpg');
                break;
            case 'Ктенанта':
                image.setAttribute('src', 'f0bbfd30cc958545fb03fdc8b5b83735.jpg');
                break;
            case 'Венерина мухоловка':
                image.setAttribute('src', '8f85af9633aa75e818603a739e627c5b.jpeg');
                break;
            case 'Бегония':
                image.setAttribute('src', 'f3ca7c9d996533932c528277011d390d.png');
                break;
            case 'Аглаонема':
                image.setAttribute('src', '382_2.jpg');
                break;
        }

        image.setAttribute('alt', item);
    
        let description = document.createElement('div');
        description.classList.add('description');
    
        let heading = document.createElement('h2');
        heading.textContent = item;
    
        let link = document.createElement('a');

        switch(item) {
            case 'Замиокулькас':
                link.setAttribute('href', 'zamiokulkas.html');
                break;
            case 'Антуриум':
                link.setAttribute('href', 'anturium.html');
                break;
            case 'Гипоэстес':
                link.setAttribute('href', 'gipoestes.html');
                break;
            case 'Колеус':
                link.setAttribute('href', 'koleus.html');
                break;
            case 'Ктенанта':
                link.setAttribute('href', 'ktenanta.html');
                break;
            case 'Венерина мухоловка':
                link.setAttribute('href', 'muholovka.html');
                break;
            case 'Бегония':
                link.setAttribute('href', 'begonia.html');
                break;
            case 'Аглаонема':
                link.setAttribute('href', 'aglaonema.html');
                break;
        }

        let button = document.createElement('button');
        button.textContent = 'Подробнее';
        link.appendChild(button);

        let likeContainer = document.createElement('button');
        likeContainer.classList.add('like-container');

        switch(item) {
            case 'Замиокулькас':
                likeContainer.setAttribute('data-id', '1');
                break;
            case 'Антуриум':
                likeContainer.setAttribute('data-id', '2');
                break;
            case 'Гипоэстес':
                likeContainer.setAttribute('data-id', '7');
                break;
            case 'Колеус':
                likeContainer.setAttribute('data-id', '3');
                break;
            case 'Ктенанта':
                likeContainer.setAttribute('data-id', '8');
                break;
            case 'Венерина мухоловка':
                likeContainer.setAttribute('data-id', '6');
                break;
            case 'Бегония':
                likeContainer.setAttribute('data-id', '4');
                break;
            case 'Аглаонема':
                likeContainer.setAttribute('data-id', '5');
                break;
        }
        
        let likeButton = document.createElement('img');
        likeButton.classList.add('like-button');
        likeButton.setAttribute('src', 'heart_1.png');
        likeButton.setAttribute('width', '16');
        likeButton.setAttribute('height', '16');

        likeContainer.appendChild(likeButton);
        description.appendChild(heading);
        description.appendChild(link);
        imageContainer.appendChild(image);
        imageContainer.appendChild(description);
        imageContainer.appendChild(likeContainer);
    
        favoritesContainer.appendChild(imageContainer);
    });
}