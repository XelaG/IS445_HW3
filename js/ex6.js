var hours = prompt("Hours")
hours = parseInt(hours)

var minutes = prompt("Minutes")
minutes = parseInt(minutes)

var seconds = prompt("Seconds")
seconds = parseInt(seconds)
if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
    alert("Error! Minutes needs to be an integer superior to 0 and inferior to 59")
} else if (!Number.isInteger(hours) || hours < 0 || hours > 23) {
    alert("Error! Hours needs to be an integer superior to 0 and inferior to 24")
} else if (!Number.isInteger(seconds) || seconds < 0 || seconds > 59) {
    alert("Error! Seconds needs to be an integer superior to 0 and inferior to 59")
} else {
    var dateInSeconds = (hours * 60 * 60) + (minutes * 60) + seconds
    var formattedDatePlusOne = new Date((dateInSeconds + 1) * 1000).toISOString().substr(11, 8);
    formattedDatePlusOne = formattedDatePlusOne.split(':');
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    console.log(`One second later: ${formattedDatePlusOne[0]}h${formattedDatePlusOne[1]}m${formattedDatePlusOne[2]}s`);
}
