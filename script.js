let count = 0;
let isNumberGenerated = false;

function generateRandomNumber() {
    if(isNumberGenerated == false) {
        count = 0;
        const min = 5;
        const max = 30;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('number-display').textContent = `Chakra Left: ${randomNumber}`;
        selectedCardCount = randomNumber;

        const button = document.getElementById('generate-button');
        button.parentNode.removeChild(button);

        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            image.classList.remove('clicked'); //Resets Cards if a new number is generated
            image.addEventListener('click', toggleClicked); 
        });
        isNumberGenerated = true;
    }
}

function startGame() {
    const images = document.querySelectorAll('.image');
    
    if(count == 0) {
        alert("No cards have been selected.")
    }
    else {
        images.forEach(image => {
            image.removeEventListener('click', toggleClicked);
        });
    }
}

function toggleClicked() {
    if(this.classList.contains('clicked'))
    {
        this.classList.remove('clicked');
        count--;
    }
    else if(count < 8)
    {
        this.classList.add('clicked');
        count++;
    }
    else
    {
        alert("The maximum deck size is 8 cards.")
    }
}