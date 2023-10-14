let cardCountPlayerOne = 0;
let cardCountPlayerTwo = 0;
let vetoesPlayerOne = 1;
let vetoesPlayerTwo = 1;
let isNumberGenerated = false;
let remainingChakra = 0;
let opponentRemainingChakra = 0;
let playerOneTurn = true;
const selectedCardsPlayerOne = [];
const selectedCardsPlayerTwo = [];

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
        cardCountPlayerOne = 0;
        cardCountPlayerTwo = 0;
        const min = 5;
        const max = 30;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        const button = document.getElementById('generate-button');
        button.parentNode.removeChild(button);

        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            image.classList.remove('clicked'); 
            image.addEventListener('click', toggleClicked); 
        });
        isNumberGenerated = true;
        remainingChakra = randomNumber;
        opponentRemainingChakra = randomNumber;
        updateChakraDisplay();
    }
}

function startGame() {
    const selectedCards = document.querySelectorAll('.image.clicked');

    if(selectedCards.length < 2) {
        alert("Select at least 1 card each to start the game.");
    } 
    else if(selectedCards.length <= 16) {
        const selectedCardSources = [];
        selectedCards.forEach(card => {
            selectedCardSources.push(card.src);
        });

        const queryParams = selectedCardSources.map(src => `card=${encodeURIComponent(src)}`).join('&');
        const newPageURL = `gameEngine.html?${queryParams}`;
        window.open(newPageURL, '_blank');
    } 
    else {
        alert("The maximum deck size is 8 cards each.");
    }
}

function updateChakraDisplay() {
    document.getElementById('number-display').textContent = `Player 1 Chakra: ${remainingChakra}, Vetoes: ${vetoesPlayerOne}, Cards: ${cardCountPlayerOne}`;
    document.getElementById('number-display-two').textContent = `Player 2 Chakra: ${opponentRemainingChakra}, Vetoes: ${vetoesPlayerTwo}, Cards: ${cardCountPlayerTwo}`;

}

function toggleClicked() {
    if(this.classList.contains('clicked')) {
        if(playerOneTurn == true && vetoesPlayerOne == 1) {
            const cardName = this.src.split('/').pop().split('.')[0];
            const chakraCost = cardAttributes[cardName].chakra;
            opponentRemainingChakra += chakraCost;
            this.classList.remove('clicked');
            this.parentNode.removeChild(this);
            cardCountPlayerTwo--;
            vetoesPlayerOne--;
            updateChakraDisplay();

            const index = selectedCardsPlayerTwo.indexOf(cardName);
            if(index !== -1) {
                selectedCardsPlayerTwo.splice(index, 1);
            }
        }
        else if(playerOneTurn == false && vetoesPlayerTwo == 1) {
            cardName = this.src.split('/').pop().split('.')[0];
            chakraCost = cardAttributes[cardName].chakra;
            remainingChakra += chakraCost;
            this.classList.remove('clicked');
            this.parentNode.removeChild(this);
            cardCountPlayerOne--;
            vetoesPlayerTwo--;
            updateChakraDisplay();

            const index = selectedCardsPlayerOne.indexOf(cardName);
            if(index !== -1) {
                selectedCardsPlayerOne.splice(index, 1);
            }
        }
    }

    else if(cardCountPlayerOne < 8 && playerOneTurn == true)
    {
        cardName = this.src.split('/').pop().split('.')[0];
        chakraCost = cardAttributes[cardName].chakra;

        if(remainingChakra >= chakraCost) {
            this.classList.add('clicked');
            cardCountPlayerOne++;
            remainingChakra -= chakraCost;
            updateChakraDisplay();
            selectedCardsPlayerOne.push(cardName);
        }
        else {
            alert("Not enough chakra to select this card.");
        }
        playerOneTurn = false;
    }

    else if(cardCountPlayerTwo < 8 && playerOneTurn == false)
    {
        cardName = this.src.split('/').pop().split('.')[0];
        chakraCost = cardAttributes[cardName].chakra;

        if(opponentRemainingChakra >= chakraCost) {
            this.classList.add('clicked');
            cardCountPlayerTwo++;
            opponentRemainingChakra -= chakraCost;
            updateChakraDisplay();
            selectedCardsPlayerTwo.push(cardName);
        }
        else {
            alert("Not enough chakra to select this card.");
        }
        playerOneTurn = true;
    }

    else
    {
        alert("The maximum deck size is 8 cards.")
    }
}