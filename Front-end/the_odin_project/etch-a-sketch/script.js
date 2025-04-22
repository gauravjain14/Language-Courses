const container = document.querySelector('.container');

// Create a 16 x 16 grid of square divs
let grid = document.createElement("div");
grid.classList.add("grid");

// This is needed to show them side-by-side
grid.style.display = "flex";
function createGrid() {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.classList.add("column");
        div.style.flex = 1;
        div.style.backgroundColor = "lightgray";
        div.style.height = "20px";
        div.style.border = "1px solid black";
        grid.appendChild(div);
    }
}

createGrid();
container.appendChild(grid);
