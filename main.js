// create a 16x16 grid using JS. 
function createGrid (numRows = 15, numCols = 26){
    const grid = document.querySelector(".grid");
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numCols; j++) {
            const cols =document.createElement("div");
            cols.classList.add("cols");
            row.appendChild(cols);
        }
    grid.appendChild(row);
    }

}

createGrid(); 

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

const parentDiv = document.querySelector(".grid");
const childDivs = parentDiv.querySelectorAll("div");

childDivs.forEach(childDiv => {
    childDiv.addEventListener("mouseover", colorChange);
});


function colorChange(event) {
     
    function randomizeColor() {

        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red},${blue},${green})`;

        return randomColor; 
    } 
    const randomColor = randomizeColor();
    event.target.style.backgroundColor = randomizeColor();
}


// Clear grid button to reset to white 

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
    const parentDiv = document.querySelector(".grid");
    const childDivs = parentDiv.querySelectorAll("div");
    childDivs.forEach(childDiv => {
        childDiv.style.backgroundColor = 'rgb(255, 255, 255)'; 
    });
}


clearGrid();
 











