`use strict`
const countdown = () => {
    const countDate = new Date(2023, 0).getTime()
    const currentTime = new Date().getTime()
    const subtractionTime = countDate - currentTime
    

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24


    const countDay = Math.floor(subtractionTime / day)
    const countHour = Math.floor((subtractionTime % day) / hour)
    const countMinute = Math.floor((subtractionTime % hour) / minute)
    const countSecond = Math.floor((subtractionTime % minute) / second)


    const dayCell = document.querySelector('.day')
    dayCell.textContent = countDay

    const hourCell = document.querySelector('.hour')
    hourCell.textContent = countHour

    const minuteCell = document.querySelector('.minute')
    minuteCell.textContent = countMinute

    const secondCell = document.querySelector('.second')
    secondCell.textContent = countSecond
    
}
countdown()
