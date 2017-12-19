var inquirer = require("inquirer");
var RandomWords = require("./word.js");

console.log("\nSo You Wanna Play Hangman Huh?!" + "\nWell, try to guess this motorcycle brand!");

var game_word = new RandomWords();
var blanksArray = [];
var guessedLettersArray = [];
var lettersArray = game_word.word.split("");


for (var i = 0; i < game_word.lettersLength; i++) {
  blanksArray.push("_");
}

// This makes the blank spaces in the game.
console.log("\nThe word is:" + "\n" + blanksArray.join(" ") + "\n");

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
      console.log("");
      console.log("====================================================================");
      console.log("\nYou've guessed " + (count + 1) + " of 10 tries.")

      for (var i = 0; i < lettersArray.length; i++) {
        if (user.letter === guessedLettersArray[i] || user.letter === blanksArray[i]) {
          console.log("\n#####" + "\n!!!!!You have already entered " + user.letter + " please choose another letter!!!!\n" + "#####\n")
        } else if (user.letter === lettersArray[i]) {
          blanksArray[i] = user.letter
          count++;
        }
      };

      if (lettersArray.indexOf(user.letter) === -1) {
        guessedLettersArray.push(user.letter);
      };

      console.log("Here are the incorrect letters you've guessed " + guessedLettersArray);

      if (blanksArray.join() === lettersArray.join()) {
        console.log("\n" + "\n************************************" + "\nYou win you guessed " + game_word.word + "!!!!" + "\n************************************" + "\n");
        return;
      }
      console.log(blanksArray.join(" "));
      console.log("\n====================================================================");
      console.log("");
      playGame();
    });

  } else {
    console.log("GAME OVER" + "\nNo more guesses left the word was " + game_word.word + "\n")
  }
};

// This starts the game
playGame();