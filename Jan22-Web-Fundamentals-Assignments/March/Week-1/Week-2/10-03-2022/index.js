let initialtime = 5;
let timer = initialtime * 60;

let handletimer = function () {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  let counter = document.getElementById("counter");
  if (seconds < 10) {
    counter.innerText = `0${minutes} : 0${seconds}`;
  } else {
    counter.innerText = `0${minutes} : ${seconds}`;
  }
  timer--;

  if (minutes == 0 && seconds == 0) {
    clearInterval(interval);
  }
};

let interval = setInterval(handletimer, 1000);