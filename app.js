const year = $("#year");
// Add the current year to the copyright in the footer.
year.html(new Date().getFullYear());

// Timer Elements
const timerElement = $("#timer");
const startButton = $(".start");
const stopButton = $(".stop");
const resetButton = $(".reset");

// Timer button listeners
startButton.on("click", function() {
    startTimer();
});

stopButton.on("click", function() {
    stopTimer();
});

resetButton.on('click', function() {
    resetTimer();
});

// Timer Logic
let hours = 0;
let minutes = 0;
let seconds = 0;
setTimer();

function startTimer() {}
function stopTimer() {}

/// Sets formatted time string on timer element
function setTimer() {
    const timeText = getTime();
    timerElement.html(timeText);
}

/// Formated time string
function getTime() {
    let hourText = hours.toString();
    let minuteText = minutes.toString();
    let secondText = seconds.toString();

    if(hourText.length == 1) {
        hourText = "0"+hourText;
    }
    if(minuteText.length == 1) {
        minuteText = "0"+minuteText;
    }
    if(secondText.length == 1) {
        secondText = "0"+secondText;
    }

    return `${hourText}:${minuteText}:${secondText}`
}

/// Resets time & timer element
function resetTimer() {
    hours, minutes, seconds = 0;
    setTimer();
}