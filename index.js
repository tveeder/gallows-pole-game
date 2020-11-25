//  modules which are used.  inquirer is a node module.  ./word.js is an exported file

var Word = require("./word.js");
var inquirer = require("inquirer");


// these are the global variables which you will use

var newWord;
var count = 10;
var correct = 0;


// --------------------------------------------------------------
// var app is an object containing players, startgame, startover, randomword, and the inquierer
// --------------------------------------------------------------

var app = {

    players: ["Esposito", "Savard", "Secord", "Makita", "Coulter", "Wilson", "Kane", "Teows", "Hull", "Chelios", "Roenick", "Magnuson", "Larmer"],

    startgame: function() {
        console.log("\nBlackhawks Hangman");
        console.log("\nGuess the last name of the famous Blackhawks player");
    },
    startOver: function() { // this will reset the game
        correct = 0;
        count = 10;
        app.randomWord();
    },
    randomWord: function(err) {
        var randomPick = app.players[Math.floor(Math.random() * app.players.length)]; //randomly selecting a word
        newWord = new Word(randomPick); //creating a new Word object

        newWord.createArray(); //make an array with the letters of the word
        newWord.toString(); //make the array a string
    },
    inquirer: function() {
        if (count > 0) { //as long as there are more then 0 ramaining guesses..
            inquirer.prompt([{
                name: "guessedLetter",
                message: "Guess a letter!"
            }]).then(function(answers) {
                var currentCorrect = 0;
                newWord.guessedLetter = answers.guessedLetter;
                newWord.trueORfalse(); // this was imported from the word.js file
                newWord.toString();

                for (var n = 0; n < newWord.array.length; n++) {
                    //looping through all the letters to check if a count of guessed letters (true statements) went up
                    if (newWord.array[n].isGuessed === true) {
                        currentCorrect++;
                    }
                }

                if (currentCorrect > correct) {
                    console.log("goal!!!");
                    correct = currentCorrect;
                } else {
                    count--;
                    console.log("shot missed.  you only have " + count + " shots left"); //log "incorrect"
                }

                if (currentCorrect === newWord.string.length) {
                    console.log("you win!!!");
                    app.startOver();
                }

                app.inquirer();
            })
        } else {
            console.log("\nsorry.  you lose.  there's always next year.");
        }
    }
}
app.startgame();
app.randomWord();
app.inquirer();