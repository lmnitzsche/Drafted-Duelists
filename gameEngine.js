const params = new URLSearchParams(window.location.search);
const selectedCardSources = params.getAll('card');
const imageContainer = document.querySelector('.image-container');
const opponentContainer = document.querySelector('.opponent-container');
let count = 1;
let positionSpot = 1;
let pCount = 0;

selectedCardSources.forEach(source => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const card = document.createElement('img');
    card.src = source;
    card.className = 'image';

    const health = document.createElement('div');
    health.className = 'health'; 
    const healthValue = 100;
    health.textContent = 'Health: ${healthValue}';

    const armor = document.createElement('div');
    armor.className = 'armor';
    const armorValue = 100;
    armor.textContent = 'Armor: ${armorValue}';

    const position = document.createElement('div');
    position.className = 'position';
    pCount++;

    if(pCount % 2 == 0 && pCount != 0) {
        positionSpot++;
    }
    position.textContent = 'Position: ${positionSpot}';


    cardContainer.appendChild(card);
    cardContainer.appendChild(health);
    cardContainer.appendChild(armor);
    cardContainer.appendChild(position);
    
    if(count % 2 == 1) {
        imageContainer.appendChild(cardContainer);
    }
    else {
        opponentContainer.appendChild(cardContainer);
    }
    count++;
});