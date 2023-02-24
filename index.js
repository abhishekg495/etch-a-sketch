const canvas = document.querySelector(".canvas");
const menu = document.querySelector(".menu");
const gameContainer = document.querySelector(".game-container");
const gridSizeSlider = document.querySelector("#grid-size");
let pixels = document.querySelectorAll(".pixel");
let gridSize = 12;

function clearCanvas() {
	canvas.innerHTML = "";
}
function fillCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	canvas.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
	for (let i = 0; i < gridSize * gridSize; i++) {
		let pixel = document.createElement("div");
		pixel.classList.add("pixel");
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
	createCanvas();
});
createCanvas();
