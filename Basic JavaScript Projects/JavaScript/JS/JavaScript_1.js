function Pet_Function() {
    var Pet_Output;
    var Pets = document.getElementById("Pet_Input").value;
    var Pet_String = " is the best pet!";
    switch(Pets) {
        case "Dog":
            Pet_Output = "Dog" + Pet_String;
        break;
        case "Cat":
            Pet_Output = "Cat" + Pet_String;
        break;
        case "Hampster":
            Pet_Output = "Hampster" + Pet_String;
        break;
        case "Tarantula":
            Pet_Output = "Tarantula" + Pet_String;
        break;
        case "Dolphin":
            Pet_Output = "Dolphin" + Pet_String;
        break;
        case "Snake":
            Pet_Output = "Snake" + Pet_String;
        break;
        case "Antarctic Blue Whale":
            Pet_Output = "Antarctic Blue Whale" + Pet_String;
        break;
        default:
        Pet_Output = "Please enter a pet exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}


//Using the getElementByClassName and an array to select the element with 
//that array number within the Clicker class.
function Hello_World_Function() {
    var A = document.getElementsByClassName("Clicker");
    A[1].innerHTML = "Z, Y, X, W, V, U, T, S, R, Q, P, O, N, M, L, K, J, I, H, G, F, E, D, C, B, and A.. See im not drunk officer!";
}