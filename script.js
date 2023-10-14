let cardCount = 0;
let isNumberGenerated = false;
let remainingChakra = 0;

const cardAttributes = {
    orochimaru: {
        chakra: 1,
        health: 2,
        armor: 0,
        speed: 3,
        magicDamage: 2,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    sasori: {
        chakra: 2,
        health: 2,
        armor: 3,
        speed: 2,
        magicDamage: 1,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    nagato: {
        chakra: 2,
        health: 2,
        armor: 0,
        speed: 2,
        magicDamage: 4,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    hidan: {
        chakra: 3,
        health: 3,
        armor: 0,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
    },
    itachi: {
        chakra: 3,
        health: 3,
        armor: 4,
        speed: 7,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    zabuza: {
        chakra: 3,
        health: 3,
        armor: 0,
        speed: 3,
        magicDamage: 1,
        meleeDamage: 3,
        rangeDamage: 0,
    },
    deidara: {
        chakra: 4,
        health: 5,
        armor: 0,
        speed: 6,
        magicDamage: 1,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    neji: {
        chakra: 4,
        health: 4,
        armor: 0,
        speed: 7,
        magicDamage: 0,
        meleeDamage: 4,
        rangeDamage: 0,
    },
    rockLee: {
        chakra: 4,
        health: 4,
        armor: 0,
        speed: 8,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    shikamaru: {
        chakra: 5,
        health: 5,
        armor: 0,
        speed: 4,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 4,
    },
    kisame: {
        chakra: 5,
        health: 3,
        armor: 6,
        speed: 5,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    sakura: {
        chakra: 5,
        health: 5,
        armor: 0,
        speed: 4,
        magicDamage: 0,
        meleeDamage: 3,
        rangeDamage: 0,
    },
    konan: {
        chakra: 5,
        health: 3,
        armor: 3,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
    },
    hinata: {
        chakra: 6,
        health: 7,
        armor: 0,
        speed: 7,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
    },
    gaara: {
        chakra: 6,
        health: 7,
        armor: 2,
        speed: 6,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    kakashi: {
        chakra: 7,
        health: 7,
        armor: 0,
        speed: 7,
        magicDamage: 4,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    madara: {
        chakra: 7,
        health: 4,
        armor: 4,
        speed: 4,
        magicDamage: 2,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    jiraiya: {
        chakra: 7,
        health: 7,
        armor: 3,
        speed: 5,
        magicDamage: 0,
        meleeDamage: 5,
        rangeDamage: 0,
    },
    kakuzu: {
        chakra: 8,
        health: 10,
        armor: 10,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 3,
        rangeDamage: 0,
    },
    tsunade: {
        chakra: 8,
        health: 8,
        armor: 0,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 4,
        rangeDamage: 0,
    },
    obito: {
        chakra: 8,
        health: 7,
        armor: 4,
        speed: 6,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    naruto: {
        chakra: 9,
        health: 8,
        armor: 9,
        speed: 6,
        magicDamage: 0,
        meleeDamage: 6,
        rangeDamage: 0,
    },
    sasuke: {
        chakra: 9,
        health: 6,
        armor: 10,
        speed: 9,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
    },
    killerB: {
        chakra: 9,
        health: 6,
        armor: 9,
        speed: 6,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
    }
};

function generateRandomNumber() {
    if(isNumberGenerated == false) {
        cardCount = 0;
        const min = 5;
        const max = 30;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('number-display').textContent = `Chakra Left: ${randomNumber}`;
        selectedCardcardCount = randomNumber;

        const button = document.getElementById('generate-button');
        button.parentNode.removeChild(button);

        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            image.classList.remove('clicked'); 
            image.addEventListener('click', toggleClicked); 
        });
        isNumberGenerated = true;
        remainingChakra = randomNumber;
    }
}

function startGame() {
    const selectedCards = document.querySelectorAll('.image.clicked');

    if(selectedCards.length < 1) {
        alert("Select at least 1 card to start the game.");
    } 
    else if(selectedCards.length <= 8) {
        const selectedCardSources = [];
        selectedCards.forEach(card => {
            selectedCardSources.push(card.src);
        });

        const queryParams = selectedCardSources.map(src => `card=${encodeURIComponent(src)}`).join('&');
        const newPageURL = `gameEngine.html?${queryParams}`;
        window.open(newPageURL, '_blank');
    } 
    else {
        alert("The maximum deck size is 8 cards.");
    }
}
function updateChakraDisplay() {
    document.getElementById('number-display').textContent = `Chakra Left: ${remainingChakra}`;
}

function toggleClicked() {
    if(this.classList.contains('clicked'))
    {
        const cardName = this.src.split('/').pop().split('.')[0];
        const chakraCost = cardAttributes[cardName].chakra;
        remainingChakra += chakraCost;
        updateChakraDisplay();

        this.classList.remove('clicked');
        cardCount--;
    }

    else if(cardCount < 8)
    {
        cardName = this.src.split('/').pop().split('.')[0];
        chakraCost = cardAttributes[cardName].chakra;

        if(remainingChakra >= chakraCost) {
            this.classList.add('clicked');
            cardCount++;
            remainingChakra -= chakraCost;
            updateChakraDisplay();
        }
        else {
            alert("Not enough chakra to select this card.");
        }
    }
    else
    {
        alert("The maximum deck size is 8 cards.")
    }
}