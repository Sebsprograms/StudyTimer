const year = $("#year");
// Add the current year to the copyright in the footer.
year.html(new Date().getFullYear());

// Timer Elements
const timerElement = $("#timer");
const startButton = $(".start");
const stopButton = $(".stop");
const resetButton = $(".reset");

// Timer button listeners
startButton.on("click", function () {
    startTimer();
});

stopButton.on("click", function () {
    stopTimer();
});

resetButton.on('click', function () {
    resetTimer();
});

// Timer Logic
let randomTime = generateRandomTime();
let totalTimeInSeconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = undefined;
let isTimerOff = true;
setTimer();

function startTimer() {
    if (isTimerOff) {
        timer = setInterval(function () {
            console.log(randomTime);
            adjustTime();
            setTimer();
        }, 1000);
        isTimerOff = false;
    }
}

// Increments total seconds and adjusts display variables hours, minutes & seconds
function adjustTime() {
    totalTimeInSeconds += 1;
    hours = Math.floor(totalTimeInSeconds / 3600);
    minutes = Math.floor(totalTimeInSeconds / 60) % 60;
    seconds = totalTimeInSeconds % 3600 % 60;
}

/// Sets formatted time string on timer element
function setTimer() {
    const timeText = getTime();
    timerElement.html(timeText);
}

function playSoundAtInterval() {}

/// Generate random time in seconds 
function generateRandomTime(min = 300, max = 600) {
    let difference = max - min;
    let rand = Math.random();

    rand = Math.floor( rand * difference);
    rand = rand + min;

    return rand;
}

function stopTimer() {
    clearInterval(timer);
    isTimerOff = true;
}




/// Formated time string
function getTime() {
    let hourText = hours.toString();
    let minuteText = minutes.toString();
    let secondText = seconds.toString();

    if (hourText.length == 1) {
        hourText = "0" + hourText;
    }
    if (minuteText.length == 1) {
        minuteText = "0" + minuteText;
    }
    if (secondText.length == 1) {
        secondText = "0" + secondText;
    }

    return `${hourText}:${minuteText}:${secondText}`
}

/// Resets time & timer element
function resetTimer() {
    totalTimeInSeconds = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    setTimer();
}