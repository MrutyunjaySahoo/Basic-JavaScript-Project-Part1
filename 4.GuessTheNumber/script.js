let randomNumber= parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuesses = [] // Array to store previous guesses
let guessCount = 1 // Number of guesses(Starting from 1)
let playGame = true // Variable to check if the game is still on

if(playGame)
{
    // Event listener for the submit button
    submit.addEventListener("click", function(e)
    {
        e.preventDefault() // Prevent form submission
        const guess = parseInt(userInput.value) 
        validateGuess(guess) // Validate the guess
    })
}

// Function to check the user's guess
function validateGuess(guess)
{
    if(isNaN(guess) || guess < 1 || guess > 100)
    {
        alert("Please enter a number between 1 and 100")
    }
    else
    {
        prevGuesses.push(guess) // Add the guess to the array
        if(guessCount === 11)
        {
            displayGuess(guess)
            displayMessage("!!!Game Over!!!")
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess) // Check if the guess is correct
            // displayMessage("You have " + (10 - guessCount) + " guesses left")
            // guessCount++
        }
    }      
}

// Function to check if the guess is correct
function checkGuess(guess)
{
    if(guess === randomNumber)
    {
        displayMessage("!!!Congratulations!!!")
        endGame()
    }
    else if(guess < randomNumber)
    {
        displayMessage("Number is TOOO low")
    }
    else
    {
        displayMessage("Number is TOOO high")
    }
}

// Function to display the result of the guess
function displayGuess(guess)
{
    userInput.value = "" // Clear the input field
    guessSlot.innerHTML += `${guess}, ` // Add the guess to the guesses
    guessCount++ // Increment the guess count
    remaining.innerHTML = `${11 - guessCount}` // Display the remaining guesses
}

// Function to display the message related to the guess
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>` // Display the message
}

function endGame()
{
    userInput.value = "" // Clear the input field
    userInput.setAttribute("disabled", true) // Disable the input field
    p.classList.add("button") // Add a class to the paragraph
    p.innerHTML = `<button class="button" id="newGame">Start New Game</button>` // Create a new game button
    startOver.appendChild(p) // Append the button to the result paragraph
    playGame = false // Set the game to false
    newGame() // Call the new game function
}

function newGame()
{
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function()
    {
        randomNumber = parseInt(Math.random() * 100 + 1) // Generate a new random number
        prevGuesses = [] // Reset the previous guesses
        guessCount = 1 // Reset the guess count
        playGame = true // Set the game to true
        guessSlot.innerHTML = "" // Clear the guesses
        remaining.innerHTML = `${11 - guessCount}` // Clear the remaining guesses
        lowOrHi.innerHTML = "" // Clear the message
        startOver.removeChild(p) // Remove the new game button
        userInput.removeAttribute("disabled") // Enable the input field
        userInput.value = "" // Clear the input field
        playGame = true // Set the game to true
    })
}


//https://stackblitz.com/edit/dom-project-chaiaurcode?file=5-keyboard%2Findex.html