var Word = require("./word.js");
var inquirer = require("inquirer");


var newWord;
var count = 10;
var correct = 0;

var app = {
    players: ["Esposito", "Savard", "Secord", "Makita", "Coulter", "Wilson", "Kane", "Teows", "Hull", "Chelios", "Roenick", "Magnuson", "Larmer"],

    welcome: function () {
        console.log("\nBlackhawks Hangman");
        console.log("\nGuess the last name of the famous Blackhawks player");
    },
    startOver: function () {
        correct = 0;
        count = 10;
        app.randomWord();
    },
    randomWord: function (err) {
        var randomPick = app.players[Math.floor(Math.random() * app.players.length)];//randomly selecting a word
        newWord = new Word(randomPick);//creating a new Word object

        newWord.createArray();//creating an array of new Letter objects based on new word
        newWord.toString();//turning array of characters into a string
    },
    inquirer: function () {
        if (count > 0) { //as long as there are more then 0 ramaining guesses..
            inquirer.prompt([
                {
                    name: "guessedLetter",
                    message: "Guess a letter!"
                }
            ]).then(function (answers) {
                var currentCorrect = 0;
                newWord.guessedLetter = answers.guessedLetter;
                newWord.trueORfalse();
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
app.welcome();
app.randomWord();
app.inquirer();





// var Word = require("./word.js");
// var inquirer = require("inquirer");


// var newWord;
// var count = 10;
// var correct = 0;


// //////////////////////////////////////////////////////////////////////
// var app = {

//     players: ["Esposito", "Savard", "Secord", "Makita", "Coulter", "Wilson", "Kane", "Teows", "Hull", "Chelios", "Roenick", "Magnuson", "Larmer"],

//     messageNewbie: function () {
//         console.log("\nBlackhawks Hangman");
//         console.log("\nGuess the last name of the famous Blackhawks player");
//     },

//     startOver: function () {

//         // reset to zero correct
//         correct = 0;

//         // reset the count to 10 tries
//         count = 10;

//         app.randomWord();
//     },
//     randomWord: function (err) {
//         var randomPick = app.players[Math.floor(Math.random() * app.players.length)];//randomly selecting a word
//         newWord = new Word(randomPick);//creating a new Word object
//         newWord.createArray();//creating an array of new Letter objects based on new word
//         newWord.toString();//turning array of characters into a string
//     },
//     inquirer: function () {
//         if (count > 0) { //as long as there are more then 0 ramaining guesses..
//             inquirer.prompt([
//                 {
//                     name: "guessedLetter",
//                     message: "Guess a letter!"
//                 }
//             ]).then(function (answers) {
//                 var currentCorrect = 0;
//                 newWord.guessedLetter = answers.guessedLetter;
//                 newWord.trueORfalse();
//                 newWord.toString();

//                 for (var n = 0; n < newWord.array.length; n++) {
//                     //looping through all the letters to check if a count of guessed letters (true statements) went up
//                     if (newWord.array[n].isGuessed === true) {
//                         currentCorrect++;
//                     }
//                 }

//                 if (currentCorrect > correct) { //if it did go up
//                     console.log("goal!!!!!");
//                     correct = currentCorrect; //set these varibale to equal
//                 } else { //if stayed the same
//                     count--;
//                     console.log("shot missed.  you only have " + count + " shots left");
//                 }

//                 if (currentCorrect === newWord.string.length) { //if amount of guessed letters is the same as word length 
//                     console.log("you win!!!!");
//                     app.startOver();
//                 }

//                 app.inquirer();
//             })
//         } else {
//             console.log("\nsorry.  you lose.  there's always next year.");
//         }
//     }
// }
// app.messageNewbie();

// app.randomWord();

// app.inquirer();