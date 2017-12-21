var inquirer = require("inquirer");
var RandomWords = require("./word.js");

var game_word = new RandomWords();

var correctFlag = false;
var incorrectFlag = false;
var blanksArray = [];
var guessedLettersArray = [];
var lettersArray = game_word.word.split("");

// Welcome message
console.log("\nSo You Wanna Play Hangman Huh?!" + "\nWell, try to guess this motorcycle brand!");

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

      if (lettersArray.indexOf(user.letter) === -1) {
        guessedLettersArray.push(user.letter);
      };

      // for (var i = 0; i < lettersArray.length; i++) {
      //   if (user.letter === lettersArray[i]) {
      //     blanksArray[i] = user.letter
      //   }
      // };

      for (var i = 0; i < guessedLettersArray.length; i++) {
        if ((guessedLettersArray.length > 1) && (incorrectFlag === false)) {
          // console.log(guessedLettersArray.length)
          if (user.letter === guessedLettersArray[i]) {
            // console.log("debugging")
            incorrectFlag = true;
            console.log("\n#####" + "\n!!!!!You have already entered " + user.letter + " please choose another letter!!!!\n" + "#####\n")
          }
        }
      }
      incorrectFlag = false;

      for (var i = 0; i < blanksArray.length; i++) {

        if ((blanksArray.length > 1) && (correctFlag === false)) {
          // console.log(blanksArray.length)
          if (user.letter === blanksArray[i]) {
            // console.log("debugging")
            correctFlag = true;
            console.log("\n#####" + "\n!!!!!You have already entered " + user.letter + " please choose another letter!!!!\n" + "#####\n")
          }
        }
      }
      correctFlag = false;

      for (var i = 0; i < lettersArray.length; i++) {
        if (user.letter === lettersArray[i]) {
          blanksArray[i] = user.letter
        }
      };
      count++;

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