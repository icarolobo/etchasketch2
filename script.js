const parent = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    parent.appendChild(div);
    div.classList.add("gridDiv");
}

const childrenDiv = document.querySelectorAll(".gridDiv");

function toggleBackground(e) {
    e.target.classList.toggle("black");
};

Array.from(childrenDiv).forEach(gridDiv => {
    gridDiv.addEventListener("mouseover", toggleBackground);
});