var password = prompt('Enter the password:')
var tries = 1;
while (password != "secret" && tries < 3) {
    password = prompt('Enter the password:')
    tries += 1
}
if (password == "secret") {
    console.log(`You entered the correct password after ${tries} attempt(s)`);    
} else {
    console.log(`Your account is locked!  You failed to enter the correct password ${tries} times`);
}