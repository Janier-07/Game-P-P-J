function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const opciones = ["piedra", "papel", "tijera"];
const buttons = document.querySelectorAll('.option');
const userChoiceText = document.getElementById('userChoice');
const computerChoiceText = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = opciones.indexOf(button.id);
        const computerChoice = aleatorio(0, 2);
        
        userChoiceText.textContent = opciones[userChoice];
        computerChoiceText.textContent = opciones[computerChoice];

        if (userChoice === computerChoice) {
            resultText.textContent = "Empate";
        } else if (
            (userChoice === 0 && computerChoice === 2) ||
            (userChoice === 1 && computerChoice === 0) ||
            (userChoice === 2 && computerChoice === 1)
        ) {
            resultText.textContent = "Ganaste";
        } else {
            resultText.textContent = "Perdiste";
        }
    });
});
