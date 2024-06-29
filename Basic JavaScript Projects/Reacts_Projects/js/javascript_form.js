function validateForm() {
    let x = document.forms["valForm"]["firstname", "lastname", "email", "phone"].value;
    if (x == "") {
      alert("Fields must be filled out");
      return false;
    }
  }