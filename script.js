
const container = document.getElementById("sketch-container");

let slider = document.querySelector('.slider');
slider.addEventListener('input', changePixels);


let currColor = 'black';

//stores all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', doButtonStuff));

//function to generate the main etch-a-sketch grid
function makeRows(rows, cols, color) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };

  let gridPixels = container.querySelectorAll('div');

  switch (color) {
    case 'black':
      setBlackPixels(gridPixels);
      break;
    case 'xmas':
      setXmasPixels(gridPixels);
      break;
    case 'rainbow':
      setRainbowPixels(gridPixels);
      break;

  }
  
};
//initial rows and columns;
makeRows(16, 16, 'black');

/*
* This function gets called by the slider, and it
* adjusts the dimensions of the grid.
*/
function changePixels() {
  let pixels = slider.value;

  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(cell => cell.remove());

  makeRows(pixels, pixels, currColor);
}

function doButtonStuff(e) {

  let btnSelection = e.target.id;

  let gridPixels = container.querySelectorAll('div');

  switch (btnSelection) {
    case 'black':
      currColor = 'black';
      setBlackPixels(gridPixels);
      break;
    case 'xmas':
      currColor = 'xmas';
      setXmasPixels(gridPixels);
      break;
    case 'rainbow':
      currColor = 'rainbow';
      setRainbowPixels(gridPixels);
      break;
    case 'reset':
      resetPixels(gridPixels);
      break;
  }

}

function setBlackPixels(gridPixels) {

  gridPixels.forEach(cell => cell.addEventListener('mouseenter', () => cell.classList.add('black')));
}

function setXmasPixels(gridPixels) {

  gridPixels.forEach(cell => cell.addEventListener('mouseenter', () => cell.classList.remove()));

  gridPixels.forEach(redOrGreen);
  
}

function redOrGreen(cell) {
  num = Math.floor((Math.random()) * 2);

  if (num == 1) {
    cell.addEventListener('mouseenter', () => cell.classList.add('xmas-green'));
  } else {
    cell.addEventListener('mouseenter', () => cell.classList.add('xmas-red'));
  }
}

function setRainbowPixels(gridPixels) {

  gridPixels.forEach(cell => cell.addEventListener('mouseenter', () => cell.classList.remove()));
  gridPixels.forEach(rainbow);
 
}

function rainbow(cell) {
  num = Math.floor((Math.random()) * 6);

  switch (num) {
    case 0:
      cell.addEventListener('mouseenter', () => cell.classList.add('xmas-green'));
      break;
    case 1:
      cell.addEventListener('mouseenter', () => cell.classList.add('xmas-red'));
      break;
    case 2:
      cell.addEventListener('mouseenter', () => cell.classList.add('purple'));
      break;
    case 3:
      cell.addEventListener('mouseenter', () => cell.classList.add('blue'));
      break;
    case 4:
      cell.addEventListener('mouseenter', () => cell.classList.add('violet'));
      break;
    case 5:
      cell.addEventListener('mouseenter', () => cell.classList.add('yellow'));
      break;
  }
}

function resetPixels(gridPixels) {
  gridPixels.forEach(cell => cell.remove());
  makeRows(16, 16, 'black');
}