let cardCountPlayerOne = 0;
let cardCountPlayerTwo = 0;
let ppPlayerOne = 1;
let ppPlayerTwo = 1;
let vetoesPlayerOne = 2;
let vetoesPlayerTwo = 2;
let isNumberGenerated = false;
let remainingChakra = 0;
let opponentRemainingChakra = 0;
let playerOneTurn = true;
const selectedCardsPlayerOne = [];
const selectedCardsPlayerTwo = [];

const cardAttributes = {
    sai: {
        chakra: 0,
        health: 5,
        armor: 0,
        speed: 1,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    minato: {
        chakra: 0,
        health: 1,
        armor: 1,
        speed: 7,
        magicDamage: 0,
        meleeDamage: 1,
        rangeDamage: 0,
        prodigy: 1,
    },
    danzo: {
        chakra: 1,
        health: 1,
        armor: 4,
        speed: 1,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 2,
        prodigy: 0,
    },
    orochimaru: {
        chakra: 1,
        health: 2,
        armor: 0,
        speed: 3,
        magicDamage: 2,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    kimimaro: {
        chakra: 2,
        health: 1,
        armor: 1,
        speed: 6,
        magicDamage: 1,
        meleeDamage: 1,
        rangeDamage: 0,
        prodigy: 0,
    },
    sasori: {
        chakra: 2,
        health: 2,
        armor: 3,
        speed: 2,
        magicDamage: 1,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    nagato: {
        chakra: 2,
        health: 2,
        armor: 0,
        speed: 2,
        magicDamage: 4,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    hidan: {
        chakra: 3,
        health: 3,
        armor: 0,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
        prodigy: 0,
    },
    kabuto: {
        chakra: 3,
        health: 4,
        armor: 0,
        speed: 4,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    itachi: {
        chakra: 3,
        health: 3,
        armor: 4,
        speed: 7,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    zabuza: {
        chakra: 3,
        health: 3,
        armor: 0,
        speed: 3,
        magicDamage: 1,
        meleeDamage: 3,
        rangeDamage: 0,
        prodigy: 1,
    },
    deidara: {
        chakra: 4,
        health: 5,
        armor: 0,
        speed: 6,
        magicDamage: 1,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    neji: {
        chakra: 4,
        health: 4,
        armor: 0,
        speed: 7,
        magicDamage: 0,
        meleeDamage: 4,
        rangeDamage: 0,
        prodigy: 0,
    },
    rockLee: {
        chakra: 4,
        health: 4,
        armor: 0,
        speed: 8,
        magicDamage: 0,
        meleeDamage: 5,
        rangeDamage: 0,
        prodigy: 0,
    },
    a: {
        chakra: 4,
        health: 5,
        armor: 0,
        speed: 5,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    shikamaru: {
        chakra: 5,
        health: 5,
        armor: 0,
        speed: 4,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 4,
        prodigy: 0,
    },
    kisame: {
        chakra: 5,
        health: 3,
        armor: 6,
        speed: 5,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    sakura: {
        chakra: 5,
        health: 5,
        armor: 0,
        speed: 4,
        magicDamage: 0,
        meleeDamage: 3,
        rangeDamage: 0,
        prodigy: 0,
    },
    konan: {
        chakra: 5,
        health: 3,
        armor: 3,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
        prodigy: 1,
    },
    hinata: {
        chakra: 6,
        health: 7,
        armor: 0,
        speed: 7,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 3,
        prodigy: 0,
    },
    shisui: {
        chakra: 6,
        health: 3,
        armor: 5,
        speed: 6,
        magicDamage: 0,
        meleeDamage: 0,
        rangeDamage: 5,
        prodigy: 0,
    },
    gaara: {
        chakra: 6,
        health: 7,
        armor: 2,
        speed: 6,
        magicDamage: 3,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 1,
    },
    kakashi: {
        chakra: 7,
        health: 7,
        armor: 0,
        speed: 7,
        magicDamage: 4,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    madara: {
        chakra: 7,
        health: 4,
        armor: 4,
        speed: 4,
        magicDamage: 2,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    jiraiya: {
        chakra: 7,
        health: 7,
        armor: 3,
        speed: 5,
        magicDamage: 0,
        meleeDamage: 5,
        rangeDamage: 0,
        prodigy: 1,
    },
    kakuzu: {
        chakra: 8,
        health: 10,
        armor: 10,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 3,
        rangeDamage: 0,
        prodigy: 0,
    },
    mightGuy: {
        chakra: 8,
        health: 5,
        armor: 0,
        speed: 8,
        magicDamage: 0,
        meleeDamage: 8,
        rangeDamage: 0,
        prodigy: 0,
    },
    tsunade: {
        chakra: 8,
        health: 8,
        armor: 0,
        speed: 3,
        magicDamage: 0,
        meleeDamage: 4,
        rangeDamage: 0,
        prodigy: 0,
    },
    obito: {
        chakra: 8,
        health: 7,
        armor: 4,
        speed: 6,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 1,
    },
    naruto: {
        chakra: 9,
        health: 8,
        armor: 9,
        speed: 6,
        magicDamage: 0,
        meleeDamage: 6,
        rangeDamage: 0,
        prodigy: 0,
    },
    sasuke: {
        chakra: 9,
        health: 6,
        armor: 10,
        speed: 9,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 0,
    },
    killerB: {
        chakra: 9,
        health: 6,
        armor: 9,
        speed: 6,
        magicDamage: 5,
        meleeDamage: 0,
        rangeDamage: 0,
        prodigy: 1,
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
    if(playerOneTurn) {
        document.getElementById('number-display').textContent = `* Team 10's Chakra: ${remainingChakra}, Vetoes: ${vetoesPlayerOne}, Prodigy Picks: ${ppPlayerOne}`;
        document.getElementById('number-display-two').textContent = `Class 1-A's Chakra: ${opponentRemainingChakra}, Vetoes: ${vetoesPlayerTwo}, Prodigy Picks: ${ppPlayerTwo}`;
    }
    else {
        document.getElementById('number-display').textContent = `Team 10's Chakra: ${remainingChakra}, Vetoes: ${vetoesPlayerOne}, Prodigy Picks: ${ppPlayerOne}`;
        document.getElementById('number-display-two').textContent = `* Class 1-A's Chakra: ${opponentRemainingChakra}, Vetoes: ${vetoesPlayerTwo}, Prodigy Picks: ${ppPlayerTwo}`;
    }
}

function narutoLink() {
    window.location.href = 'subpages/narutoLink.html';
}
function heroLink() {
    window.location.href = 'subpages/heroLink.html';
}
function starLink() {
    window.location.href = 'subpages/starLink.html'
}
function dcLink() {
    window.location.href = 'subpages/dcLink.html'
}

function toggleClicked() {
    if(this.classList.contains('clicked')) {
        if(playerOneTurn == true && vetoesPlayerOne != 0) {
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
        else if(playerOneTurn == false && vetoesPlayerTwo != 0) {
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
        const prodigyAttribute = cardAttributes[cardName].prodigy;
        
        if(remainingChakra >= chakraCost) {
            if(prodigyAttribute == 1 && ppPlayerOne != 0) {
                ppPlayerOne--;
                this.classList.add('clicked');
                cardCountPlayerOne++;
                remainingChakra -= chakraCost;
                playerOneTurn = false;
                updateChakraDisplay();
                selectedCardsPlayerOne.push(cardName);
            }
            else if(prodigyAttribute == 0) {
                this.classList.add('clicked');
                cardCountPlayerOne++;
                remainingChakra -= chakraCost;
                playerOneTurn = false;
                updateChakraDisplay();
                selectedCardsPlayerOne.push(cardName);
            }
            else {
                alert("You've already made your prodigy pick.")
            }
        }
        else {
            alert("Not enough chakra to select this card.");
            playerOneTurn = false;
            updateChakraDisplay();
        }
    }

    else if(cardCountPlayerTwo < 8 && playerOneTurn == false)
    {
        cardName = this.src.split('/').pop().split('.')[0];
        chakraCost = cardAttributes[cardName].chakra;
        prodigyAttribute = cardAttributes[cardName].prodigy;

        if(opponentRemainingChakra >= chakraCost) {
            if(prodigyAttribute == 0) {
                this.classList.add('clicked');
                cardCountPlayerTwo++;
                opponentRemainingChakra -= chakraCost;
                playerOneTurn = true;
                updateChakraDisplay();
                selectedCardsPlayerTwo.push(cardName);
            }
            else if(prodigyAttribute == 1 && ppPlayerTwo != 0) {
                ppPlayerTwo--;
                this.classList.add('clicked');
                cardCountPlayerTwo++;
                opponentRemainingChakra -= chakraCost;
                playerOneTurn = true;
                updateChakraDisplay();
                selectedCardsPlayerTwo.push(cardName);
            }
            else {
                alert("You've already made your prodigy pick.")
            }
        }
        else {
            alert("Not enough chakra to select this card.");
            playerOneTurn = true;
            updateChakraDisplay();
        }
    }

    else
    {
        alert("The maximum deck size is 8 cards.")
    }
}