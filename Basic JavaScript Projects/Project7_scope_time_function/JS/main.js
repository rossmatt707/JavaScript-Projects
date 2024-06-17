
//Function using global variable. Since it's outside of the 
//function it applies to both functions.
var A = 5;
function Subtract1() {
    document.write(20 - A + "<br>");
    console.log(20 - A + "<br>");
}

function Subtract2() {
    document.write(15 - A + "<br>");
    console.log(15 - A + "<br>");
}
Subtract1();
Subtract2();


//the variable is local.  Since the variable is inside of the first 
//function it's undefined for the second function.
function Subtract3() {
    var B = 10;
    document.write(20 - B + "<br>");
    console.log(20 - B + "<br>");
}

function Subtract4() {
    document.write(15 - B + "<br>");
    console.log(15 - B + "<br>");
}
Subtract3();
Subtract4();

//First if statement
function get_Date() {
    if (new Date().getHours() < 17) { //Grabs the current hour in "military time" and checks to see if it's less than 18.
    document.getElementById("Greeting").innerHTML = "I suppose its 5:00 somewhere."; //If the condition is met this text replaces the tagged ID.
    }
}


//Second if statement
function AgeCheck() { //defines function
    var Age = document.getElementById("AgeInput").value; //Grabs user input and turns it into Age variable.
    if (Age >= 21) { //Checks if age entered is greater than or equal to 21.
        document.getElementById("DrinkingAge").innerHTML = "Alright you can buy beer."; //Inserts this text in assigned ID if old  enough.
    } 
    else {
        document.getElementById("DrinkingAge").innerHTML = "Too young. Get out of here before I call the cops."; //Inserts this text in assigned ID if not old  enough.
    }
}

//Else if statements
function Time_function () { //Creating function
    var Time = new Date().getHours(); //creates new variable that is assigned current time in hours.
    var Reply;
    if(Time < 12 == Time > 0) { //Parameters for morning value
        Reply = "It is morning time!"; //Morning text reply
    }
    else if (Time >= 12 == Time < 18) { //Parameters for afternoon value
        Reply = "It is afternoon." //Afternoon text reply
    }
    else { //Parameters for evening value
        Reply = "It is evening time."; //Evening text reply
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //This is sending the text to the element when the parameters have been met.
}