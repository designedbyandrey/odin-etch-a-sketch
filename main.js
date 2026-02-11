/*
1. Event btn click
2. Erase old grid
3. Let user input new value
3. Add with setting to grid child (grid width/input value)
4. Changing i value bases on the input value

*/

let grid = document.querySelector(".grid");
let mainButton = document.querySelector(".btn-main");
let gridWidth = 740;

for (let i = 0; i < 256; i++){
        let gridChild = document.createElement("div")
        gridChild.classList.add("grid-item")

        grid.appendChild(gridChild);
        
        gridChild.addEventListener("mouseover", () => {
        gridChild.classList.add("grid-hover")
        })

        gridChild.addEventListener("mouseout", () => {
        gridChild.classList.remove("grid-hover")
        })
    }

function resetGrid() {
    
    deleteGrid()

    let isValid = false;
    let inputValue;

    while(isValid === false) {
        inputValue = parseInt(prompt("Squares per side (max 100)"))
        if (!isNaN(inputValue) && inputValue <= 100 && inputValue > 0) {
            isValid = true;
        } else {
            alert("Please enter a valid number ")
        }
    }
    


    for (let i = 0; i < inputValue * inputValue; i++){
        let gridChild = document.createElement("div")
        gridChild.classList.add("grid-item")
        let gridChildWidth = gridWidth/inputValue; 

        gridChild.style.width = `${gridChildWidth}px`
        gridChild.style.height = `${gridChildWidth}px`
        grid.appendChild(gridChild);
        
        gridChild.addEventListener("mouseover", () => {
        gridChild.classList.add("grid-hover")
        })

        gridChild.addEventListener("mouseout", () => {
        gridChild.classList.remove("grid-hover")
        })
    }

}

function deleteGrid() {
    grid.innerHTML = ''
}

mainButton.addEventListener ("click", () => {
    resetGrid()
})
