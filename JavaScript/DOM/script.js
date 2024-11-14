let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let container = document.querySelector(".container")

container.style.height = "500px"
container.style.width = "500px"

function showbox() {
    box1.style.height = "100px"
    box1.style.width = "100px"
    box1.style.backgroundColor = "red"

    box2.style.height = "100px"
    box2.style.width = "100px"
    box2.style.backgroundColor = "blue"

    box3.style.height = "100px"
    box3.style.width = "100px"
    box3.style.backgroundColor = "green"

    box4.style.height = "100px"
    box4.style.width = "100px"
    box4.style.backgroundColor = "yellow"
}

function circle() {
    box1.style.borderRadius = "50%"
    box2.style.borderRadius = "50%"
    box3.style.borderRadius = "50%"
    box4.style.borderRadius = "50%"
}

function flexBox() {
    container.style.display = "flex"
}

function mouseOver() {
    box1.style.backgroundColor = "lightblue"
}
function mouseOut() {
    box1.style.backgroundColor = "red"
}