const container = document.querySelector('.container');
container.style.flexDirection = "column";
container.style.height = "400px";
let grid = document.createElement("div");
grid.classList.add("grid");
// This is needed to show them side-by-side
grid.style.display = "flex";
grid.style.justifyContent = "space-between";
grid.style.flexDirection = "column";
grid.style.height = "100%";
function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.flex = 1;
        row.style.justifyContent = "space-between";
        for (let i = 0; i < 16; i++) {
            let div = document.createElement("div");
            div.classList.add("column");
            div.style.flex = 1;
            div.style.backgroundColor = "lightgray";
            div.style.border = "1px solid black";
            div.onmouseover = function() { 
                this.style.backgroundColor = "black"; 
            }
            div.onmouseout = function() { 
                this.style.backgroundColor = "lightgray"; 
            }
            row.appendChild(div);
        }
        grid.appendChild(row);
    }
}

createGrid();
container.appendChild(grid);
