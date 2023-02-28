const CHOICES = ['pedra', 'papel', 'tesoura'];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Você escolheu ${playerSelection} e o cumputador escolheu ${computerSelection}. Empate!`;
  } else if (
    (playerSelection === 'pedra' && computerSelection === 'tesoura') ||
    (playerSelection === 'papel' && computerSelection === 'pedra') ||
    (playerSelection === 'tesoura' && computerSelection === 'papel')
  ) {
    return `Você escolheu ${playerSelection} e o computador escolheu ${computerSelection}. Você ganhou!`;
  } else {
    return `Você escolheu ${playerSelection} e o computador escolheu ${computerSelection}. Você perdeu!`;
  }
}

const playerSelection = process.argv[2];

if (!CHOICES.includes(playerSelection)) {
  console.log('Escolha inválida!');
  process.exit(1);
}

const computerSelection = computerPlay();
const result = playRound(playerSelection, computerSelection);
console.log(result);