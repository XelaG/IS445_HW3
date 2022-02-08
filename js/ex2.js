var day = prompt("Enter a day of the week in this format mon - tue - wed - thu - fri - sat - sun")
switch (day) {
    case "mon":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Tuesday");
        break;
    case "tue":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Wednesday");
        break;
    case "wed":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Thursday");
        break;
    case "thu":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Friday");
        break;
    case "fri":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Saturday");
        break;
    case "sat":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Sunday");
        break;
    case "sun":
        console.log(`You entered: ${day}`);
        console.log("The following day is: Monday");
        break;
    default:
        alert("Day formatting not respected. Refresh the page to try again")
        break;
}