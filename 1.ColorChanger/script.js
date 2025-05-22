const buttons = document.querySelectorAll(".button") // Select all buttons with the class "button"
const body = document.querySelector("body") // Select the body element

buttons.forEach((button) => {
    button.addEventListener("click", (e) => { // Add a click event listener to each button
        if(e.target.id === "pink")
            body.style.backgroundColor = e.target.id 
        else if(e.target.id === "green")
            body.style.backgroundColor = e.target.id 
        else if(e.target.id === "blue")
            body.style.backgroundColor = e.target.id
        else if(e.target.id === "yellow")
            body.style.backgroundColor = e.target.id
        else if(e.target.id === "purple")
            body.style.backgroundColor = e.target.id
    })
    })