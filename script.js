const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector('#resetButton');
const divElements = [];

resetButton.addEventListener('click', (event) => {
    divElements.forEach((element) => {
        element.style.backgroundColor = "white";
    })
});

for(let index = 0; index < 256; index++) {
    const divElement = document.createElement("div");
    divElement.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(divElement);
    divElements.push(divElement);
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}


