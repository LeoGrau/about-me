const bars = document.getElementsByClassName("xp-bar");


var techSkills = [
  { name: 'cpp', xpPercent: 0.80 },
  { name: 'javascript', xpPercent: 0.50 },
  { name: 'python', xpPercent: 0.60 },
  { name: 'vue', xpPercent: 0.30 },
  { name: 'react', xpPercent: 0.30 }
]

var numberOfTechSkills = 1;

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
  if(notFinished()) {
    clearInterval(id);
  }
  function notFinished() {
    for(let i = 0; i < numberOfTechSkills; i++) {
      if(loads[i] != techSkills[i].xpPercent * 100) {
        return false;
      }
    }
    return true;
  }
}



