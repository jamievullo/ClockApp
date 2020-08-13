let isMilitaryTime = true
let intervalID;

document.addEventListener('DOMContentLoaded', function () {
    displayTime()
    setInterval(displayTime, 1000)
});

let button = document.getElementById("twelve-twentyfour")
button.addEventListener("click", (e) => {
    isMilitaryTime = !isMilitaryTime
    
    clearInterval(intervalID)
    displayTime()
    intervalID = setInterval(displayTime, 1000)


    button.innerHTML = "Change Time Format"
})


function displayTime() {
    let newDate = new Date()

    const hours = formatTime(newDate.getHours())
    const minutes = formatTime(newDate.getMinutes())
    const seconds = formatTime(newDate.getSeconds())
    const day = formatTime(newDate.getDate())
    const month = formatTime(newDate.getMonth() + 1)
    const year = formatTime(newDate.getFullYear())

    let formattedHour = isMilitaryTime ? hours : getStandardHours(hours)

    let clockDisplay = document.getElementById("clock-display")

    clockDisplay.innerHTML = `${month}-${day}-${year} - ${formattedHour}:${minutes}:${seconds} ${getAmPm()}`
}

function formatTime(time) {
    return time < 10 ? "0" + time : time
}

function getStandardHours(hours) {
    return parseInt(hours) > 12 ? parseInt(hours) - 12 : hours
}

function getAmPm(hours) {
    return isMilitaryTime ? "" : (parseInt(hours) < 12 ? "am" : "pm")
}
