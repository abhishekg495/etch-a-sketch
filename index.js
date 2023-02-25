const canvas = document.querySelector(".canvas");
const menu = document.querySelector(".menu");
const gameContainer = document.querySelector(".game-container");
const gridSizeSlider = document.querySelector("#grid-size");
const gridSizeLabel = document.querySelector("label[for='grid-size']");
const toggleGridLines = document.querySelector("#grid-lines");
let pixels = document.querySelectorAll(".pixel");
let gridSize = gridSizeSlider.value;
gridSizeLabel.textContent = `Grid Size: ${gridSize}`;

function clearCanvas() {
	// console.log(canvas.childElementCount);
	while (canvas.childElementCount > gridSize * gridSize) {
		canvas.removeChild(canvas.firstChild);
	}
}
function fillCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	//canvas.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
	while (canvas.childElementCount < gridSize * gridSize) {
		let pixel = document.createElement("div");
		pixel.classList.add("pixel");
		//pixel.style.width = canvas.style.width / gridSize;
		//pixel.style.height = canvas.style.height / gridSize;
		canvas.appendChild(pixel);
	}
	pixels = document.querySelectorAll(".pixel");
}
function createCanvas() {
	clearCanvas();
	fillCanvas();
}

gridSizeSlider.addEventListener("input", () => {
	gridSize = gridSizeSlider.value;
	gridSizeLabel.textContent = `Grid Size: ${gridSize}`;
	createCanvas();
});

toggleGridLines.addEventListener("click", () => {
	pixels.forEach((pixel) => pixel.classList.toggle("no-border"));
});

createCanvas();
