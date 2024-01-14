let arrayFirst = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8", "Element 9", "Element 10"]  //10elements

let arraySecond = ["Element Alpha", "Element Beta", "Element Gamma", "Element Delta", "Element Epsilon", "Element Zeta", "Element Eta", "Element Theta", "Element Iota", "Element Kappa", "Element Lambda", "Element Mu"] //12elements

// console.log("Array First:", arrayFirst)
// console.log("Array Second:", arraySecond)

while (arrayFirst.length < arraySecond.length){

    //push a random element of array second into array first
    let randomElement = Math.floor(Math.random() * arraySecond.length)
    console.log(randomElement)

    arrayFirst.push(arraySecond[randomElement])
    
    console.log("Array First:", arrayFirst)
    console.log("Array Second:", arraySecond)

} 