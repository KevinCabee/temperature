// Exercise 1: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".

function guessNumber() {
    //generate a randome number
    let randomNumber = (Math.floor(Math.random() * 10) + 1);

    //get the number from the user
    let userGuess = prompt("Guess the number bewtween 1 and 10!");
    let results = document.getElementById("results");

    //check if the guess number is correct

    //if number is correct
    if (userGuess == randomNumber) {
        results.innerHTML = ("Congratulations! You guessed the number.")
    }
    //if the number is not correct
    else {
        results.innerHTML = ("Sorry, that's not correct. The number was " + randomNumber)
    }
}


// Excersise 2: Drivers Licesnes

// Challenge: Driving License

// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."



function getDriverLicense() {

    let age = prompt("Enter your age");

    if (age >= 18) {
        console.log("Congratulations! You can get your driving license.");
    } else {
        console.log("Sorry, you are too young to get a driving license. :'(");
    }
}


//Challengre: lopgin
//0. Store in a variable the next username = "student@sdgku.edu"
//1. Prompt the userto enter username.
//2. if the username is correct, print "Welcome to the system!: "
//3. If the password is inconrrect, print "Invalid credentials"



function login() {
    let userNameDB = "student@sdgku.edu";
    let userPassDB = "Test1234";

    let userName = prompt("Enter username");
    let userPass = prompt("Enter password");

    if (userName == userNameDB && userPassDSB) {
        console.log("Welcome to the system!: ");
    } else {
        console.log("Invalid credentials");

    }

}


//Assignment 3

function convertTemperature() {

let temperature = Number(prompt("Enter temperature"));
let scale = (prompt("Enter C for Celcius or F for Fahrenheit"));
let scaleC ="C" && "c";
let scaleF ="F" && "f";
let Fahrenheit = (temperature * 9/5 + 32);
let Celcius = ((temperature - 32) * 5/9);
let result = document.getElementById("result");


if(scale==scaleC){
    result.innerHTML = `<p> The conversion of (${temperature}°C)Celcius to Fahrenheit is (${Fahrenheit}°F ) </p>`;
}else if(scale==scaleF){
    result.innerHTML = `<p> The conversion of (${Fahrenheit}°F ) Fahrenheit  to Celcius is(${temperature}°C)</p>`;
}
}



