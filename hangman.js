var inquirer = require("inquirer");
var RandomWords = require("./word.js");

console.log("\nSo You Wanna Play Hangman Huh?!" + "\nWell, try to guess this motorcycle brand!");

var game_word = new RandomWords();

//game_word.word()
// console.log(game_word)
// console.log(game_word.word)
// console.log(game_word.lettersLength);

var blanksArray = [];
var guessedLettersArray = [];

for (var i = 0; i < game_word.lettersLength; i++) {
  blanksArray.push("_");

}

var lettersArray = game_word.word.split("");
// console.log(lettersArray);

console.log("\n" + blanksArray.join(" ") + "\n");

var count = 0;

var playGame = function () {

  if (count < 10) {

    inquirer.prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter???"
      }
    ]).then(function (user) {
      // console.log(lettersArray);
      
      console.log("");
      console.log("==============================================");
      console.log("You've guessed " + (count + 1) + " times.")
      
      for (var i = 0; i < lettersArray.length; i++) {
        if (user.letter === lettersArray[i]) {
          blanksArray[i] = user.letter
        }
      }

      if (lettersArray.indexOf(user.letter) === -1) {
        guessedLettersArray.push(user.letter);
      }

      console.log(guessedLettersArray);

      if (blanksArray.join() === lettersArray.join()) {
        console.log("You win");
        return;
      }
      console.log(blanksArray.join(" "));

      // console.log("");
      // console.log(user.letter);
      // console.log("");
      console.log("==============================================");
      console.log("");
      count++;

      playGame();
    });

  }
  else {
    console.log("GAME OVER" +"\nNo more guesses left the word was " + game_word.word+"\n")
  }

};

playGame();