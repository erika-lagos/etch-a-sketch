const button = document.querySelector('button');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const gridContainer = document.querySelector('.grid-container');

function createGrid(width, height) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < height; i++) {
        const row = createRow(width);
        gridContainer.appendChild(row);
    }
}

function createRow(width) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < width; i++) {
        const square = createSquare();
        row.appendChild(square);
    }
    return row;
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.brightness = 1;
    square.addEventListener('mouseover', e => {
        const target = e.target;
        target.classList.add('solid');
        const brightness = target.dataset.brightness;
        if (brightness > 0) {
            target.dataset.brightness = brightness - 0.1;
            target.style.filter = `brightness(${brightness})`;
        }
    });
    return square;
}

function resetGrid() {
    width = +widthInput.value;
    height = +heightInput.value;
    if(width > 100 || height > 100) {
        alert('Please select values up to 100');
        return;
    }
    createGrid(width, height);
}

function init() {
    gridContainer.innerHTML = '';
    widthInput.value = 16;
    heightInput.value = 16;
    createGrid(16, 16);
    button.addEventListener('click', e => {
        resetGrid();
    });
}

init();