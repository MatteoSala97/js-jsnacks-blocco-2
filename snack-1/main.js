let array = []

function sumCalc(array){
    let sum = 0
    for (i = 0; i < array.length; i++ ) {
        sum += array[i]
    }
    return sum
} 


do{
    let request = parseInt(prompt("Insert a number:"))
    array.push(request)
} while (sumCalc(array) < 50)

console.log("Your array is: ", array)
console.log("The sum of all the numbers in the array is: ", sumCalc(array))
