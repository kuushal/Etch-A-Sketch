const container = document.querySelector('.container');
drawGrid(16);
const divs = document.querySelectorAll('.square');
divs.forEach(div => div.addEventListener('mouseover', changeBackgroundColor));

function changeBackgroundColor(e) {
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
}



