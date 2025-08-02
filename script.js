const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector('#resetButton');
const createGridButton = document.querySelector('#createGridButton');
let divElements = [];

createGrid(16);

function createGrid(gridSize) {
    divElements = [];
    for(let index = 0; index < (gridSize*gridSize); index++) {
        const divElement = document.createElement("div");
        divElement.addEventListener('mouseover', changeColor);
        divElement.style.width = `calc(60vh / ${gridSize})`;
        gridContainer.appendChild(divElement);
        divElements.push(divElement);
    }
}

function changeColor(event) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    if(+event.target.style.opacity < 1) {
        event.target.style.opacity = String(+event.target.style.opacity + 0.1);
    }
}

resetButton.addEventListener('click', (event) => {
    divElements.forEach((element) => {
        element.style.backgroundColor = "white";
    })
});

createGridButton.addEventListener('click', (event) => {
    let gridSize = prompt("How many squares per side do you want for the new grid?", "16");
    if(+gridSize > 100) {
        gridSize = 100;
    }
    gridContainer.innerHTML = "";
    createGrid(+gridSize);
});




