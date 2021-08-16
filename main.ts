function guessCharacter () {
    letter = game.askForString("Enter a character", 1)
    if (checkCharGuessed(letter)) {
        game.splash("You've already guessed " + letter + ". Try another letter.")
        return
    }
    // if the whole word is guessed, then the user wins (Change this paragraph)
    if (secretWord.includes(letter)) {
        game.splash("" + letter + " is in the word")
        // array of indices where letter is in secret string
        found = findLetterIndices(letter)
        for (let x of found) {
            progress[x] = letter
        }
        output = ""
        for (let l of progress) {
            output = "" + output + l + " "
        }
        game.splash(output)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    guessCharacter()
})
function startGame () {
    for (let index = 0; index < numLetters; index++) {
        progress.push("_")
    }
    updateProgressMessage()
}
function findLetterIndices (charGuess: string) {
    let indicies: number[] = []
    for (let i = 0; i <= numLetters - 1; i++) {
        if (secretWord[i] == charGuess) {
            indicies.push(i)
        }
    }
    return indicies
}
function updateProgressMessage () {
    let progressMessage = 0
    game.splash(progressMessage)
}
function guessWord () {
    return true
}
function checkCharGuessed (charGuess: string) {
    return false
}
function gameWon () {
    if (numGuesses > 0) {
        game.over(true)
    }
    gameWon()
    game.splash("You have won!")
}
let output = ""
let letter = ""
let found: number[] = []
let progress: string[] = []
let numLetters = 0
let secretWord = ""
let numGuesses = 0
let guessedLetters = ""
game.splash("Welcome to Word Guesser!", "Press A to guess a character, B to guess the word")
numGuesses = 5
secretWord = "again"
numLetters = secretWord.length
progress.push("_")
if (true) {
    progress = [
    "_",
    "_",
    "_",
    "_",
    "_"
    ]
    found = [0, 2]
    letter = "a"
}
