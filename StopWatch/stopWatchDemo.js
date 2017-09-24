var started = false;
var time = 0;
var timesDisplayed = [];


init();

function display(item, id) {
  document.getElementById(id).innerHTML = item;
}

function startStop() {
  if (started == false) {
    countdown = setInterval(function() {
      time++;
      display(time, 'stopwatch');
    }, 100)
    started = true;
  } else {
    clearInterval(countdown);
    started = false;
  }
}

function reset() {
  time = 0;
  display(time, 'stopwatch');
  display('', 'pasttimes');
}

function recTime() {
  document.getElementById('pasttimes').innerHTML += time + "<br>";
}

function init() {
  display(0, 'stopwatch')

  var startStopButton = document.getElementById('startstop');
  var resetButton = document.getElementById('reset');
  var recTimeButton = document.getElementById('rectime');

  startStopButton.addEventListener('click', function() {
    startStop();
  });

  resetButton.addEventListener('click', function() {
    reset();
  });

  recTimeButton.addEventListener('click', function() {
    recTime();
  });

  document.addEventListener('keydown', function() {
    if (event.key == "s") {
      startStop();
    } else if (event.key == "t") {
      reset();
    } else if (event.key == 'r') {
      recTime();
    } else {
      console.log('Invalid Key: ' + event.key)
    }
  });
}
