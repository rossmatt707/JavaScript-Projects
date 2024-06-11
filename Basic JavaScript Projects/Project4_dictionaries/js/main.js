function my_Dictionary() {
    var Animal = { //assigns the following KVPs to the var "Animal".
        Species:"Dog", //KVP
        Color:"Orange", //KVP
        Breed:"Maine Coon", //KVP
        Age:4, //KVP
        Sound:"Meow" //KVP
    };
    delete Animal.Sound; // Deletes the stated KVP from the dictionary.
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // attempts to replace the text in the dictionary assigned element with this key value. It fails to do so as the value was deleted in the previous line.
}