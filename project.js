const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')
let displayTimer = document.getElementById('timer')

// variables time values 
let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0


// variable for interval

let timerInterval = null
let timerStatus = "stopped"

// stop watch function

const stopWatch = () => {

    seconds ++ 

    if (seconds / 60 === 1){
        seconds = 0 
        minutes ++
        if (minutes / 60 === 1){
            minutes = 0 
            hours ++
        }
    }
    let displayTimer = document.getElementById('timer')
    if (seconds < 10)
        leadingSeconds = "0" + seconds.toString()
    else 
        leadingSeconds = seconds
    if (minutes < 10)
        leadingMinutes = "0" + minutes.toString()
    else 
        leadingMinutes = minutes
    if (hours < 10)
        leadingHours = "0" + hours.toString()
    else 
        leadingHours = hours
    displayTimer.innerText = leadingHours +  ":" + leadingMinutes + ":" + leadingSeconds

}
//window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000)
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = "started"
    } else{
        window.clearInterval(timerInterval)
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval)
    timerStatus = "stopped"
    let displayTimer = document.getElementById('timer')
    displayTimer.innerText = "00:00:00" 
    hours = 0
    minutes = 0
    seconds = 0
})

