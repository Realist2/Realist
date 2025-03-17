// JavaScript
// Variables and Constants
let stopwatchInterval;
let elapsedTime = 0; // Time in milliseconds
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Formatting Time 
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

// Updating the display
function updateDisplay() {
    display.textContent = formatTime(elapsedTime); // Corrected function name here
}

// Starting the Stopwatch
function startStopwatch() {
    if (isRunning) return;

    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;

    const startTime = Date.now() - elapsedTime;

    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);
}

// Stopping the stopwatch
function stopStopwatch() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(stopwatchInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Resetting the Stopwatch 
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

// Event listeners
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

// Initialize display
updateDisplay();
