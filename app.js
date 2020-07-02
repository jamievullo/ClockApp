document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => displayTime(), 1000)
});
let twentyFour = true
let button = document.getElementById("twelve-twentyfour")
button.addEventListener("click", () => changeFormat())


function displayTime() {
    // new date instance    
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    day = day < 10 ? "0" + day : day
    month = month < 10 ? "0" + month : month

    formatTime(hours, minutes, seconds, day, month, year)
}

function changeFormat() {
    console.log(twentyFour)

    if(twentyFour === true) {
        twentyFour = false
    } else if(twentyFour === false) {
        twentyFour = true
    }

    button.innerHTML = "Change Time Format"
}

function formatTime(hours, minutes, seconds, day, month, year) {

    let amOrPm = hours < "12" ? "am" : "pm"
    let formattedHour = hours > "12" ? hours - 12 : hours
    let clockDisplay = document.getElementById("clock-display")
    if(twentyFour === false) {
        clockDisplay.innerHTML = `${month}-${day}-${year} - ${formattedHour}:${minutes}:${seconds} ${amOrPm}`
    } else {
        clockDisplay.innerHTML = `${month}-${day}-${year} - ${hours}:${minutes}:${seconds}`
    }
}
