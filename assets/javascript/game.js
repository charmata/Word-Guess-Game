var gameData = {
  hints: ["Interesting hint"],
  words: ["madonna"],
  currentIndex: 0,
  currentState: [],
  currentHtml: "",
  guessesLeft: 10,
  lettersGuessed: [],
  wins: 0
};

function newGame() {
  gameData.currentIndex = Math.floor(Math.random() * gameData.words.length);
  document.getElementById("hint").textContent =
    gameData.hints[gameData.currentIndex];
  newWord();
}

function newWord() {
  var word = gameData.words[gameData.currentIndex];
  for (var i = 0; i < word.length; i++) {
    gameData.currentState.push("_");
  }
  document.getElementById("word").textContent = gameData.currentState;
}

/*function uniqueLetters(word) {
  var letters = [];
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < letters.length; j++) {
      if (word.charAt(i) !== letters[j]) {
        letters.push(word.charAt(i));
      }
    }
  }
  console.log(letters);
  gameData.uniqueLetters = letters;
}*/

function checkWord(guess) {
  var word = gameData.words[gameData.currentIndex];
  var wordState = gameData.wordState;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i)) {
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("wins").textContent = gameData.wins;
  document.getElementById("guesses-remain").textContent = gameData.guessesLeft;
  newGame();

  document.onkeyup = function(e) {
    if (gameData.guessesLeft !== 0) {
      var userGuess = e.key;
      checkWord(userGuess);
      gameData.lettersGuessed.push(userGuess);

      gameData.guessesLeft--;
      document.getElementById("guesses-remain").textContent =
        gameData.guessesLeft;
    }
  };
});
