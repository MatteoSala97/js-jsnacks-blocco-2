let userNumber = prompt("Insert a number:")

//converts everything into usable numbers
userNumber = parseInt(userNumber)

//if even prints, if odd adds a 1
if (userNumber % 2 === 0){
    console.log("The number you inserted is even. This is the one the console prints:" +  userNumber)
} else{
    let consoleNumber = userNumber + 1
    console.log("The number you inserted is odd. This is the one the console prints:" + consoleNumber)
} 