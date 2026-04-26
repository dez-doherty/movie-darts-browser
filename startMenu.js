let playerCount = 0;

function createPlayerInput() {
  const playerInput = document.createElement("input");
  playerInput.type = "text";
  return playerInput;
}

function addPlayer() {
  playerCount++;
  playerInput = createPlayerInput();
  playerInput.name = `player-${playerCount}`;
    playerInput.placeholder = `Player ${playerCount}`;
    playerInput.value = `Player ${playerCount}`;
  players.appendChild(playerInput);
}

function removePlayer() {
  if (playerCount > 1) {
    const inputs = players.querySelectorAll("input");
    inputs[inputs.length - 1].remove();
    playerCount--;
  }
}

function startGame() {
  const playerNames = [];
  const inputs = players.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      playerNames.push(input.value.trim());
    }
  });

  if (playerNames.length === 0) {
    console.log("Error: Please enter at least one player name");
    return;
  }

  console.log("Starting game with players:", playerNames);
}

addPlayer();
