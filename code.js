// functions are a nice way to organize our code and make our code reusable
// use a descriptive function name - functions do something, so make it a verb/action
// () can hold function argument - if you need to pass in information to the function
function playCraps(){
    // log that the function was called
    console.log("playCraps() function was called");

    // roll die 1
    let roll1 = rollDice();

    // roll die 2
    let roll2 = rollDice();

    // calculate the rolls
    let sum = roll1 + roll2;

    // display roll 1 in the roll1 div
    document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;

    // display roll 2 in the roll2 div
    document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;

    // display sum in the sum div
    document.getElementById("divSum").textContent = "Sum: " + sum;
            
    // variable to hold the result
    let result = "";

    // see if the user lost - if they roll a sum of 7 or 11
    // || - means or
    // && = means and
    if (sum == 7 || sum == 11){
        result = "Sorry, you lost!";
    }
    // check if we rolled an even number
    // modulus - do a division problem and we get the remained as the result
    // 2/2 = 1 with no remainder = even number;
    // 4/2 = 2 with no remained = even number;
    // 5/2 = 2 with a remainder of 1 = odd number
    // roll1 % 2 == 0 - this number is even
    else if( roll1 % 2 == 0 && roll1 == roll2 ){
        result = "Congrats, you won!";
    }
    // the catch-all else statement if neither of the above statements evaluate to true, this else statement will run
    else {
        result = "You tied (you pushed)";
    }

    // show the result in the result div
    document.getElementById("divResult").textContent = "Result: " + result;

}

// create a function to generate a random number
function rollDice(){
    // create a variable to hold a random number
    // Math.random() is a build in JavaScript function which generates a random number
    let die = Math.random() * 6.0; // I want to replicate a 6 sided die

    // round the number and return the value

    return Math.ceil(die);
}

function validateForm(){
    let fullName = "";

    // get the value the user entered in for their first name
    // we will remove any spaces at the beginning or end with trim()
    let firstName = document.getElementById("txtFirstName").value.trim();
    // get the user's last name
    let lastName = document.getElementById("txtLastName").value.trim();
    // get the user's zip code
    let zipCode = document.getElementById("txtZipCode").value.trim();


    console.log("firstName=" + firstName);
    console.log("lastName=" + lastName);
    console.log("zipCode=" + zipCode);

    // validation - we need to make sure that the first name + " " + last name is less than 20 characters
    // zip code needs to be exactly 5 digits

    // variable to store the message that we will display to the user
    let message = "";

    // concatenate (add) first name + " " + last name
    fullName = firstName + " " + lastName;

    console.log("fullName=" + fullName);

    // werify the number of characters in the full name variable
    if (fullName.length > 26 || fullName.length == 1){
        // an invalid name has been entered
        message = "Invalid name, please try again"
        console.log("Invalid name");
    }
    else if (zipCode.length != 5){
        message = "Invalid zip code, please try again";
        console.log("Invalid zip code");
    }
    else{
         message = "Welcome," + firstName + ". The Secret word is validation.";
    }
    
    // display message to the user on the div in the HTML section
    document.getElementById("divMessage").textContent = message;
}