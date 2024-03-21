// create a grid using JS. 
function createGrid (numRows = 15, numCols = 26){
    const grid = document.querySelector(".grid");
    const containerWidth = grid.clientWidth; 
    const containerHeight = grid.clientHeight; 
    const squareSizeWidth = containerWidth / numCols; 
    const squareSizeHeight = containerHeight / numRows; 
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numCols; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSizeWidth + 'px';
            square.style.height = squareSizeHeight + 'px'; 
            row.appendChild(square);
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

// reset Size 

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetSize); 

function resetSize () {
    let userInput = prompt("Please enter the number of squares you wish (below 100)"); 
    if (userInput > 100) {
        alert("Please make sure your number is below 100");
    }

}
 











