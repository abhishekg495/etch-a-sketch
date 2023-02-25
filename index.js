const canvas = document.querySelector(".canvas");
const gridSizeSlider = document.querySelector("#grid-size");
const gridSizeLabel = document.querySelector("label[for='grid-size']");
const toggleGridLines = document.querySelector("#grid-lines");
let pixels = document.querySelectorAll(".pixel");
let gridSize = gridSizeSlider.value;
gridSizeLabel.textContent = `Grid Size: ${gridSize}`;

function createPixel() {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	pixel.addEventListener("mouseover", (e) => {
		if (e.buttons == 1 || e.buttons == 3)
			e.target.style.backgroundColor = "black";
	});
	return pixel;
}

function clearCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	while (canvas.childElementCount > gridSize * gridSize) {
		canvas.removeChild(canvas.firstChild);
	}
	pixels = document.querySelectorAll(".pixel");
	pixels.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}
function fillCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	while (canvas.childElementCount < gridSize * gridSize) {
		canvas.appendChild(createPixel());
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
