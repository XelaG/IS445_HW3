var name = prompt("What's your name ?")
var units = prompt("How many units have you completed in college ?")
units = parseInt(units)
if (!Number.isInteger(units) || units < 0) {
    alert("Error! Number of units needs to be an integer superior to 1")
} else {
    console.log(`Hello ${name}`);
    if (units <= 30) {
        console.log(`Your grade standing is Freshman`);
    } else if (units <= 60) {
        console.log(`Your grade standing is Sophomore`);
    } else if (units <= 90) {
        console.log(`Your grade standing is Junior`);
    } else {
        console.log(`Your grade standing is Senior`);
    }
}