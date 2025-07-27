const gridContainer = document.querySelector("#grid-container");

for(let index = 0; index < 256; index++) {
    const divElement = document.createElement("div");
    divElement.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(divElement);
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}


