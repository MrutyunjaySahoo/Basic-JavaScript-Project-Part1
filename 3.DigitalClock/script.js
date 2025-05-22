// const clock = document.getElementById("clock")
const clock = document.querySelector("#clock")

setInterval(() => { 
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // interval to update the clock every second