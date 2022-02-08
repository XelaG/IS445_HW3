var firstInt = prompt("First number")
var secondInt = prompt("Second number")
firstInt = parseInt(firstInt)
secondInt = parseInt(secondInt)
if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
    alert("Error! Input needs to be an integer")
}
console.log(`Addition: ${firstInt + secondInt}`);
console.log(`Substraction: ${firstInt - secondInt}`);
console.log(`Multiplication: ${firstInt * secondInt}`);
console.log(`Division: ${firstInt / secondInt}`);
console.log(`Modulo: ${firstInt % secondInt}`);