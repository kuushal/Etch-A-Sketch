const container = document.querySelector('.container');
drawGrid(16);


const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid);

const setSizeButton = document.querySelector('.set-size');
setSizeButton.addEventListener('click', setGridSize);


function changeBackgroundColorRandom(e) {
    let eventType = e.type;
    const element = e.target;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = `#${randomColor}`;
}


function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        const subContainer = document.createElement('div');
        subContainer.classList.add('sub-container');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            subContainer.appendChild(square);
            container.appendChild(subContainer);
        }
    }

    const divs = document.querySelectorAll('.square');
    divs.forEach(div => div.addEventListener('mouseover', changeBackgroundColorRandom));
}

function resetGrid() {
    const divs = document.querySelectorAll('.square');
    divs.forEach(div => div.style.backgroundColor = '#fff');
}

function setGridSize(e) {
    let error = document.getElementById('error');
    let size = document.getElementById('size').value;
    if (size >= 0 && size <= 100) {
        error.textContent = '';
        container.replaceChildren();
        drawGrid(size);
    } else {
        error.textContent = 'Please enter value between 0 & 100';
    }
}


