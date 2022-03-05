squares = document.getElementsByClassName("square");
function compress() {
    squares[0].style.left = "10px";
    squares[0].style.top = "10px";
    squares[0].style.transition = "all 0.3s ease";
}
function normal() {
    squares[0].style.left = "20px";
    squares[0].style.top = "20px";
    squares[0].style.transition = "all 0.3s ease";
}