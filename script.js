
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

function handleGuess() {
    const userGuess = guessInput.value.trim();
    const parsedGuess = parseInt(userGuess);

    if (userGuess === '') {
        feedback.textContent = 'Please enter a number.';
        feedback.style.color = 'red';
    } else if (isNaN(parsedGuess)) {
        feedback.textContent = 'That\'s not a valid number. Please enter a number between 1 and 100.';
        feedback.style.color = 'red';
    } else if (parsedGuess < 1 || parsedGuess > 100) {
        feedback.textContent = 'Your guess is out of range. Please enter a number between 1 and 100.';
        feedback.style.color = 'red';
    } else {
        attempts++;
        if (parsedGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
            feedback.style.color = 'green';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
            submitBtn.disabled = true;
            restartBtn.style.display = 'block';
        } else if (parsedGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'orange';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        } else {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'orange';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        }
    }

    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    attemptsDisplay.textContent = '';
    guessInput.value = '';
    submitBtn.disabled = false;
    restartBtn.style.display = 'none';
    guessInput.focus();
}

submitBtn.addEventListener('click', handleGuess);
restartBtn.addEventListener('click', restartGame);
