//generating a random number 1-100
const secretNumber = Math.floor(Math.random() * 100) + 1
console.log(secretNumber)

//
let numberInserted = 0

do{
    numberInserted = parseInt(prompt("Guess the number from 1 to 100:"))

    //checks if the answer is correct
    if(numberInserted === secretNumber){
        console.log("Congratulations! You guessed the correct number.")
    } else if (numberInserted < secretNumber) {
         console.log("Your number is too low, try again.")
    } else {
        console.log("Your number is too high, try again.")
    }

} while (numberInserted !== secretNumber)