// document.body.style.background = "red"
// document.body.childNodes[1].innerText = "Hello"

// Selecting by ID
let heading = document.getElementById("header")
console.log(heading)

// getAttribute()
let link = heading.getAttribute("id")
console.log(link)

// setAttribute()
let set = heading.setAttribute("id", "new-id")
console.log(heading)

// Insert element
let div = document.getElementById("box")
let newBtn = document.createElement("button")
newBtn.innerText = "Click me"
newBtn.style.color = "white"
div.after(newBtn)

// Remove element 
let oldBtn = document.querySelector("button")
oldBtn.remove()