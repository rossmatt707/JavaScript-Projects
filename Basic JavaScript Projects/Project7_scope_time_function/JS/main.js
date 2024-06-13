
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
