const container = document.querySelector('#container');

function createGrid() {

    let gridArea = 16*16;

    for (let i = 1; i <= gridArea; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        container.appendChild(gridElement);
    }

    container.style.gridTemplateColumns = 'repeat(16, 1fr)'
    container.style.gridTemplateRows = 'repeat(16, 1fr)'


}

createGrid();