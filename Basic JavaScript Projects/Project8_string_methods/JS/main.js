function full_Sentence() { 
    var part_1 = "I have "; //Concenate sentence fragment
    var part_2 = "made this "; //Concenate sentence fragment
    var part_3 = "into a complete "; //Concenate sentence fragment
    var part_4 = "sentence."; //Concenate sentence fragment
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //var that adds all the fragments together using concatenate.
    document.getElementById("Concatenate").innerHTML = whole_sentence; //inserts full sentence inside of id element.
}

function slice_Method() {
    var Sentence = "toto, I have a feeling we're not in Kansas anymore."; //Creates variable
    var Section = Sentence.slice(0,4); //Using slice to pull select index values.
    document.getElementById("Slice").innerHTML = Section.toUpperCase(); //inserts sliced value and uses toUpperCase() to put in all caps.
    console.log(Sentence.search("not")); //Using search() function to find index value of "not".
}

function string_Method() {
    var X = 999;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //Inserts variable and converts to string value.
}

function precision_Method() {
    var Z = 9991542534534643124.111312312541245;
    document.getElementById("Precision").innerHTML = Z.toPrecision(5); //Returns string and uses toPrecision() to round to five decimal places. Fifth digit uses e+(#) to save places.
}

function fixed_Method() {
    var A = 55.5151515151515;
    document.getElementById("Fixed").innerHTML = A.toFixed(4); //Returns string and uses toFixed() to fix the value at four decimal places.
    console.log(A.valueOf());
}
