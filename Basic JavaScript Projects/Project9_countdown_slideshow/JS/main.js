function countdown() { //Creates function countdown()
    var seconds = document.getElementById("seconds").value; //Creates variable seconds using user's input

    function tick() { //Creates function tick()
        seconds = seconds - 1; //Subtracts 1 from variable
        timer.innerHTML = seconds; //Shows new value
        var time = setTimeout(tick, 1000); //1000 milisecond tick on timer loop
        if (seconds == -1) { //creates condition for timer to stop. -1 allows timer to hit 0.
            alert("Time's up!"); //shows this message in alert pop up when condition is met.
            clearTimeout(time); //stops the loop by calling and canceling function.
            timer.innerHTML = "" //Replaces time with "" with is empty space.
        }
    }
    tick(); //end of 1000 milisecond tick function
}

let slideIndex = 1;
showSlisdes(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //Grabs elements with mySlides class
  let dots = document.getElementsByClassName("dot"); //Grabs elements with dot class
  if (n > slides.length) {slideIndex = 1} //If the slide number goes over the max(3) takes to lowest slide(1).
  if (n < 1) {slideIndex = slides.length} //If the slide number goes under minimum (1) takes us to max(3).
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //Hides slides initially.
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //changes dot class from "active" to "" (nothing).
  }
  slides[slideIndex-1].style.display = "block"; //Shows current slide.
  dots[slideIndex-1].className += " active"; //changes dot class to "active".
}