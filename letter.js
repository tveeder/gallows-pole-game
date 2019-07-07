
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

// export this file as a module.  import with a require


module.exports = Letter;


















