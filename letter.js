
function Letter(character) {
    this.character = "_";
    this.isGuessed = false;
    this.guessedLetter = "";
    this.guess = function () {

        if (this.isGuessed) return this.character = character;
        this.character = "_";
    }

    this.checkCharacter = function () {
        if (character === this.guessedLetter) return this.isGuessed = true;
    }
}

module.exports = Letter;



























// // blackhawks hangman game
// // this is the constructor for the choosen letter

// function Letter(character) {

//     //initially sets the value to blank
//     this.character = "_";


//     // boolean to indicate whether the letter has been guessed already
//     this.anAttempt = false;

//     //empty until you start making guesses
//     this.aGuess = "";


//     this.guess = function () {

//         if (this.anAttempt)
//             return this.character = character;
//         this.character = "_";   //if the boolean is false then you just get a blank
//     }

//     this.checkCharacter = function () {
//         if (character === this.aGuess)
//             return this.anAttempt = true;  //change the boolean
//     }
// }

// module.exports = Letter;