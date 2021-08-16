def guessCharacter():
    pass

def on_a_pressed():
    global letter
    letter = game.ask_for_string("Enter a character", 1)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def startGame():
    pass
def findLetterIndices(charGuess: str):
    pass
def guessWord():
    pass
def checkCharGuessed(charGuess2: str):
    pass
letter = ""
progress: List[str] = []
game.splash("Welcome to Word Guesser!",
    "Press A to guess a character, B to guess the word")
progress.append("_")