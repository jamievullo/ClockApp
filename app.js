document.addEventListener('DOMContentLoaded', function () {
    displayTime()
});

function displayTime() {
    // new date instance
    
    let newDate = new Date();
    // need to check why month is coming in minus one(showing june in july)
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
    
    let amOrPm = hours < "12" ? "am" : "pm"

    let clockDisplay = document.getElementById("clock-display")
    clockDisplay.innerHTML = `${month}-${day}-${year} - ${hours}:${minutes}:${seconds} ${amOrPm}`
}

