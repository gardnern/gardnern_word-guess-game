    var wordsArray = ["huskey","havanese","poodle","bulldog","labrador","dalmatian","beagle","dachshund","boxer","pomeranian","chow"];

    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
  
  let maxGuess = 10;
  var pauseGame = false;
  
  var guessedLetters = [];
  var guessingWord = [];
  var arrayMatch; 
  var numGuess;
  var wins = 0;
  
  var resetGame;
// can't get the functions working.
  document.onkeypress = function() {
    var x, text;
  
    x = document.getElementById("currentWord").value();
  
   
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("currentWord").innerHTML = text;
    var userText = document.getElementById("user-text");
    

    document.onkeyup = function(event) {
    userText.textContent = event.key;
    }
    elseif (alphabet(event.key.toLowerCase()));

    
    resetGame(); 
    numGuess = maxGuess;
    pauseGame = false;
    
    
    wordToMatch = wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase()
    console.log(wordToMatch)
    
    guessedLetters = []
    guessingWord = []
    
    
    for (var i=0; i = wordToMatch.length; i++){
    // the lines is not showing inside the form either
    if (wordToMatch[i] === " ") {
    guessingWord.push(" ")
    } else {
    guessingWord.push("_")
    }
    }
        updateDisplay()
}             
    function updateDisplay () {
    document.getElementById("totalWins").innerText = wins
    document.getElementById("currentWord").innerText = guessingWord.join("")
    document.getElementById("remainingGuesses").innerText = numGuess
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
    } 
   








