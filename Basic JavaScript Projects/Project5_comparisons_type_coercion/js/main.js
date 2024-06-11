document.write(typeof "word"); //Writes what type of value "word" is
document.write("<br>"); //Line Break
document.write(typeof 8); //Writes what type of value "8" is
document.write("<br>"); //Line Break
document.write("99" + 1); //Adding a string and number together
document.write("<br>"); //Line Break
document.write(2E310); //This value exceeds the maximum possible number amount and defaults to infinity
document.write("<br>"); //Line Break
document.write(-2E310); //This value exceeds the maximum possible negative number amount and defaults to negative infinity
document.write("<br>"); //Line Break
document.write(10 > 2); //Tells us if ten being greater than two is true or false.
document.write("<br>"); //Line Break
document.write(10 < 2); //Tells us if ten being less than two is true or false.
console.log(99 + 1); //performs the math operation and prints it in the console
console.log(5> 9999999); //performs the math operation and prints it in the console
document.write("<br>"); //Line Break
document.write(9 == 9); //Compares the two values and tells us if them being equal is true or false.
document.write("<br>"); //Line Break
document.write(5 == 6); //Compares the two values and tells us if them being equal is true or false.
document.write("<br>"); //Line Break
A=55; //Defining the variable
B=55; //Defining the variable
document.write(A === B); //compares both the value and data type for the variables and returns true or false.
document.write("<br>"); //Line Break
C="44"; //Defining the variable
D=66; //Defining the variable
document.write(C === D); //compares both the value and data type for the variables and returns true or false.
document.write("<br>"); //Line Break
E="25"; //Defining the variable
F=25; //Defining the variable
document.write(E === F); //compares both the value and data type for the variables and returns true or false.
document.write("<br>"); //Line Break
G=25; //Defining the variable
H=32; //Defining the variable
document.write(G === H); //compares both the value and data type for the variables and returns true or false.
document.write("<br>"); //Line Break
document.write(100 > 1 && 99 > 5); //&& connects the two comparisons with an "and" so they both must be true to return true.
document.write("<br>"); //Line Break
document.write(100 > 101 && 99 > 5); //&& connects the two comparisons with an "and" so they both must be true to return true.
document.write("<br>"); //Line Break
document.write(5 > 15 || 55 > 3); //||  connects the two comparisons with an "or" so if either one is true a true will be returned.
document.write("<br>"); //Line Break
document.write(1 > 2 || 58 > 500); //||  connects the two comparisons with an "or" so if either one is true a true will be returned.




function my_function1() {
    document.getElementById("Test1").innerHTML = 0/0; //Attempts to divide zero by zero which returns a null value since this is impossible
}

function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); //Checks to see if the value is not a valid number and returns true or false
}

function my_function3() {
    document.getElementById("Test3").innerHTML = isNaN("007"); //Checks to see if the value is not a valid number and returns true or false
}

function not_function1() {
    document.getElementById("Not1").innerHTML = ! (20 > 10); //Using ! (not) operator to check if something is true. the ! returns the inverse of the result.
}

function not_function2() {
    document.getElementById("Not2").innerHTML = ! (5 > 10); //Using ! (not) operator to check if something is true. the ! returns the inverse of the result.
}