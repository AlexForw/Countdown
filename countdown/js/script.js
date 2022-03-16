`use strict`
const countdown = () => {
    const countDate = new Date(2023, 0).getTime()       //  set time to New Year
    const currentTime = new Date().getTime()            // set current time
    const subtractionTime = countDate - currentTime     // define difference 
    

    const second = 1000                 // define times
    const minute = second * 60          
    const hour = minute * 60            
    const day = hour * 24               


    const countDay = Math.floor(subtractionTime / day)                          // define times in milliseconds
    const countHour = Math.floor((subtractionTime % day) / hour)
    const countMinute = Math.floor((subtractionTime % hour) / minute)
    const countSecond = Math.floor((subtractionTime % minute) / second)


    const dayCell = document.querySelector('.day')                              // find cells 
    dayCell.textContent = countDay                                              // set times into cells

    const hourCell = document.querySelector('.hour')
    hourCell.textContent = countHour

    const minuteCell = document.querySelector('.minute')
    minuteCell.textContent = countMinute

    const secondCell = document.querySelector('.second')
    secondCell.textContent = countSecond

}
setInterval(countdown,1000)               // define interval for function (like online working)
