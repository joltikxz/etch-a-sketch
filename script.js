const gridContainer = document.querySelector('.grid-container');
const inputBtn = document.querySelector('.input');
let opacity;

function createGrid(size) {
    opacity = 0.10;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    } 

    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
    
            let gridTile = document.createElement('div');
            
            let dimension = parseInt(960 / size);
            gridTile.style.height = `${dimension}px`;
            gridTile.style.width = `${dimension}px`;

            //applying the styles
            gridTile.setAttribute('class', 'tile');
            gridContainer.appendChild(gridTile);
    
            //setting up the event listener
            gridTile.addEventListener('mouseover', () => {
                gridTile.style.backgroundColor = randomRGB();
                gridTile.style.opacity = progressiveOpacity();
            });
        }
    }
}

function randomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function progressiveOpacity() {
    let temp = opacity;
    if (temp === 1.0) {
        return temp;
    } else {
        opacity += 0.10;
        return temp;
    }
}

createGrid(16);

inputBtn.addEventListener('click', () => {
    let size;
    do {
        size = parseInt(prompt('Enter the size of the grid: '));
    } while (size > 100 || size < 0);

    createGrid(size);
});


