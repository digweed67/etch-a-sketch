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

function resetSize() {
    let inputCols = parseInt(prompt("Please enter the number of columns (below 26)"));
    if (inputCols > 26) {
        alert("Please make sure your number is 26 or below");
    } else if (inputCols <= 0) {
        alert("Please make sure your number is between 1 and 26");
    }
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    const numRows = Math.ceil((15 * inputCols) / 26);
    let numCols = inputCols; 

    function createNewGrid(numRows, numCols) {
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

    createNewGrid(numRows, inputCols); 
    
    const parentDiv = document.querySelector(".grid");
    const childDivs = parentDiv.querySelectorAll("div");

    childDivs.forEach(childDiv => {
        childDiv.addEventListener("mouseover", colorChange);
    });
}

    
 



/* 1. Define a function called `resetGrid` to reset the grid layout and ask the user for the number of columns.
2. Inside the `resetGrid` function:
    a. Prompt the user for the number of columns using `prompt()` function.
    b. Convert the user input to a number (if necessary) and store it in a variable (e.g., `numCols`).
    c. Calculate the width of each column based on the number of columns. You may use percentages or other units as needed.
    d. Set the width of each grid item (column) based on the calculated width.
    e. Call the `createGrid` function with the `numCols` parameter to create the grid with the specified number of columns.
3. Call the `resetGrid` function when needed.*/ 









