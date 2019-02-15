var gameData = {
  hints: ["Interesting hint"],
  words: ["madonna"],
  current: 0,
  guessesLeft: 10,
  lettersGuessed: "",
  wins: 0
};

function newGame() {
  gameData.current = Math.floor(Math.random() * gameData.words.length);
  document.getElementById("hint").textContent =
    gameData.hints[gameData.current];
  //document.getElementById("word").textContent = gameData.words[gameData.current];
}

document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("wins").textContent = gameData.wins;
  document.getElementById("guesses-remain").textContent = gameData.guessesLeft;
  newGame();

  document.onkeyup = function(event) {
    var userGuess = event.key;
  };
});
