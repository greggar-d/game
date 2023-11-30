document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const submitButton = document.getElementById('submitGuess');
    const resultDisplay = document.getElementById('result');

    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(document.getElementById('guess').value, 10);
        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'Congratulations! You guessed it right!';
        } else if (userGuess < randomNumber) {
            resultDisplay.textContent = 'Too low. Try again!';
        } else {
            resultDisplay.textContent = 'Too high. Try again!';
        }
    });
});