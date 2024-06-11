window.addEventListener("DOMContentLoaded", function() { // Makes sure scripts are only ran after the page is fully loaded.
    document.getElementById("Math").addEventListener("click", addition_Function); //attaching event listener to page element.
    document.getElementById("Math2").addEventListener("click", subtraction_Function);
    document.getElementById("Math3").addEventListener("click", multiplication_Function);
    document.getElementById("Math4").addEventListener("click", division_Function);
    document.getElementById("Math5").addEventListener("click", more_Function);
    document.getElementById("Math6").addEventListener("click", modulus_Function);
    document.getElementById("Math7").addEventListener("click", negation_Function);
    document.getElementById("Math8").addEventListener("click", increment_Function);
    document.getElementById("Math9").addEventListener("click", decrement_Function);
    document.getElementById("alertPopUp").addEventListener("click", decrement_Function);
});

window.alert(Math.round(Math.random() * 200)); //Window pop up that gives random number between 0 and 200 rounded to the nearest whole.

function addition_Function() { //defines encapsulated function as "addition_Function".
    var addition = 2 + 2; // defining the variable "addition" as the sum of 2 and 2.
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met.
    document.getElementById("Math").style.color = "blue"; //This leaves the original text color but changes the color when the event condition is met.
}

function subtraction_Function() { //defines encapsulated function
    var subtraction = 99 - 90;
    document.getElementById("Math2").innerHTML = "99 - 90 = " + subtraction; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math2").style.color = "red"; //This leaves the original text color but changes the color when the event condition is met.
}

function multiplication_Function() { //defines encapsulated function
    var multiply = 15 * 10;
    document.getElementById("Math3").innerHTML = "15 * 10 = " + multiply; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math3").style.color = "orange"; //This leaves the original text color but changes the color when the event condition is met.
}

function division_Function() { //defines encapsulated function
    var division = 150 / 10;
    document.getElementById("Math4").innerHTML = "150 / 10 = " + division; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math4").style.color = "purple"; //This leaves the original text color but changes the color when the event condition is met.
}

function more_Function() { //defines encapsulated function
    var more_Math = (150 + 10) * 20 / 10 - 5;
    document.getElementById("Math5").innerHTML = "(150 + 10) * 20 / 10 - 5 = " + more_Math; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math5").style.color = "violet"; //This leaves the original text color but changes the color when the event condition is met.
}

function modulus_Function() { //defines encapsulated function
    var modulus = 100 % 11;
    document.getElementById("Math6").innerHTML = "When you divide 100 by 11 you have a remainder of: " + modulus; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math6").style.color = "pink"; //This leaves the original text color but changes the color when the event condition is met.
}

function negation_Function() { //defines encapsulated function
    var negation = 99;
    document.getElementById("Math7").innerHTML = -negation; //inserts our text and variable in place of the ID's text when the event condition (clicking) is met. the variable is the result of the math operation.
    document.getElementById("Math7").style.color = "green"; //This leaves the original text color but changes the color when the event condition is met.
}

function increment_Function() { //defines encapsulated function
    var increment = 3; //defining Math 8 variable
    increment++; // ++ increases the variable by one increment (+1)
    document.getElementById("Math8").innerHTML = increment;
}

function decrement_Function() { //defines encapsulated function
    var decrement = 8; //defining Math9 variable
    decrement--; // -- decreases the variable by one increment (-1)
    document.getElementById("Math9").innerHTML = decrement;
}

function button_press() { //defines encapsulated function
    document.getElementById("alertPopUp").style.color = "red"; //Changes the original text to red after the alert box is closed.
    var alertPopUp = "KABOOM!" //defines the variable button as "BOOM!"
    window.alert(alertPopUp); //when the event condition (clicking) is met the new variable pops up in an alert box.
}
