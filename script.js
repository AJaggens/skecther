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
let rainbowMode = 'disabled'

generateGrid(cellCount)

document.getElementById('eraser-button').addEventListener('click', () => {
    currColor = '#ffffff'
    document.getElementById('curr-color').value = currColor
    if (rainbowMode == 'enabled') {rainbowMode = 'disabled'
    document.getElementById('rainbow-button').style.borderColor = 'red'}
})

document.getElementById('reset-button').addEventListener('click', () => resetGrid())

document.getElementById('rainbow-button').addEventListener('click', () => {
    if (rainbowMode == 'disabled') {
        rainbowMode = 'enabled'
        document.getElementById('rainbow-button').style.borderColor = 'springgreen'
    }
    else {
        rainbowMode = 'disabled'
        document.getElementById('rainbow-button').style.borderColor = 'red'
        }
})

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
const colorPicker = document.getElementById('curr-color')
colorPicker.addEventListener('input', () => {
    currColor = document.getElementById('curr-color').value
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
        cell.addEventListener('pointermove', () => {
            if (currMode == 'enabled') { 
                if (rainbowMode == 'enabled') {
                    genRandColor()
                    cell.style.backgroundColor = `${currColor}`
                }
                else {cell.style.backgroundColor = `${currColor}`}
                    
                     
        }
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

function resetGrid() {
    clearGrid()
    generateGrid(cellCount)
}


//to make rainbow painter create a var to store mode, add to fillCellArray() conditional check for enabled rainbowmode, set color to random

function genRandColor() {
    currColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    document.getElementById('curr-color').value = currColor
}



