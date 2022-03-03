const elements = document.getElementsByClassName("xp-bar");

var percentages = {
    "vue": 0.45,
    "react": 0.1,
}

elements[0].style.width = String(percentages["vue"]*100) + "%";
elements[0].innerHTML = String(percentages["vue"]*100) + "%";

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= percentages["vue"]*100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elements[0].style.width = width + "%";
        elements[0].innerHTML = width  + "%";
      }
    }
  }
}

move()