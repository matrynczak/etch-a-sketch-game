const getRandomRgbColor = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`; // Collect all to a css color string
}

const createElements = (num) => {
    const container = document.querySelector('#container');
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${num}, 1fr);`);

    for(let i=0; i<num*num; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        container.appendChild(item);
    }
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', (elem) => elem.target.style.background = getRandomRgbColor());
});
};

const prepareGrid = () => {
    const container = document.querySelector('#container');
    const items = document.querySelectorAll('.grid-item');
    if(items.length > 0) {
        items.forEach((item) => {
            container.removeChild(item);
        })
    }

    let size = window.prompt('How big the side of the grid should be? Note that the max allowed size of side is 100.');
    if(size>100) size = 100;
    createElements(size);
};

const gridButton = document.querySelector('#grid-shape-btn');
gridButton.addEventListener('click', prepareGrid);
