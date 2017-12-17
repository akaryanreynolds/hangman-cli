var inquirer = require ("inquirer")


console.log("So You Wanna Play Hangman Huh?!");
console.log("Well, try to guess this motorcycle brand!");

inquirer.prompt([

    {
      type: "input",
      name: "letter",
      message: "Guess a letter???"
    },
  
  ]).then(function(user) {
    console.log("==============================================");
    console.log("");
    console.log(user.letter);
    console.log("");
    console.log("==============================================");
  });