function Fade() {
    document.getElementById("content").innerHTML = "Goodbye World!";
    document.getElementById("content").style.color = "red";
    document.getElementById("content").style.transition = "all 1s";
}

function Unfade() {
    document.getElementById("content").innerHTML = "Hello World!";
    document.getElementById("content").style.color = "black";
    document.getElementById("content").style.transition = "all 1s";
}