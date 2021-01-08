/*
* TODO: get slider data, update pixel functions
*/

const container = document.getElementById("sketch-container");

function makeRows(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseenter', () => cell.classList.add('black'));
    container.appendChild(cell).className = "grid-item";
  };
};
//initial rows and columns;
makeRows(16, 16);

let slider = document.querySelector('.slider');
slider.addEventListener('input', changePixels);


function changePixels() {
  let pixels = slider.value;

  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.remove());

  makeRows(pixels, pixels);
  console.log(pixels);
}

//stores all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', doButtonStuff));

function doButtonStuff(e) {
  //TODO: remove this
  console.log(e.target.id);

  let btnSelection = e.target.id;
  switch (btnSelection) {
    case 'black':
      console.log("black chosen...");
      setBlackPixels();
      break;
    case 'xmas':
      setXmasPixels();
      break;
    case 'rainbow':
      setRainbowPixels();
      break;
    case 'reset':
      resetPixels();
      break;
  }

}

function setBlackPixels() {
  console.log("Setting pixels to black...");
}

function setXmasPixels() {
  console.log("Setting pixels to red & green...")
}

function setRainbowPixels() {
  console.log("Setting pixels to rainbow...");
}

function resetPixels() {
  console.log("Resetting...");
}