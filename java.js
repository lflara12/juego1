const choices = ["piedra", "papel", "tijeras"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Empate";
    } else if (
        (userChoice === "piedra" && computerChoice === "tijeras") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijeras" && computerChoice === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computer = computerChoice();
        const result = determineWinner(userChoice, computer);

        document.getElementById("result").textContent = `Elegiste ${userChoice}, la computadora eligió ${computer}. Resultado: ${result}.`;
    });
});

