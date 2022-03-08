//Navbar
const nav = document.getElementById('navbar');
window.onscroll = () => {
  if (window.scrollY > 20) {
    nav.style.backgroundColor = "black";
    nav.style.transition = "all 0.3s ease";
  }
  else {
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "all 0.3s ease";
  }
}

//Squares and rectangles
squareBorders = document.getElementsByClassName("square-border");
function compress() {
  squareBorders[0].style.left = "10px";
  squareBorders[0].style.top = "10px";
  squareBorders[0].style.transition = "all 0.3s ease";
}
function normal() {
  squareBorders[0].style.left = "20px";
  squareBorders[0].style.top = "20px";
  squareBorders[0].style.transition = "all 0.3s ease";
}

// images = document.getElementsByClassName("projects-image");
// blueRectangles = document.getElementsByClassName("square-filter");
// blueRectangles[0].style.height = images[0].height;
// blueRectangles[0].style.width = images[0].width;


//Button
var turquoise = "#64ffda";
var navy = "#0a192f";

var iconGithub = document.querySelector("button.type1 .bi.bi-github");
var iconCV = document.querySelector("button.type1 .bi.bi-file-earmark-person-fill");
var buttons = document.querySelectorAll("button.type1");

buttons[0].onmouseover = (event) => {
  event.preventDefault();
  iconCV.style.color = navy;
  iconCV.style.transition = "all 0.3s ease";
}

buttons[0].onmouseleave = (event) => {
  event.preventDefault();
  iconCV.style.color = turquoise;
  iconCV.style.transition = "all 0.3s ease";
}

buttons[1].onmouseover = (event) => {
  event.preventDefault();
  iconGithub.style.color = navy;
  iconGithub.style.transition = "all 0.3s ease";
}

buttons[1].onmouseleave = (event) => {
  event.preventDefault();
  iconGithub.style.color = turquoise;
  iconGithub.style.transition = "all 0.3s ease";
}



//Loading bar
const bars = document.getElementsByClassName("xp-bar");


var techSkills = [
  { name: 'cpp', xpPercent: 0.80 },
  { name: 'javascript', xpPercent: 0.50 },
  { name: 'python', xpPercent: 0.60 },
  { name: 'vue', xpPercent: 0.30 },
  { name: 'react', xpPercent: 0.30 },
  { name: 'nest', xpPercent: 0.15 }
]

var numberOfTechSkills = 6;

for (let i = 0; i < numberOfTechSkills; i++) {
  bars[i].style.width = techSkills[i].xpPercent * 100 + "%";
  bars[i].innerHTML = techSkills[i].xpPercent * 100 + "%";
}

var id = setInterval(charge, 10);

var loads = [0, 0, 0, 0, 0];
function charge() {
  for (let i = 0; i < numberOfTechSkills; i++) {
    if (loads[i] < techSkills[i].xpPercent * 100) {
      loads[i]++;
      bars[i].style.width = (loads[i]) + "%";
      bars[i].innerHTML = (loads[i]) + "%";
    }
  }
  if (notFinished()) {
    clearInterval(id);
  }
  function notFinished() {
    for (let i = 0; i < numberOfTechSkills; i++) {
      if (loads[i] != techSkills[i].xpPercent * 100) {
        return false;
      }
    }
    return true;
  }
}
