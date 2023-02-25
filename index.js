const canvas = document.querySelector(".canvas");
const gridSizeSlider = document.querySelector("#grid-size");
const gridSizeLabel = document.querySelector("label[for='grid-size']");
const toggleGridLines = document.querySelector("#grid-lines");
const modeBtns = document.querySelectorAll(".mode-btn");
let colorMode = 0;
let colors = ["black", getRandomColor(), "white"];
let gridLines = false;
const clearBtn = document.querySelector("#clear-canvas");
let pixels = document.querySelectorAll(".pixel");
let gridSize = gridSizeSlider.value;
gridSizeLabel.textContent = `Grid Size: ${gridSize}`;

function getRandomColor() {
	return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)},${Math.floor(Math.random() * 256)})`;
}

function createPixel() {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	pixel.addEventListener("mouseover", (e) => {
		if (e.buttons == 1 || e.buttons == 3) {
			e.target.style.backgroundColor = `${colors[colorMode]}`;
			if (colorMode == 1) colors[colorMode] = getRandomColor();
		}
	});
	pixel.addEventListener("click", (e) => {
		console.log(colors[colorMode]);
		e.target.style.backgroundColor = `${colors[colorMode]}`;
		if (colorMode == 1) colors[colorMode] = getRandomColor();
	});
	return pixel;
}
function updateGridLines() {
	if (gridLines) {
		canvas.style.borderWidth = "0 0 1px 1px";
		pixels.forEach((pixel) => (pixel.style.borderWidth = "1px 1px 0px 0px"));
	} else {
		canvas.style.borderWidth = "1px";
		pixels.forEach((pixel) => (pixel.style.borderWidth = "0"));
	}
}
function clearCanvas() {
	pixels.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}
function shrinkCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	while (canvas.childElementCount > gridSize * gridSize) {
		canvas.removeChild(canvas.firstChild);
	}
}
function expandCanvas() {
	canvas.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
	while (canvas.childElementCount < gridSize * gridSize) {
		canvas.appendChild(createPixel());
	}
}
function updateCanvas() {
	shrinkCanvas();
	expandCanvas();
	clearCanvas();
	pixels = document.querySelectorAll(".pixel");
	updateGridLines();
}

gridSizeSlider.addEventListener("input", () => {
	gridSize = gridSizeSlider.value;
	gridSizeLabel.textContent = `Grid Size: ${gridSize}`;
	updateCanvas();
});

toggleGridLines.addEventListener("click", () => {
	gridLines = !gridLines;
	updateGridLines();
});

clearBtn.addEventListener("click", clearCanvas);

modeBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		modeBtns.forEach((btn) => btn.classList.remove("active"));
		e.target.classList.add("active");
		console.log(e.target.dataset);
		colorMode = Number(e.target.dataset.colorcode);
	});
});

updateCanvas();
