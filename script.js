const gridContainer = document.getElementById('cell-container')
let gridSide = 4
let cellCount = gridSide ** 2
let cellSide = 896 / gridSide
let currColor = 'red'

generateGrid(cellCount)

//set of grid controls
const gridControl = document.getElementById('grid-size')
gridControl.addEventListener(`input`, function() {
    clearGrid()
    gridSide = gridControl.value * 1
    cellCount = gridSide ** 2
    cellSide = 896 / gridSide
    generateGrid(cellCount)
})

//set of color controls
const colorPicker = document.getElementById('set-color')
colorPicker.addEventListener('click', () => {
    currColor = document.getElementById('curr-color').value
    colorPicker.style.backgroundColor = currColor
})

//grid generator
function generateGrid(count) {
    const cells = []
    fillCellArray(count, cells)
    cells.forEach(e => {
        gridContainer.appendChild(e)
    });
}

//create an array of cells to fill container with assigned id class and height width
function fillCellArray(count, array) {
    for (let i = 0; i < count; i++ ) {
        const cell = document.createElement('div')
        cell.classList.add('grid-cell')
        cell.setAttribute('id', `${i}`)
        cell.style.width = `${cellSide}px`
        cell.style.height = `${cellSide}px`
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = `${currColor}`
            })
        array.push(cell)
    }
}

//clear prev cells
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}









