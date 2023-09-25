function createGrid(width, height) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let i = 0; i < height; i++) {
        const row = createRow(width);
        container.appendChild(row);
    }
    return container;
}

function createRow(width) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < width; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    return row;
}

function init() {
    const body = document.querySelector('body');
    const grid = createGrid(16, 16);
    body.appendChild(grid);
}

init();