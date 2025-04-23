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

const INITIAL_LIGHTNESS = 80;
const FINAL_LIGHTNESS = 0;
const STEPS = 10;
const STEP_AMOUNT = (INITIAL_LIGHTNESS - FINAL_LIGHTNESS) / STEPS;

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
            div.style.boxSizing = "border-box";

            // State initialization
            div.dataset.lightness = INITIAL_LIGHTNESS;
            div.dataset.mode = 'darkening';
            div.style.backgroundColor = `hsl(0, 0%, ${INITIAL_LIGHTNESS}%)`;

            div.addEventListener('mouseover', handleMouseOver);
            div.addEventListener('mouseout', handleMouseOut);
            row.appendChild(div);
        }
        grid.appendChild(row);
    }
}

function handleMouseOver(event) {
    const cell = event.target;
    let currentLightness = parseFloat(cell.dataset.lightness);
    let currentMode = cell.dataset.mode;

    if (currentMode === 'darkening') {
        let newLightness = Math.max(FINAL_LIGHTNESS, currentLightness - STEP_AMOUNT);
        cell.style.backgroundColor = `hsl(0, 0%, ${newLightness}%)`;
        cell.dataset.lightness = newLightness;

        // If we've reached black, switch mode
        if (newLightness === FINAL_LIGHTNESS) {
            cell.dataset.mode = 'lightening';
             console.log("Switching to lightening mode");
        }
    }
}

function handleMouseOut(event) {
    const cell = event.target;
    let currentLightness = parseFloat(cell.dataset.lightness);
    let currentMode = cell.dataset.mode;

    if (currentMode === 'lightening') {
        let newLightness = Math.min(INITIAL_LIGHTNESS, currentLightness + STEP_AMOUNT);
        cell.style.backgroundColor = `hsl(0, 0%, ${newLightness}%)`;
        cell.dataset.lightness = newLightness;

        // If we've reached the original gray, switch mode
        if (newLightness === INITIAL_LIGHTNESS) {
            cell.dataset.mode = 'darkening';
            console.log("Switching to darkening mode");
            }
    }
}

createGrid();
container.appendChild(grid);
