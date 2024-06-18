
//This code is creating a function that counts down from 10 in 
//increments of 1 (X--) and stops when hitting -1.
function count_down() {
    var Digit = "";
    var X = 10;
    while (X > -1) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("counting_down").innerHTML = Digit;
}

var joker = "how many array indexes does it take to screw in a lightbulb?"
document.getElementById("punchline").innerHTML = joker.length; // gives us 
//number of characters used including spaces.

//This lists off all instruments in the list with line <br> so they're on 
//a separate line. Uses .length to track number of items in list.
var Instruments = ["Cello", "Violin", "Drums", "Piano", "Flute", "Trumpet", 
    "Voice", "Bass", "Tuna Fish"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //Our for loop
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}


//This is using an array function to draw certain characteristics from our 
//data set.
function array_Function() {
    var dog = [];
    dog[1] = "Pomeranian";
    dog[2] = "Mastiff";
    dog[3] = "Corgi";
    dog[4] = "Pug";
    dog[5] = "Beagle";
    dog[6] = "Siberian Husky";
    dog[7] = "Yorkshire Terrier";
    dog[8] = "Golden Retriever";
    document.getElementById("Doggy").innerHTML = "This breed of dog is the lovely "
    + dog[6] + ".";
}


//Defining a constant using a dictionary and altering/adding characteristics.
function constant_function() {
    const cat = {Breed:"Ragdoll", Color:"white", Cost:"big $$$$$", 
    Personality:"affectionate"};
    cat.Color = "Black";
    cat.Floof = "advanced floof"
    document.getElementById("Feline").innerHTML = "The cat breed is a " + cat.Breed +
    " and his personality is quite " + cat.Personality + ". You will find that his fur has quite "
    + cat.Floof + "." 
}


//Using let keyword to define B soley inside of the block.
var B = 15
console.log(B);
{
    let B = 105 //B is redefined only in this block.
    console.log(B);
}
console.log(B); //sends result to console.


//Using return inside of function to multiply two variables.
function returnFunction(a, b) {
    return a * b;
}
var Pants = returnFunction(100, 10);
console.log(Pants); //sends result to console.


let car = {
    make: "Honda ",
    model: "Civic ",
    year: "2010 ",
    color: "rusted ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
}; 
document.getElementById("Car_Object").innerHTML = car.description();

//Creating constant with list of properties. The use of break stops 
//our program from reading the properties from that point on. 
//The list is later pulled and displayed.
const vehicle = ["car", "Dodge", "Ram", "2022", "candy apple red"];
let text = ""
list: {
    text += vehicle[0] + "<br>";
    text += vehicle[1] + "<br>";
    break list; //break in list. when element is grabbed later it won't print anything past this point.
    text += vehicle[2] + "<br>";
    text += vehicle[3] + "<br>";
    text += vehicle[4] + "<br>";
}
document.getElementById("Vroom").innerHTML = text;


let number = "";
for (let t = 0; t < 26; t++) { //t just acts as a counter. it starts at 0 and goes up in increments of 1 (t++). t < 26  makes the loop stop at 25.
    if (t > 3 && t < 11) { //skips the ranges if they're between 3 to 11.
        continue; //this stop the current iteration of the loop and starts a new one.
    }
    number = number + t + "<br>"; //tracking the increase in value of our number
}
document.getElementById("Outcome").innerHTML = number; //prints our list of numbers in the p "outcome" ID element.

