function displayMovie(movie) {
    var mainMovie = movie.getAttribute("data-actor-role");
    alert(mainMovie + " is known for being iconic in " + movie.innerHTML); 
}