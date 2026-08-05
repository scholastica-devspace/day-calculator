const dayText = document.getElementById("day");
const timeText = document.getElementById("time");
const messageText = document.getElementById("message");
const btn = document.getElementById("btn");

const screen = document.querySelector(".screen");





btn.addEventListener("click", () => {

    const today = new Date();

    let day = today.getDay();
    let hour = today.getHours();

    // Day Calculator

    switch (day) {
        case 0:
            dayText.innerText = "Sunday";
            break;

        case 1:
            dayText.innerText = "Monday";
            break;

        case 2:
            dayText.innerText = "Tuesday";
            break;

        case 3:
            dayText.innerText = "Wednesday";
            break;

        case 4:
            dayText.innerText = "Thursday";
            break;

        case 5:
            dayText.innerText = "Friday";
            break;

        case 6:
            dayText.innerText = "Saturday";
            break;

        default:
            dayText.innerText = "Invalid day";

    }

    // Time Calculator

    timeText.innerText = today.toLocaleTimeString();

    switch (true) {
        case hour < 6:
            messageText.innerText = "Good Night 🌙";
            break;
        case hour < 12:
            messageText.innerText = "Good Morning 🌅";
            break;

        case hour < 18:
            messageText.innerText = "Good Afternoon ☀️";
            break;

        default:
            messageText.innerText = "Good Evening ✨";
    }

    screen.style.display = "block";

})