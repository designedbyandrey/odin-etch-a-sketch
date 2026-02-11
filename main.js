document.querySelector(".btn-main")


let grid = document.querySelector(".grid")


for (let i = 0; i < 256; i++){
    let gridChild = document.createElement("div")
    gridChild.classList.add("grid-item")
    grid.appendChild(gridChild)
    
    gridChild.addEventListener("mouseover", () => {
    gridChild.classList.add("grid-hover")
    })

    gridChild.addEventListener("mouseout", () => {
    gridChild.classList.remove("grid-hover")
    })
}
