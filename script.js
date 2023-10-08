function generateRandomNumber() {
    const min = 5;
    const max = 30;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('number-display').textContent = `Chakra: ${randomNumber}`;
}