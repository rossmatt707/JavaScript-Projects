function formValidator() {
    let name = document.forms["contactForm"]["Name"].value;
    let email = document.forms["contactForm"]["Email"].value;
    let message = document.forms["contactForm"]["Message"].value;
    
    if (name == "") {
        alert("Name field is blank.");
        return false;
    }
    
    if (email == "") {
        alert("Email field is blank.");
        return false;
    }

    if (message == "") {
        alert("Message field is blank.")
        return false;
    }
}