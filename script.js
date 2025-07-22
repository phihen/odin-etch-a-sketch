const gridContainer = document.querySelector("#grid-container");

for(let index = 0; index < 256; index++) {
    const divElement = document.createElement("div");
    gridContainer.appendChild(divElement);
}


