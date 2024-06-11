function Click_It() { //This is defining the function
    var str = "Yes you can. One hundred cheeseburgers please."; //The string that replaces the original html text
    document.getElementById("Button_Text").innerHTML = str; //accesses the html file and replaces the text with our new variable.
}

function ConcatenateFunction() { //This is defining the function
    var sentence = "At the corner of"; //The first part of the variable
    sentence += " 5th and main street."; //The second part that will be concatenated
    document.getElementById("Concatenate").innerHTML = sentence; //This accesses the html file and replaces the text tied to the ID "Concatenate" with our new concenated message.
}

