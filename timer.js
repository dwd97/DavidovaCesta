function updateTimer() {
    const endDate = new Date('2025-01-08T23:59:59');
    const now = new Date();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = 
        `Zbývá: ${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund`;

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "The week has ended!";
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();