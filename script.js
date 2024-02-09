let timer;
let startTime;
let running = false;
let elapsedTime = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    display.textContent = formattedTime;
}

function formatTime(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000));
    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + '.' +
        (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds
    );
}

function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        running = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    running = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);