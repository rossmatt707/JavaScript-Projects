document.write(Bigger = (99 > 98) ? "Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; //Gets height value from input
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Checks if the height entered is less than 52 inches. Has two paths depending on outcome.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Replaces with new text depending on previous outcome.
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value; //Gets ague value from use input
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //Checks to see if the age entered is less than 18. Has two paths depending on outcome.
    document.getElementById("VoteAge").innerHTML = Can_vote + " to vote."; //Replaces with new text depending on what previous outcome was.
}
// This is creating the new object of vehicle and assigning properties to it.
function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Creates new vehicle objects using the previously defined properties.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Max = new Vehicle("Bucket", "Metal", 1999, "Blue");

//This is using the using the Keywords_and_Constructors ID to pull a 
//specific object/properties from the list and replace the text with 
//said information. 
function myFunction1() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

//Same as the last one but a different object from the list.
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + 
    " manufactured in " + Jack.Vehicle_Year;
}

//This was previously trying to use "null" as the object to produce an error. Replaced it with a useable variable.
function myFunction3() {
    document.getElementById("This_will_not_work").innerHTML =
    "Max drives a " + Max.Vehicle_Color + "-colored " + Max.Vehicle_Model + 
    " manufactured in " + Max.Vehicle_Year;
}

function OuterAdding() { //Outer function.
    function InnerAdding() { //Nested function
        document.getElementById("AddingOne").innerHTML = "You Get Two!" //Text replacing text connected to matching ID
    }
    InnerAdding(); //Calling the nested function.
}
    
function countFunction () { //Defining the function
    var Starting_point = 10; //Creates and defines a variable
    var currentCount = setInterval(function MyCounter() { //Creates the variable currentCount and uses the setInterval function to execute the function MyCounter every 500 miliseconds.
        if (Starting_point == 0) { // When the Starting_point variable hits 0
            clearInterval(currentCount) // The function interval loop is stopped
            document.getElementById("Counting").innerHTML = "HAPPY NEW YEAR!" //After the loop is stopped the text is replaced with this new text.
            var Drop = document.getElementById("NewYears").src="Images/HNY.webp" //Creates a new varialbe and assigns an ID.
        }
        else {
            document.getElementById("Counting").innerHTML = Starting_point; //Updates the HTML with the current value the count is on.
            Starting_point--; //This is counting down one from the current value.

        }
    }, 500); //Sets an interval delay of 500 miliseconds.
}  

