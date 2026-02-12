/*
1. Event btn click
2. Erase old grid
3. Let user input new value
3. Add with setting to grid child (grid width/input value)
4. Changing i value bases on the input value

*/

//Variables
let grid = document.querySelector(".grid");
let mainButton = document.querySelector(".btn-main");
let gridWidth = 740;
let outputField = document.querySelector("#result-output")
const gridForm = document.querySelector("#grid-form");


//initial grid load
for (let i = 0; i < 256; i++){
        let gridChild = document.createElement("div")
        gridChild.classList.add("grid-item")

        grid.appendChild(gridChild);
        
        gridChild.addEventListener("mouseover", () => {
        gridChild.style.background = randomRGB()
        gridChild.classList.add("grid-hover")
        })

        gridChild.addEventListener("mouseout", () => {
            setTimeout(() => {
                gridChild.style.background = ""
                gridChild.classList.remove("grid-hover")
            }, 500)

        })
    }

//Getting the input value of form
function getInputValue() {
    return inputValue = document.querySelector("#value-input").value;
}


//Checks if value is between 1 and 100
function checkValue() {

    let numericValue = parseFloat(inputValue);

        if (!isNaN(numericValue) && numericValue <= 100 && numericValue > 0) {
            outputField.textContent = `Success! Value is valid. Creating a ${numericValue} x ${numericValue} grid`;
            outputField.style.color = "green";
            newGrid(numericValue);
        
        } else {
            outputField.textContent = "Please enter a valid value (1-100)";
            outputField.style.color = "red";
        }

}


//creates new grid based on input value
function newGrid(gridValue) {
    deleteGrid()
    for (let i = 0; i < gridValue * gridValue; i++){
        let gridChild = document.createElement("div")
        gridChild.classList.add("grid-item")
        let gridChildWidth = gridWidth/gridValue; 

        gridChild.style.width = `${gridChildWidth}px`
        gridChild.style.height = `${gridChildWidth}px`
        grid.appendChild(gridChild);
        
        gridChild.addEventListener("mouseover", () => {
        gridChild.style.background = randomRGB()
        gridChild.classList.add("grid-hover")
        })

        gridChild.addEventListener("mouseout", () => {
            setTimeout(() => {
                gridChild.style.background = ""
                gridChild.classList.remove("grid-hover")
            }, 500)
        })
    }}


//Deleting the grid
function deleteGrid() {
    grid.innerHTML = ''
}

//Running the function
gridForm.addEventListener("submit", (e) => {
    e.preventDefault()
    getInputValue();
    checkValue()
    
})

//Generate random color
function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor; 
    
}
