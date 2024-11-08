const parent = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
let sizeNewGrid = 16;

resetButton.addEventListener("click", askSize);

function askSize() {
    do {
        sizeNewGrid = prompt("Size of the new grid:");
    } while (sizeNewGrid > 100);
    deleteChild();
    newGrid();    
}

function deleteChild() {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

function newGrid() {
    for (let i = 0; i < (sizeNewGrid * sizeNewGrid); i++) {
        const div = document.createElement("div");
        parent.appendChild(div);
        div.classList.add("gridDiv");
        div.style.flexBasis = `${960/sizeNewGrid}px`;
        div.style.height = `${960/sizeNewGrid}px`;
    }
    const childrenDiv = document.querySelectorAll(".gridDiv");
    Array.from(childrenDiv).forEach(gridDiv => {
        gridDiv.addEventListener("mouseover", toggleBackground);
    });
}

newGrid();

function toggleBackground(e) {
    e.target.classList.toggle("black");
};