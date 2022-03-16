`use strict`
const countdown = () => {
    const countDate = new Date(2023, 0).getTime()
    const currentTime = new Date().getTime()
    const subtractionTime = countDate - currentTime
    

    const sec = 1000
    const minute = sec * 60
    const hour = minute * 60
    const day = hour * 24
}
countdown()
