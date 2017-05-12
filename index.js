var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var breakInput = document.getElementById('breakTime');
var studyInput = document.getElementById('sessionTime');
var timer = document.getElementById('timer');
var sessionTotal;
var breakTime;
var todayDate;
var workTime;
var distance;
var hours;
var minutes;
var seconds;
var refreshTime;
var working = true;

startBtn.addEventListener('click', function(){
    studyTime = studyInput.value;
    breakTime = breakInput.value;

    todayDate = new Date();

    workTime = new Date(todayDate.getTime() + studyTime*60000);
    breakTime = new Date(todayDate.getTime() + breakTime*60000);

    refreshTime = setInterval(displayTime, 1001);
});
stopBtn.addEventListener('click', function(){
    clearInterval(refreshTime);
});


function displayTime() {

    if (working == true) {
        distance = workoutDistance(workTime);
    } else {
        distance = workoutDistance(breakTime);
    }
    
    

    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timer.innerHTML = "mins: " + minutes + " seconds: " + seconds;

    if (distance == 0) {
        working = false;
    } else {
        working = true;
    }  
}

function workoutDistance(time) {
    todayDate = new Date().getTime();
    return distance = time - todayDate;
}