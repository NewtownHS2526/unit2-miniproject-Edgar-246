// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

const RadioInput = document.querySelector("#fav_color");
const RadioOutput = document.querySelector("#radio-output");

RadioInput.addEventListener('change', checkColor);

function checkColor(e) {
    const inputValue = e.target.value; 

if (inputValue === 'blue') {
    RadioOutput.textContent = 'You picked blue 💙!';
} else if (inputValue === 'green') {
    RadioOutput.textContent = 'You picked green 💚!';
} else if (inputValue === 'pink') {
    RadioOutput.textContent = 'You picked pink 💕!';
} else if (inputValue === 'black') {
    RadioOutput.textContent = 'You picked black 🖤!';
}

};


const NumInput = document.querySelector("#num-input");
const NumOutput = document.querySelector("#num-output");

NumInput.addEventListener('change', checkNum);

function checkNum(e) {
    const inputValue = e.target.value;
// Note: Answer is 70
    if (inputValue < 70) {
NumOutput.textContent = 'Your answer is too low!';
    } else if (inputValue > 70) {
        NumOutput.textContent = 'Your answer is too high!';
    } else if (inputValue == 70) {
        NumOutput.textContent = 'This is the correct Answer!';
    }
};


const TextInput = document.querySelector("#text-input");
const TextOutput = document.querySelector("#sr-continent-alert");


TextInput.addEventListener('change', checkText);

function checkText(e) {
    const inputValue = e.target.value;

    if (inputValue === 'North America') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'Europe') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'Asia') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'South America') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'Africa') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'Australia') {
        TextOutput.textContent = 'Correct!';
    } else if (inputValue === 'Antarctica') {
        TextOutput.textContent === 'Correct!';
    } 
};

// Incomplete
const colorButton = document.querySelector('#submit');
const colorBackground = document.querySelector('#color');

