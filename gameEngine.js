const params = new URLSearchParams(window.location.search);
const selectedCardSources = params.getAll('card');
const imageContainer = document.querySelector('.image-container');
const opponentContainer = document.querySelector('.opponent-container');
let count = 1;

selectedCardSources.forEach(source => {
    const card = document.createElement('img');
    card.src = source;
    card.className = 'image';
    
    if(count % 2 == 1) {
        imageContainer.appendChild(card);
    }
    else {
        opponentContainer.appendChild(card);
    }
    count++;
});