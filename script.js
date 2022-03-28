const gridContainer = document.getElementById('cell-container')

//setting up listeners for mode switch
document.addEventListener('mousedown', () => {
    currMode = `enabled`
    console.log(currMode)
})
document.addEventListener('mouseup', () => {
    currMode = `disabled`
    console.log(currMode)
})

//grid related vars
let gridSide = 4
let cellCount = gridSide ** 2
let cellSide = 896 / gridSide

//mode related vars
let currMode = 'disabled'
let currColor = '#000000'

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
const colorPicker = document.getElementById('set-color-button')
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
        cell.setAttribute('draggable', false)
        cell.style.width = `${cellSide}px`
        cell.style.height = `${cellSide}px`
        cell.addEventListener('pointerenter', () => {
            if (currMode == 'enabled') { cell.style.backgroundColor = `${currColor}` }
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









